import {
	BackgroundMessages,
	CabalTradeStreamMessages,
	CabalUserActivityStreamMessages,
	type BuyMarketPayloadMessage,
	type FromBackgroundMessage,
	type GetTokenLimitOrdersResponse,
	type Mint,
	type SellMarketPayloadMessage,
	type SubscribeTokenResponse
} from '@/shared/src/cabalSharedTypes';
import { contentAppStore } from '../stores/contentAppStore';
import { type ApiOrderParsed } from '@/cabal-clinet-sdk/CabalServiceTypes';

const metaToStatus = (message: FromBackgroundMessage) => {
	console.log('[metaToStatus]', message);
	contentAppStore.update((store) => ({
		...store,
		isReady: message.meta.isReady,
		shouldSetApiKey: message.meta.shouldSetApiKey,
		solPriceUSD: message.meta.solPriceUSD,
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

			const ussubscribe = contentAppStore.subscribe((store) => {
				if (!store.tabMint) {
					return;
				}
				subscribeToken({ mint: store.tabMint });
			});
			ussubscribe();
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
				(response: SubscribeTokenResponse) => {
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

const getTokenLimitOrders = async ({
	mint
}: {
	mint: string;
}): Promise<GetTokenLimitOrdersResponse> => {
	return new Promise((resolve, reject) => {
		try {
			chrome.runtime.sendMessage(
				{ type: BackgroundMessages.GET_TOKEN_LIMIT_ORDERS, data: { mint } },
				(response: GetTokenLimitOrdersResponse) => {
					contentAppStore.update((store) => ({
						...store,
						limitOrders: [...(response.payload.result || [])]
					}));
					resolve(response);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};

export const placeLimitOrder = async (item: ApiOrderParsed) => {
	return new Promise((resolve, reject) => {
		try {
			chrome.runtime.sendMessage(
				{ type: BackgroundMessages.PLACE_LIMIT_ORDER, data: item },
				(response: GetTokenLimitOrdersResponse) => {
					resolve(response);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};

export const useCabalService = () => {
	return {
		registerTab,
		startListen,
		subscribeToken,
		getTokenLimitOrders,
		placeLimitOrder,
		marketBuy,
		marketSell
	};
};
