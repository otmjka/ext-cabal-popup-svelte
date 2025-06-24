<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	// Types
	import type { IButton } from './types';

	// Props
	let {
		variant = 'buy',
		size = 'md',
		disabled = false,
		clipped = false,
		onclick,
		children,
		...other
	}: IButton = $props();

	// Data
	const variants = {
		buy: 'e:bg-[#5BBE7B] e:hover:bg-[#87C999] e:font-bold e:text-[#04070C]',
		'buy-secondary': 'e:bg-[#2D4B33] e:hover:bg-[#45714D] e:font-normal e:text-white',
		sell: 'e:bg-[#E96B82] e:hover:bg-[#DE8C9C] e:font-bold e:text-[#04070C]',
		'sell-secondary': 'e:bg-[#562D34] e:hover:bg-[#82444F] e:font-normal e:text-white',
		ghost:
			'e:bg-transparent e:hover:bg-[#36383C] e:border-[1px] e:border-[#9B9B9F] e:text-[#9B9C9E] e:font-bold'
	};

	// Reactive
	let cssClass = $derived.by(() => {
		const classList = [
			// `e:px-[16px] e:h-[32px] e:w-fit`,
			// `e:flex e:flex-nowrap e:items-center e:justify-center`,
			// `e:whitespace-nowrap e:cursor-pointer e:outline-none`,
			// `ff-chakra !e:text-[14px]/[14px]`,
			`btn ff-chakra`,
			clipped ? 'btn-clipped' : '',
			variants[variant] ? `bnt-${variant}` : 'bnt-buy',
			// variants[variant] ?? variants.buy,
			other?.class
		].join(' ');
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
	{@render children?.()}
</button>

<style scoped>
	@reference "@src/app.css";

	.btn {
		@apply e:px-[16px] e:h-[32px];
		@apply e:flex e:flex-nowrap e:items-center e:justify-center;
		@apply e:whitespace-nowrap e:cursor-pointer e:outline-none;
		@apply e:text-[14px]/[14px];
	}

	.bnt-buy {
		@apply e:bg-[#5BBE7B] e:hover:bg-[#87C999] e:font-bold e:text-[#04070C];
	}

	.bnt-buy-secondary {
		@apply e:bg-[#2D4B33] e:hover:bg-[#45714D] e:font-normal e:text-white;
	}

	.bnt-sell {
		@apply e:bg-[#E96B82] e:hover:bg-[#DE8C9C] e:font-bold e:text-[#04070C];
	}

	.bnt-sell-secondary {
		@apply e:bg-[#562D34] e:hover:bg-[#82444F] e:font-normal e:text-white;
	}

	.bnt-ghost {
		@apply e:bg-transparent e:hover:bg-[#36383C] e:border-[1px] e:border-[#9B9B9F] e:text-[#9B9C9E] e:font-bold;
	}

	.btn-clipped {
		clip-path: polygon(0 0, 100% 0, 100% 100%, calc(0% + 13px) 100%, 0% calc(100% - 12px));
	}
</style>
