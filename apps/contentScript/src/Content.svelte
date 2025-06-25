<script lang="ts">
	import FloatingWidget from '@/components/features/floating-widget/FloatingWidget.svelte';
	import { contentAppStore } from '@/stores/contentAppStore';
	import { useContentManager } from '@/hooks/useContentManager';
	import MainWidget from '@/components/features/main-widget/MainWidget.svelte';
	const { mint } = $props<{ mint: string }>();
	let isWidgetReady = $state<boolean>(false);
	contentAppStore.subscribe(($store) => (isWidgetReady = $store.isWidgetReady));
	const widgetState = useContentManager({ mint });
</script>

<main class="e:absolute e:top-0 e:right-0 e:z-[200]">
	{#if isWidgetReady}
		<FloatingWidget {widgetState} />
		<MainWidget />
	{:else}
		<div class="e:text-white e:bg-black e:p-2 e:rounded-md">
			<div>Loading…</div>
			<div>
				<pre class="e:text-xs e:bg-gray-900 e:text-white e:p-2 e:rounded">
					{JSON.stringify($contentAppStore, null, 2)}
				</pre>
			</div>
		</div>
	{/if}
</main>
