<script lang="ts">
	import { Input, Section, Paper, Button } from '@/components/ui';

	let apiKey: string | undefined = $state();

	const logo = chrome.runtime.getURL('assets2/logo_cabal_horizontal.svg');

	$effect(() => {
		const popupOpen = () => {
			console.log('[content-script][popupOpen]');
			const payload = {
				type: 'POPUP_OPEN'
			};

			const cb = (response: { shouldSetApiKey: boolean; isReady: boolean }) => {
				console.log('### respose', response);
				// setContentAppStore('isReady', response.isReady);
				// setContentAppStore('shouldSetApiKey', response.shouldSetApiKey);
			};
			console.log('[content-script][popupOpen][send message]', payload);

			// sendMessage({ payload, cb });
			chrome.runtime.sendMessage(payload, cb);
		};
		popupOpen();
	});

	const sendApiKeyPromise = (apiKey?: string) => {
		const payload = {
			type: 'SET_APIKEY_PROMISE',
			data: { apiKey }
		};

		const cb = (response) => {
			console.log('res PROMISE', response);
			// if (response?.meta) {
			//   metaToStores(response?.meta);

			//   if (response?.meta.error) {
			//     setContentAppStore('apiKeyError', response?.meta.error);
			//   }
			// }
		};

		chrome.runtime.sendMessage(payload, cb);
	};

	const sendApiKey = () => {
		sendApiKeyPromise(apiKey);
		console.log('[popup]', apiKey);
	};

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		console.log('!!!', target.value);
		apiKey = target.value;
	}
</script>

<main class="e:min-w-[288px]">
	<Paper>
		<div>
			<img src={logo} alt="" />
		</div>
		<input type="text" value={apiKey} oninput={handleInput} placeholder="Печатай что хочешь" />
		<Button class="e:bg-red-500" onclick={() => sendApiKey()}>Connect to Cabal</Button>
		<p>Текущее значение: <strong>{apiKey}</strong></p>
	</Paper>
</main>
