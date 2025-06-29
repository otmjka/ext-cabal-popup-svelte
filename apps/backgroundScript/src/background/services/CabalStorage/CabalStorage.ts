import { ApiOrderParsed } from '@/cabal-clinet-sdk/CabalServiceTypes';
import { defaultCabalConfig } from './defaultCabalStorageValue';
import { BuySellConfig, CabalConfig } from './types';

class CabalStorage {
	async init() {
		return chrome.storage.local.set({ config: defaultCabalConfig });
	}

	async setToDefault() {
		return chrome.storage.local.set({ config: defaultCabalConfig });
	}

	async getConfig(): Promise<CabalConfig> {
		const result = await chrome.storage.local.get<{ config: CabalConfig }>(['config']);
		return result.config;
	}

	async getApiKey() {
		return chrome.storage.local.get(['apiKey']);
	}

	async setApiKey({ apiKey }: { apiKey: string | null }) {
		return chrome.storage.local.set({ apiKey });
	}

	async setBuySellSettings(value: BuySellConfig) {
		const { config } = await chrome.storage.local.get<{ config: CabalConfig }>(['config']);
		const newBuySellValue = { ...config.buySell, ...value };
		const newConfig = { ...config, buySell: newBuySellValue };
		await chrome.storage.local.set({ config: newConfig });
	}

	async addLimitOrder(value: ApiOrderParsed) {
		const { cmdLog } = await chrome.storage.local.get(['cmdLog']);
		let newValue = {};
		if (!cmdLog) {
			newValue = {
				items: [{ data: value, date: Date.now() }]
			};
		}

		newValue = { ...cmdLog, items: [value, ...cmdLog.items] };
		await chrome.storage.local.set({ cmdLog: newValue });
	}
}

export default CabalStorage;
