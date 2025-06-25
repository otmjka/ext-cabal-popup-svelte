import type { Mint } from '../types/cabalSharedTypes';
import { onMount } from 'svelte';
import { useCabalService } from './useCabalService';
import { contentAppStore } from '../stores/contentAppStore';

export const useContentManager = ({ mint }: { mint: Mint }) => {
	const { registerTab, startListen, subscribeToken, marketBuy, marketSell } = useCabalService();

	let tabMint: string | undefined = '';

	const unsubscribe = contentAppStore.subscribe((store) => {
		tabMint = store.tabMint;
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

	const handleMarketBuySol = (value: number) => {
		console.log('[handleMarketBuySol]', value, tabMint);
		if (!value || !tabMint) {
			return;
		}
		marketBuy({ mint: tabMint, amountSol: value });
	};

	const handleMarketSellPerc = (value: number) => {
		console.log('[handleMarketSellPerc]', value, tabMint);
		if (!value || !tabMint) {
			return;
		}
		const amountBps = value * 100;
		marketSell({ mint: tabMint, amountBps });
	};

	return {
		handlers: {
			onMarketSellPerc: handleMarketSellPerc,
			onMarketBuySol: handleMarketBuySol,
			onOpenSettings: handleOpenSettings
		}
	};
};
