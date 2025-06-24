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
		const classList = [`e:flex e:items-center e:relative`, other?.class].join(' ');
		return twMerge(classList);
	});

	let inputCssClass = $derived.by(() => {
		const classList = [
			`e:outline-none`,
			`e:flex e:w-full e:h-[32px] e:pl-[8px] e:border-[1px]`,
			`ff-chakra e:text-[14px]/[14px] e:text-white`,
			`input--controls-hidden`,
			icon ? 'e:pr-[26px]' : 'e:pr-[8px]',
			variants[variant] ?? variants.buy,
			inputClass
		].join(' ');
		return twMerge(classList);
	});

	const onChange = (e: Event) => {
		console.log('!!!');
		if (type) onchange?.(e);
	};
</script>

<div class={wrapperCssClass}>
	<input {...other} {disabled} {type} class={inputCssClass} bind:value onchange={onChange} />

	{#if icon}
		<span class="e:absolute e:right-[8px] e:outline-none">
			{#if icon === 'sol'}
				<SolanaCircleIcon />
			{/if}
			{#if icon === 'percent'}
				<PercentIcon class="e:text-white/50" size={12} />
			{/if}
		</span>
	{/if}
</div>
