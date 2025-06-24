<script lang="ts">
	export let mint: string;

	import { onMount, onDestroy } from 'svelte';
	import { useCabalService } from './useCabalService';
	import FloatingWidget from '@/components/features/floating-widget/FloatingWidget.svelte';
	import { contentAppStore } from './contentAppStore';

	const { registerTab, startListen, subscribeToken } = useCabalService();
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

			contentAppStore.subscribe((store) => {
				if (store.tabMint) {
					subscribeToken({ mint: store.tabMint });
				}
			});
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
		};
	});
</script>

<main class="e:absolute e:top-0 e:right-0 e:z-[200]">
	<FloatingWidget />
</main>
