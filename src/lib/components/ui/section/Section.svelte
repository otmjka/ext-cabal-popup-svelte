<script lang="ts">
  import type { ISection } from './types';

  // Props
  let {
    variant = 'buy',
    children,
    ...other
  }: ISection = $props();

  // Data
  const variants = {
    'buy': "bg-[#15251980] border-[#5BBE7B80]",
    'sell': "bg-[#2B161A80] border-[#E96B8280]",
    'ghost': "bg-gray-400/20  border-gray-400/40",
  }

  // Reactive
  let cssClass = $derived.by(() => {
    return [
      `w-full rounded-[2px] border px-[8px] py-[8px]`,
      variants[variant] || variants.buy,
      other?.class
    ].join(' ');
  });
</script>

<div class={cssClass}>
  {@render children?.()}
</div>