<script lang="ts">
	export let mint: string;

	import { onMount, onDestroy } from 'svelte';
	import { useStartCabalService } from './lib/services/useContentManager/useCabalService';
	import FloatingWidget from '@/components/features/floating-widget/FloatingWidget.svelte';

	const { registerTab } = useStartCabalService();
	onMount(() => {
		console.log('[onMount]', mint, location.href);
		registerTab({ mint: mint, locationHref: location.href });
	});
</script>

<main class="e:absolute e:top-0 e:right-0 e:z-[200]">
	<FloatingWidget />
</main>
