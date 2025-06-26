import type { Mint } from '../types/cabalSharedTypes';
import { onMount } from 'svelte';
import { useCabalService } from './useCabalService';
import { contentAppStore, type ContentAppStore } from '../stores/contentAppStore';
import { getAmountBpsBySol } from '@/untils/token';

export type ContentManagerHandlers = {
	onMarketSellSol: (amount: number) => void;
	onMarketBuySol: (amount: number) => void;
	onOpenSettings: () => void;
	onMarketSellPerc: (value: number) => void;
};

export const useContentManager = ({ mint }: { mint: Mint }) => {
	const { registerTab, startListen, subscribeToken, marketBuy, marketSell } = useCabalService();

	let contentStore: ContentAppStore | undefined;
	const unsubscribe = contentAppStore.subscribe((store) => {
		contentStore = store;
	});

	onMount(() => {
		console.log('[onMount]', mint, location.href);
		contentAppStore.update((store) => ({ ...store, tabMint: mint }));
		startListen();
		registerTab({ mint: mint, locationHref: location.href });

		const handleFocus = () => {
			console.log('[content] focus');
			contentAppStore.update((store) => ({
				...store,
				tokenStatus: null,
				tradeStats: null,
				lastTradeEvent: null,
				isReady: false
			}));

			subscribeToken({ mint });
		};

		const handleBlur = () => {
			console.log('[content] blur');
		};

		window.addEventListener('focus', handleFocus);
		window.addEventListener('blur', handleBlur);
		return () => {
			console.log('[cleanup]');
			window.removeEventListener('focus', handleFocus);
			window.removeEventListener('blur', handleBlur);
			unsubscribe();
		};
	});

	const handleOpenSettings = () => window.open(chrome.runtime.getURL('home.html'), '_blank');

	const handleMarketBuySol = (value: number) => {
		const tabMint = contentStore?.tabMint;

		console.log('[handleMarketBuySol]', value, tabMint);
		if (!value || !tabMint) {
			return;
		}
		marketBuy({ mint: tabMint, amountSol: value });
	};

	const handleMarketSellPerc = (value: number) => {
		const tabMint = contentStore?.tabMint;

		console.log('[handleMarketSellPerc]', value, tabMint);
		if (!value || !tabMint) {
			return;
		}
		const amountBps = value * 100;
		marketSell({ mint: tabMint, amountBps });
	};

	const handleMarketSellSol = (value: number) => {
		if (!contentStore) {
			return;
		}
		const tabMint = contentStore?.tabMint;
		const tokenStatus = contentStore.tokenStatus;
		const tradeStats = contentStore.tradeStats;

		console.log('[handleMarketSellSol]', value, tabMint);
		if (!value || !tabMint || !tokenStatus || !tradeStats) {
			return;
		}

		// tokenBalance * tokenProceInSol = 0.011
		// 0.0005 => 5%
		// 0.0005 / (0.011 / 100)

		const amountBps = Math.round(
			getAmountBpsBySol({ requiredSol: value, tokenStatus, tradeStats })
		);
		console.log('[handleMarketSellSol][amountBps]', amountBps);
		marketSell({ mint: tabMint, amountBps });
	};

	return {
		handlers: {
			onMarketSellSol: handleMarketSellSol,
			onMarketSellPerc: handleMarketSellPerc,
			onMarketBuySol: handleMarketBuySol,
			onOpenSettings: handleOpenSettings
		}
	};
};
