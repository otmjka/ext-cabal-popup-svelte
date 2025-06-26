<script lang="ts">
	import FloatingWidget from '@/components/features/floating-widget/FloatingWidget.svelte';
	import { contentAppStore } from '@/stores/contentAppStore';
	import { useContentManager } from '@/hooks/useContentManager';
	import MainWidget from '@/components/features/main-widget/MainWidget.svelte';
	const { mint } = $props<{ mint: string }>();
	let isWidgetReady = $state<boolean>(false);
	contentAppStore.subscribe(($store) => (isWidgetReady = $store.isWidgetReady));
	const { handlers } = useContentManager({ mint });
</script>

<main>
	<div class="e:absolute e:top-0 e:right-0 e:z-[200]">
		{#if isWidgetReady}
			<FloatingWidget {handlers} />
			<MainWidget {handlers} />
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
	</div>
	<div
		class="e:absolute e:bottom-0 e:left-0 e:text-white e:bg-black e:w-[300px] e:h-[300px] e:overflow-auto"
	>
		<pre class="e:text-xs e:bg-gray-900 e:text-white e:p-2 e:rounded">
					{JSON.stringify($contentAppStore.txLog, null, 2)}
				</pre>
	</div>
</main>
