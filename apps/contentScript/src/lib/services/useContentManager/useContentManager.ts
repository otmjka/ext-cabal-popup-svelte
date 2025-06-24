// src/lib/useContentManager.ts
import { onMount, onDestroy } from 'svelte';
import { useStartCabalService } from './useCabalService';

export function useContentManager(mint: string) {
	const {
		startListen,
		registerTab
		// subscribeToken,
		// clean,
	} = useStartCabalService();

	const handleStart = () => {
		// setContentAppStore('tabMint', mint);
		startListen();
		registerTab({ mint, locationHref: location.href });
	};

	const handleFocus = () => {
		console.log('Вкладка в фокусе');

		// setContentAppStore('tokenStatus', null);
		// setContentAppStore('tradeStats', null);
		// setContentAppStore('lastTradeEvent', null);
		// setContentAppStore('isReady', false);

		// const tabMint = contentAppStore.tabMint;
		// if (!tabMint) {
		//   console.log('[cabal-content]: no tab mint');
		//   return;
		// }

		// console.log(`[cabal-content]: focus # subscribe mint ${tabMint}`);
		// subscribeToken({ mint: tabMint });
	};

	const handleBlur = () => {
		console.log('Вкладка потеряла фокус');
	};

	onMount(() => {
		handleStart();
		window.addEventListener('focus', handleFocus);
		window.addEventListener('blur', handleBlur);
	});

	onDestroy(() => {
		// clean();
		window.removeEventListener('focus', handleFocus);
		window.removeEventListener('blur', handleBlur);
		console.log('[cleanup] Ресурсы очищены');
	});
}
