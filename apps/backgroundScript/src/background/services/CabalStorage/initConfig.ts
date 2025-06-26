import { BackgroundState } from '../../types';

export const initConfig = async ({ state }: { state: BackgroundState }) => {
	try {
		const apiKey = await state.cabalStorage.getApiKey();
		state.apiKey = apiKey.apiKey;

		state.config = await state.cabalStorage.getConfig();

		if (!state.config) {
			console.log(`[background] no config, will init`);
			await state.cabalStorage?.init();
			const config = await state.cabalStorage.getConfig();
			state.config = config;
		}

		console.log('[background][initConfig]', state.config);
		console.log('[background][apiKey] exists:', String(!!apiKey.apiKey));
	} catch (error) {
		console.error(`[bg][initConfig] error`, error);
	}
};
