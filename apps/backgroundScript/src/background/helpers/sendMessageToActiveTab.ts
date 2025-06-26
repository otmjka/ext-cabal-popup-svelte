import {
	CabalTradeStreamMessages,
	CabalUserActivityStreamMessages
} from '@/cabal-clinet-sdk/index';
import { FromBackgroundMessage } from '@/shared/src/cabalSharedTypes';
import { config } from '../backgroundConfig';
import { BackgroundState } from '../types';

export const sendMessageToActiveTab = ({
	message,
	state
}: {
	message: FromBackgroundMessage;
	state: BackgroundState;
}) => {
	const activeTab = state.getActiveTab();

	if (
		![
			CabalUserActivityStreamMessages.userActivityPong,
			CabalTradeStreamMessages.tradePong
		].includes(message.eventName)
	) {
		console.log(`[bg][sendMessageToActiveTab]: activeTab: [${activeTab}]; message:`, message);
	}

	if (!activeTab) {
		return;
	}

	chrome.tabs.sendMessage(activeTab, message, (response) => {
		if (chrome.runtime.lastError) {
			console.error('Error sending message:', chrome.runtime.lastError.message);
		} else {
			if (config.showSendMessageResponseLog) {
				console.log('Message sent to active tab:', message);
			}
		}
	});
};
