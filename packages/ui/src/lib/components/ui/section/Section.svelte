<script lang="ts">
	import type { ISection } from './types';

	// Props
	let { variant = 'buy', children, ...other }: ISection = $props();

	// Reactive
	let cssClass = $derived.by(() => {
		return [`ext-section`, `ext-section--${variant}`, other?.class].join(' ');
	});
</script>

<div class={cssClass}>
	{@render children?.()}
</div>

<style scoped>
	@reference "../../../../app.css";

	.ext-section {
		@apply e:w-full e:rounded-[2px] e:border e:px-[8px] e:py-[8px];
	}

	.ext-section--buy {
		@apply e:bg-[#1525194D] e:border-[#5BBE7B80];
	}

	.ext-section--sell {
		@apply e:bg-[#2B161A80] e:border-[#E96B8280];
	}

	.ext-section--ghost {
		@apply e:bg-gray-400/20 e:border-gray-400/40;
	}
</style>
