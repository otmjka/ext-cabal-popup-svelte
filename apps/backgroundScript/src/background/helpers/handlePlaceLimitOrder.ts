import { PlaceLimitOrderPayloadMessage } from '@/shared/src/cabalSharedTypes';
import { BackgroundState } from '../types';
import { getMetaByState } from './getMetaByState';

export const handlePlaceLimitOrder = async ({
	sendResponse,
	state,
	message
}: {
	sendResponse: (response?: any) => void;
	state: BackgroundState;
	message: PlaceLimitOrderPayloadMessage;
}) => {
	try {
		state.cabal?.placeLimitOrders(message.data);
	} catch (error) {
	} finally {
		sendResponse({ meta: getMetaByState(state) });
	}
};
