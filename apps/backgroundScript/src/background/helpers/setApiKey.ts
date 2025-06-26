import { SetApiKeyPromiseResponse } from '@/shared/src/cabalSharedTypes';
import { BackgroundState } from '../types';
import { getMetaByState } from './getMetaByState';

export const setApiKey = async ({
	sendResponse,
	message,
	state
}: {
	sendResponse: (response?: SetApiKeyPromiseResponse) => void;
	message: any;
	state: BackgroundState;
}) => {
	await state.cabalStorage.setApiKey({ apiKey: message.data.apiKey });
	state.apiKey = message.data.apiKey;
	sendResponse({
		meta: getMetaByState(state)
	});
};
