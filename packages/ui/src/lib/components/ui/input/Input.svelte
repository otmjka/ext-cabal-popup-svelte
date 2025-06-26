<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	// Components
	import SolanaCircleIcon from '../../icons/SolanaCircleIcon.svelte';
	import PercentIcon from '@lucide/svelte/icons/percent';

	// Types
	import type { IInput, TInputVariant } from './types';

	// Props
	let {
		value = $bindable(),
		type = 'text',
		variant = 'default',
		icon = undefined,
		inputClass = '',
		disabled = false,
		onchange = () => {},
		...other
	}: IInput = $props();

	// Data
	const variants: Record<TInputVariant, string> = {
		buy: 'e:bg-[#152519] e:border-[#5BBE7B]',
		sell: 'e:bg-[#2E0F0F] e:border-[#FF5C5C]',
		default: 'e:bg-[#36383C] e:border-white/30'
	};

	// Reactive
	let wrapperCssClass = $derived.by(() => {
		const classList = [`ext-input-wrapper`, other?.class].join(' ');
		return twMerge(classList);
	});

	let inputCssClass = $derived.by(() => {
		const classList = [
			`ff-chakra input--controls-hidden`,
			`ext-input`,
			icon ? 'ext-input--with-icon' : '',
			`ext-input--${variant}`,
			inputClass
		].join(' ');
		return twMerge(classList);
	});

	const onChange = (e: Event) => {
		if (type) onchange?.(e);
	};
</script>

<div class={wrapperCssClass}>
	<input {...other} {disabled} {type} class={inputCssClass} bind:value onchange={onChange} />

	{#if icon}
		<span class="e:absolute e:right-[8px]">
			{#if icon === 'sol'}
				<SolanaCircleIcon />
			{/if}
			{#if icon === 'percent'}
				<PercentIcon class="e:text-white/50" size={12} />
			{/if}
		</span>
	{/if}
</div>

<style scoped>
	@reference "../../../../app.css";

	.ext-input-wrapper {
		@apply e:flex e:items-center e:relative;
	}

	.ext-input {
		@apply e:outline-none;
		@apply e:flex e:w-full e:h-[32px] e:px-[8px] e:border-[1px];
		@apply e:text-[14px]/[14px] e:text-white;
	}

	.ext-input--with-icon {
		@apply e:pr-[26px];
	}

	.ext-input--buy {
		@apply e:bg-[#152519] e:border-[#5BBE7B];
	}

	.ext-input--sell {
		@apply e:bg-[#2E0F0F] e:border-[#FF5C5C];
	}

	.ext-input--default {
		@apply e:bg-[#36383C] e:border-white/30;
	}
</style>
