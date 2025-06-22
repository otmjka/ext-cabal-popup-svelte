<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  // Components
  import SolanaCircleIcon from '../../icons/SolanaCircleIcon.svelte';
  import PercentIcon from "@lucide/svelte/icons/percent";

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
    'buy': "bg-[#152519] border-[#5BBE7B]",
    'sell': "bg-[#2E0F0F] border-[#FF5C5C]",
    'default': "bg-[#36383C] border-white/30",
  }

  // Reactive
  let wrapperCssClass = $derived.by(() => {
    const classList = [
      `flex items-center relative`,
      other?.class,
    ].join(' ');
    return twMerge(classList);
  });

  let inputCssClass = $derived.by(() => {
    const classList = [
      `outline-none`,
      `flex w-full h-[32px] pl-[8px] border-[1px]`,
      `ff-chakra text-[14px]/[14px] text-white`,
      `input--controls-hidden`,
      icon ? 'pr-[26px]' : 'pr-[8px]',
      variants[variant] ?? variants.buy,
      inputClass,
    ].join(' ');
    return twMerge(classList);
  });

  const onChange = (e: Event) => {
    if (type)
    onchange?.(e);
  }
</script>

<div class={wrapperCssClass}>
  <input 
    {...other} 
    {disabled}
    type={type} 
    class={inputCssClass}
    bind:value 
    onchange={onChange}
  >

  {#if icon}
    <span class="absolute right-[8px] outline-none">
      {#if icon === 'sol'}
        <SolanaCircleIcon />
      {/if}
      {#if icon === 'percent'}
        <PercentIcon class="text-white/50" size={12} />
      {/if}
    </span>
  {/if}
</div>