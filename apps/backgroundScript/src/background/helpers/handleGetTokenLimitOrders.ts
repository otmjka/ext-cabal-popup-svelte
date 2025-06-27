import {
	GetTokenLimitOrdersPayloadMessage,
	GetTokenLimitOrdersResponse
} from '@/shared/src/cabalSharedTypes';
import { config } from '../backgroundConfig';
import { BackgroundState } from '../types';
import { getMetaByState } from './getMetaByState';

export const handleGetTokenLimitOrders = async ({
	sendResponse,
	state,
	message
}: {
	sendResponse: (response?: GetTokenLimitOrdersResponse) => void;
	state: BackgroundState;
	message: GetTokenLimitOrdersPayloadMessage;
}) => {
	try {
		const messageMint = message.data.mint;
		const resultValue = await state.cabal?.getTokenLimitOrders({ mint: messageMint });

		if (resultValue?.error) {
			throw resultValue?.error;
		}

		if (config.showSubscribeTokenReceiveMsg) {
			console.log(`[handleSubscribeTokenMessage][result]`, resultValue?.result);
		}

		sendResponse({
			meta: getMetaByState(state),
			payload: { result: resultValue?.result || [] }
		});
	} catch (error) {
		sendResponse({
			meta: {
				...getMetaByState(state),
				error: `subscribe token error: ${(error as Error).message}`
			},
			payload: { error: true }
		});
	}
};
