import type { Mint } from '../types/cabalSharedTypes';
import { onMount, onDestroy } from 'svelte';
import { useCabalService } from './useCabalService';
import { contentAppStore } from '../stores/contentAppStore';
import { writable } from 'svelte/store';

export const useContentManager = ({ mint }: { mint: Mint }) => {
	const { registerTab, startListen, subscribeToken } = useCabalService();

	const isWidgetReady = writable(false); // локальный стор

	const unsubscribe = contentAppStore.subscribe((store) => {
		isWidgetReady.set(store.isWidgetReady);
	});

	onMount(() => {
		console.log('[onMount]', mint, location.href);
		contentAppStore.update((store) => ({ ...store, tabMint: mint }));
		startListen();
		registerTab({ mint: mint, locationHref: location.href });

		const handleFocus = () => {
			console.log('[content] focus');
			contentAppStore.update((store) => ({
				...store,
				tokenStatus: null,
				tradeStats: null,
				lastTradeEvent: null,
				isReady: false
			}));

			subscribeToken({ mint });
		};

		const handleBlur = () => {
			console.log('[content] blur');
		};

		window.addEventListener('focus', handleFocus);
		window.addEventListener('blur', handleBlur);
		return () => {
			console.log('[cleanup]');
			window.removeEventListener('focus', handleFocus);
			window.removeEventListener('blur', handleBlur);
			unsubscribe();
		};
	});

	const handleOpenSettings = () => window.open(chrome.runtime.getURL('home.html'), '_blank');
	return {
		isWidgetReady,
		handleOpenSettings
	};
};
