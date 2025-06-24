<script lang="ts">
	import FloatingWidget from '@/components/features/floating-widget/FloatingWidget.svelte';
	import { contentAppStore } from '@/stores/contentAppStore';
	import { useContentManager } from '@/hooks/useContentManager';
	export let mint: string;

	const { isWidgetReady, handleOpenSettings } = useContentManager({ mint });
</script>

<main class="e:absolute e:top-0 e:right-0 e:z-[200]">
	{#if $isWidgetReady}
		<FloatingWidget state={{ onOpenSettings: handleOpenSettings }} />
	{:else}
		<div class="e:text-white e:bg-black e:p-2 e:rounded-md">
			<div>Loading…</div>
			<!-- <div>
				<pre class="e:text-xs e:bg-gray-900 e:text-white e:p-2 e:rounded">
	{JSON.stringify($contentAppStore, null, 2)}
</pre>
			</div> -->
		</div>
	{/if}
</main>
