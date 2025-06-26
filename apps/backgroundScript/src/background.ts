import CabalConnector, { type OnMessageParams } from './background/CabalConnector';
import { state } from './background/AppState';
import { handleMessagesToBackground } from './background/helpers/handleMessagesToBackground';
import { changeTab } from './background/helpers/changeTab';
import { sendMessageToActiveTab } from './background/helpers/sendMessageToActiveTab';
import * as messagesToContent from './background/helpers/messagesToContent';
import { initConfig } from './background/services/CabalStorage/initConfig';

const start = async () => {
	console.log('[bg] cabal start', Date.now());

	await initConfig({ state });

	// connection, reconection, handle cabal messages
	const cabalConnector = new CabalConnector({
		state,
		onSendMessage: (params: OnMessageParams) => {
			sendMessageToActiveTab(params);
		}
	});

	// message to bg handler
	const messagesToBackgroundHandler = handleMessagesToBackground({ state });
	chrome.runtime.onMessage.addListener(messagesToBackgroundHandler);

	// active tab changed
	// if registered -> subscribe token
	const tabsOnActivatedHandler = changeTab({ state });
	chrome.tabs.onActivated.addListener(tabsOnActivatedHandler);

	chrome.storage.onChanged.addListener((changes, namespace) => {
		console.log('[background] storage changes!', namespace, changes);

		// config changed
		if (namespace === 'local' && changes.config) {
			console.log(`[background] config changed`);
			state.config = changes.config.newValue;

			sendMessageToActiveTab({
				message: messagesToContent.configChanged({ state }),
				state
			});
		}

		// api key changed
		if (namespace === 'local' && changes.apiKey) {
			const newApiKey = changes.apiKey.newValue;
			console.log('[background][storage][API KEY changed]', newApiKey);
			state.apiKey = newApiKey;
			if (state.apiKey) {
				cabalConnector.scheduleReconnect();
			}

			if (!state.apiKey) {
				cabalConnector.cleanCabalService();
			}
		}
	});

	cabalConnector.initializeCabalService();
};

start();
