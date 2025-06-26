import { SaveBuySellSettingsMessage } from '@/shared/src/cabalSharedTypes';
import { BackgroundState } from '../types';
import { getMetaByState } from './getMetaByState';

export const buysellSettingsChange = async ({
	sendResponse,
	message,
	state
}: {
	sendResponse: (response?: any) => void;
	message: SaveBuySellSettingsMessage;
	state: BackgroundState;
}) => {
	try {
		await state.cabalStorage.setBuySellSettings(message.data);
		const config = await state.cabalStorage.getConfig();
		state.config = config;

		sendResponse({
			meta: getMetaByState(state)
		});
	} catch (error) {
		console.error(`initCabalOnTab`, error);
	}
};
