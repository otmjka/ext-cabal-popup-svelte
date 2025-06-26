<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	// Types
	import type { IToggleButton } from './types';

	// Props
	let {
		enabled = $bindable(true),
		variant = 'buy',
		disabled = false,
		onclick,
		children,
		...other
	}: IToggleButton = $props();

	// Reactive
	let cssClass = $derived.by(() => {
		const classList = [
			`ff-chakra`,
			`ext-toggle-btn`,
			enabled ? `ext-toggle-btn--enabled` : ``,
			enabled ? `ext-toggle-btn--${variant}` : `ext-toggle-btn--ghost`,
			other?.class
		].join(' ');
		return twMerge(classList);
	});

	/**
	 * On click
	 */
	function onClick(e: MouseEvent | TouchEvent) {
		if (disabled) return;
		enabled = !enabled;
		onclick?.(e);
	}
</script>

<button type="button" class={cssClass} {disabled} onclick={onClick}>
	<span
		class="ext-toggle-btn-indicator"
		class:e:ring-[1px]={!enabled}
		class:e:ring-black={!enabled}
		class:e:ring-inset={!enabled}
		class:e:bg-black={enabled}
	></span>
	{@render children?.()}
</button>

<style scoped>
	@reference "../../../../app.css";

	.ext-toggle-btn {
		@apply e:pl-[20px] e:pr-[8px] e:h-[32px] e:w-fit e:relative;
		@apply e:flex e:flex-nowrap e:items-center e:justify-center;
		@apply e:whitespace-nowrap e:cursor-pointer;
		@apply e:text-[14px]/[14px] e:text-[#04070C];
	}

	.ext-toggle-btn--buy {
		@apply e:bg-[#5BBE7B] e:hover:bg-[#87C999] e:font-bold;
	}

	.ext-toggle-btn--sell {
		@apply e:bg-[#E96B82] e:hover:bg-[#DE8C9C] e:font-bold;
	}

	.ext-toggle-btn--ghost {
		@apply e:bg-[#9B9C9E] e:hover:bg-[#9B9C9E] e:font-bold;
	}

	.ext-toggle-btn-indicator {
		@apply e:absolute e:left-[8px] e:size-[8px] e:rounded-full;
	}

	:not(.ext-toggle-btn--enabled) .ext-toggle-btn-indicator {
		@apply e:ring-[1px] e:ring-black e:ring-inset;
	}
	.ext-toggle-btn--enabled .ext-toggle-btn-indicator {
		@apply e:bg-black;
	}
</style>
