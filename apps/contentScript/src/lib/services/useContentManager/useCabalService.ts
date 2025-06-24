import {
	BackgroundMessages,
	CabalCommonMessages,
	CabalMessageType,
	type BgInitMessageResponse,
	type BgMessageResponse,
	type CabalConfig,
	type FromBackgroundMessage,
	type InitCabalOnTabMessage,
	type MessageListener,
	type MessageToBgPayload,
	type SendResponse
} from './types';

export const sendMessage = <Response = BgMessageResponse>({
	payload,
	cb
}: {
	payload: MessageToBgPayload;
	cb: (response: Response) => void;
}) => {
	console.log('[send message]', payload);
	chrome.runtime.sendMessage(payload, cb);
};

export const registerTab = ({ mint, locationHref }: { mint: string; locationHref: string }) => {
	const payload: InitCabalOnTabMessage = {
		type: BackgroundMessages.INIT_CABAL,
		data: {
			url: locationHref,
			mint
		}
	};

	const cb = (response: BgInitMessageResponse) => {
		console.log('[cabal-content][registerTab response]:', response);

		// setContentAppStore('url', response.url);
		// setContentAppStore('mint', response.mint);
		// setContentAppStore('isReady', response.meta.isReady);
		// setContentAppStore('config', response.meta.config);
		// setContentAppStore('shouldSetApiKey', !response.apiKey);

		// if (response.isReady) {
		//   setCabalUserActivity('status', {
		//     isReady: true,
		//     count: String(Date.now()),
		//   });
		//   setCabalTradeStream('status', {
		//     isReady: true,
		//     count: String(Date.now()),
		//   });
		// }
	};

	sendMessage({ payload, cb });
};

export const startListnenBackgroundMessages = (messageListener: MessageListener) =>
	chrome.runtime.onMessage.addListener(messageListener);

const metaToStatus = (message: FromBackgroundMessage) => {
	console.log('metaToStatus', message);
};

export const msgListener = (
	message: FromBackgroundMessage,
	sender: any,
	sendResponse: SendResponse
) => {
	// if (
	//   ![
	//     CabalUserActivityStreamMessages.userActivityPong,
	//     CabalTradeStreamMessages.tradePong,
	//   ].includes(message?.eventName)
	// ) {
	//   console.log(`received message: name: ${message?.eventName}`, message);
	// }

	const messageType = message?.type;
	if (messageType !== CabalMessageType.CabalEvent) {
		sendResponse({ ok: true });
		return;
	}
	const messageEventName = message?.eventName;
	metaToStatus(message);
	// switch (messageEventName) {
	// 	case CabalCommonMessages.readyStatus:
	// 		console.log(`%%%% %%% ${CabalCommonMessages.readyStatus}`, message);
	// 		// handleReadyStatus(message);
	// 		break;
	// 	case CabalUserActivityStreamMessages.txnCb:
	// 		console.log(`$$$ ${CabalCommonMessages.readyStatus}`, message);
	// 		handleUAtxCB(message);
	// 		break;
	// 	case CabalUserActivityStreamMessages.userActivityConnected:
	// 		handleUserActivityConnected();
	// 		break;
	// 	case CabalUserActivityStreamMessages.userActivityPong:
	// 		handleUserActivityPong(message);
	// 		break;
	// 	case CabalUserActivityStreamMessages.tradeStats:
	// 		handleUserActivityTradeStats(message);
	// 		break;
	// 	case CabalUserActivityStreamMessages.userActivityError:
	// 		handleUserActivityError();
	// 		break;
	// 	// trade streams
	// 	case CabalTradeStreamMessages.tradeConnected:
	// 		handleTradeStreamConnected();
	// 		break;
	// 	case CabalTradeStreamMessages.tradePong:
	// 		handleTradeStreamPong(message);
	// 		break;
	// 	case CabalTradeStreamMessages.tradeEvent:
	// 		handleTradeEvent(message);
	// 		break;
	// 	case CabalTradeStreamMessages.tokenStatus:
	// 		handleTradeTokenStatus(message);
	// 		break;
	// 	case CabalTradeStreamMessages.tradeError:
	// 		handleTradeError();
	// 		break;
	// 	case CabalCommonMessages.configChanged:
	// 		handleConfigChangedMessageFromBg(message);
	// 		break;
	// 	default:
	// 		console.log(`unknown message: ${messageType}`);
	// }
	sendResponse({ ok: true });
};
export function useCabalService() {
	return {
		// saveBuySellSettings,
		// subscribeTokenPromise,
		// resetConfig,
		// getConfig,
		// sendApiKey,
		// sendApiKeyPromise,
		// popupOpen: handlers.popupOpen,
		registerTab,
		// subscribeToken,
		// marketBuy,
		// marketSell,
		startListen: () => startListnenBackgroundMessages(msgListener)
		// clean: () => chrome.runtime.onMessage.removeListener(messageListener),
		// cleanWidget: handlers.cleanWidget,
	};
}
