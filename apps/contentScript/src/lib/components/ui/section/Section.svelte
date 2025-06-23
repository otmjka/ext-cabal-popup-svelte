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
    'buy': "e:bg-[#15251980] e:border-[#5BBE7B80]",
    'sell': "e:bg-[#2B161A80] e:border-[#E96B8280]",
    'ghost': "e:bg-gray-400/20 e:border-gray-400/40",
  }

  // Reactive
  let cssClass = $derived.by(() => {
    return [
      `e:w-full e:rounded-[2px] e:border e:px-[8px] e:py-[8px]`,
      variants[variant] || variants.buy,
      other?.class
    ].join(' ');
  });
</script>

<div class={cssClass}>
  {@render children?.()}
</div>