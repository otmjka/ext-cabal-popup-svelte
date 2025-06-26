import { BuyMarketPayloadMessage } from '@/shared/src/cabalSharedTypes';
import { BackgroundState } from '../types';
import { queryActiveTab } from './queryActiveTab';

export const handleBuyMarketMessage = async ({
	sendResponse,
	state,
	message
}: {
	sendResponse: (response?: any) => void;
	state: BackgroundState;
	message: BuyMarketPayloadMessage;
}) => {
	const tabs = await queryActiveTab();
	const tabId = tabs[0]?.id;
	const listener = state.getTabListener(tabId);

	console.log('### Buy Market ###', tabId, listener?.mint);
	const cabalValue = state.getCabalInstance();
	const { mint: messageMint, amountSol } = message.data;
	if (state.config && cabalValue && messageMint && amountSol) {
		const buyParams = {
			amount: amountSol,
			mint: messageMint,
			slippageBps: state.config.buySell.buySlippage,
			priorityFee: state.config.buySell.buyPriorityFee,
			tip: state.config.buySell.buyTip
		};
		console.log('buyParams', buyParams);
		cabalValue.marketBuy(buyParams);
	}
	sendResponse({ isReady: state.getIsReady() });
};
