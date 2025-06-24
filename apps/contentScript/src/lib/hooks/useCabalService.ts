import {
	CabalTradeStreamMessages,
	CabalUserActivityStreamMessages,
	type FromBackgroundMessage,
	type Mint
} from '@/types/cabalSharedTypes';
import { contentAppStore } from '../stores/contentAppStore';

const metaToStatus = (message: FromBackgroundMessage) => {
	console.log('[metaToStatus]', message);
	contentAppStore.update((store) => ({
		...store,
		isReady: message.meta.isReady,
		shouldSetApiKey: message.meta.shouldSetApiKey,
		config: message.meta.config
	}));
};

const registerTab = ({ mint, locationHref }: { mint: Mint; locationHref: string }) => {
	chrome.runtime.sendMessage(
		{
			type: 'INIT_CABAL',
			data: { mint, url: locationHref }
		},
		(response) => {
			metaToStatus(response);
		}
	);
};

const messageHandler = (message, sender, sendResponse) => {
	if (
		![
			CabalUserActivityStreamMessages.userActivityPong,
			CabalTradeStreamMessages.tradePong
		].includes(message?.eventName)
	) {
		console.log(`received message: name: ${message?.eventName}`, message);
	}

	if (
		![
			CabalUserActivityStreamMessages.userActivityPong,
			CabalTradeStreamMessages.tradePong,
			CabalTradeStreamMessages.tradeEvent
		].includes(message?.eventName)
	) {
		metaToStatus(message);
	}

	switch (message.type) {
		case CabalUserActivityStreamMessages.tradeStats:
			console.log('tradeStats', message);
			contentAppStore.update((store) => ({ ...store, tradeStats: message.data }));
			break;
		case CabalTradeStreamMessages.tradeEvent:
			console.log('tradeEvent', message);

			contentAppStore.update((store) => ({ ...store, lastTradeEvent: message.data }));
			break;
		case 'tokenStatus':
			console.log('tokenStatus', message);
			contentAppStore.update((store) => ({ ...store, tokenStatus: message.data }));
			break;
	}
	sendResponse({ ok: true });
};

const startListen = () => {
	chrome.runtime.onMessage.addListener(messageHandler);
};

const subscribeToken = ({ mint }: { mint: string }) => {
	chrome.runtime.sendMessage({ type: 'SUBSCRIBE_TOKEN', data: { mint } });
};

export const useCabalService = () => {
	return { registerTab, startListen, subscribeToken };
};
