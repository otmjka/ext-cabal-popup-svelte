import { SellMarketPayloadMessage } from '../../shared/types';
import { BackgroundState } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const handleSellMarketMessage = async ({
	sendResponse,
	state,
	message
}: {
	sendResponse: (response?: any) => void;
	state: BackgroundState;
	message: SellMarketPayloadMessage;
}) => {
	const tabs = await queryActiveTab();
	const tabId = tabs[0]?.id;
	const listener = state.getTabListener(tabId);

	console.log('### Buy Market ###', tabId, listener?.mint);
	const cabalValue = state.getCabalInstance();
	const { mint: messageMint, amountBps } = message.data;
	if (state.config && cabalValue && messageMint && amountBps) {
		const sellParams = {
			amountBps,
			mint: messageMint,
			slippageBps: state.config.buySell.buySlippage,
			priorityFee: state.config.buySell.buyPriorityFee,
			tip: state.config.buySell.buyTip
		};
		console.log('[handleSellMarketMessage]:sellParams', sellParams);
		const sellResult = await cabalValue.marketSell(sellParams);
		console.log('[handleSellMarketMessage]:sellResult', sellResult);
	}
	sendResponse({ isReady: state.getIsReady() });
};
