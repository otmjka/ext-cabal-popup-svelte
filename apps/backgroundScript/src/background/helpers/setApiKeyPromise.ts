import { SetApiKeyPromiseResponse } from '@/shared/src/cabalSharedTypes';
import { BackgroundState } from '../types';
import { getMetaByState } from './getMetaByState';

export const setApiKeyPromise = async ({
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

	state.setApiKeyPromise = new Promise((resolve, rejected) => {
		state._resolveSetApiKey = resolve;
		state._rejectedSetApiKey = rejected;
	});

	state.setApiKeyPromise
		.then(() => {
			console.log('!!! succeesssss');
			sendResponse({
				meta: getMetaByState(state)
			});
		})
		.catch((message) => {
			console.error('!!! catch', message);
			sendResponse({
				meta: getMetaByState(state)
			});
		});
};
