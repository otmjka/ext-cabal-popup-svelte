<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	// Components
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';

	// Types
	import type { IPaginationButton } from './types';

	// Props
	let { action = 'next', disabled = false, onclick, ...other }: IPaginationButton = $props();

	// Reactive
	let cssClass = $derived.by(() => {
		const classList = [`ext-pagination-button`, other?.class].join(' ');
		return twMerge(classList);
	});

	/**
	 * On click
	 */
	function onClick() {
		if (disabled) return;
		onclick?.();
	}
</script>

<button type="button" class={cssClass} {disabled} onclick={onClick}>
	{#if action === 'prev'}
		<ChevronLeftIcon class="e:text-black/50" size={16} />
	{:else}
		<ChevronRightIcon class="e:text-black/50" size={16} />
	{/if}
</button>

<style scoped>
	@reference "../../../../app.css";

	.ext-pagination-button {
		@apply e:cursor-pointer e:outline-none;
		@apply e:bg-white/30 e:hover:bg-white/80;
		@apply e:rounded-full e:p-[1px];
	}
</style>
