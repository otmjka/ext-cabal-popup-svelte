import {
	BackgroundMessages,
	CabalTradeStreamMessages,
	CabalUserActivityStreamMessages,
	type BuyMarketPayloadMessage,
	type FromBackgroundMessage,
	type Mint,
	type SellMarketPayloadMessage
} from '@/shared/src/cabalSharedTypes';
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

const messageHandler = (message: FromBackgroundMessage, sender, sendResponse) => {
	if (
		![
			CabalUserActivityStreamMessages.userActivityPong,
			CabalTradeStreamMessages.tradePong
		].includes(message?.eventName)
	) {
		console.log(`received message: name: ${message?.eventName}`, message);
	}

	// handle meta
	if (
		![
			CabalUserActivityStreamMessages.userActivityPong,
			CabalTradeStreamMessages.tradePong,
			CabalTradeStreamMessages.tradeEvent
		].includes(message?.eventName)
	) {
		metaToStatus(message);
	}

	switch (message.eventName) {
		case CabalUserActivityStreamMessages.tradeStats:
			console.log('[tradeStats]', message);
			contentAppStore.update((store) => ({ ...store, tradeStats: message.data }));
			break;
		case CabalTradeStreamMessages.tradeEvent:
			contentAppStore.update((store) => ({ ...store, lastTradeEvent: message.data }));
			break;
		case CabalTradeStreamMessages.tokenStatus:
			console.log('[tokenStatus]', message);
			contentAppStore.update((store) => ({ ...store, tokenStatus: message.data }));
			break;
		case CabalUserActivityStreamMessages.txnCb:
			console.log('[Tx]', message);
			contentAppStore.update((store) => ({
				...store,
				txLog: [{ ...message.data }, ...store.txLog]
			}));
			break;
	}
	sendResponse({ ok: true });
};

const startListen = () => {
	chrome.runtime.onMessage.addListener(messageHandler);
};

const subscribeToken = async ({ mint }: { mint: string }) => {
	return new Promise((resolve, reject) => {
		try {
			chrome.runtime.sendMessage(
				{ type: BackgroundMessages.SUBSCRIBE_TOKEN, data: { mint } },
				(response) => {
					resolve(response);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};

const marketBuy = ({ mint, amountSol }: { mint: string; amountSol: number }) => {
	const message: BuyMarketPayloadMessage = {
		type: BackgroundMessages.BUY_MARKET,
		data: { mint, amountSol }
	};
	chrome.runtime.sendMessage(message);
};

const marketSell = ({ mint, amountBps }: { mint: string; amountBps: number }) => {
	const message: SellMarketPayloadMessage = {
		type: BackgroundMessages.SELL_MARKET,
		data: { mint, amountBps }
	};
	chrome.runtime.sendMessage(message);
};

// export const getTokenLimitOrders = async ({ mint }: { mint: string }) => {
//   try {
//     return state.cabal?.getTokenLimitOrders({ mint });
//   } catch (error) {
//     console.error('getTokenLimitOrders', error);
//   }
// };

const getTokenLimitOrders = async ({ mint }: { mint: string }) => {
	return new Promise((resolve, reject) => {
		try {
			chrome.runtime.sendMessage(
				{ type: BackgroundMessages.GET_TOKEN_LIMIT_ORDERS, data: { mint } },
				(response) => {
					resolve(response);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};

export const useCabalService = () => {
	return { registerTab, startListen, subscribeToken, getTokenLimitOrders, marketBuy, marketSell };
};
