import {
	BgPlaceLimitOrdersResponse,
	PlaceLimitOrderPayloadMessage
} from '@/shared/src/cabalSharedTypes';
import { BackgroundState } from '../types';
import { getMetaByState } from './getMetaByState';

export const handlePlaceLimitOrder = async ({
	sendResponse,
	state,
	message
}: {
	sendResponse: (response?: BgPlaceLimitOrdersResponse) => void;
	state: BackgroundState;
	message: PlaceLimitOrderPayloadMessage;
}) => {
	try {
		state.cabalStorage.addLimitOrder(message.data);
		const resultValue = await state.cabal?.placeLimitOrders(message.data);
		let parsedResult;
		if (resultValue?.result) {
			parsedResult = {
				ids: resultValue?.result.ids.map(String),
				tokenOrdersNum: resultValue?.result.tokenOrdersNum
			};
			sendResponse({
				meta: getMetaByState(state),
				payload: {
					error: resultValue?.error,
					result: parsedResult
				}
			});
		}
	} catch (error) {
		sendResponse({
			meta: getMetaByState(state),
			payload: {
				error: (error as Error).message
			}
		});
	}
};
