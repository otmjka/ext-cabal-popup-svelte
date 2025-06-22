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
    'buy': "bg-[#5BBE7B] hover:bg-[#87C999] font-bold",
    'sell': "bg-[#E96B82] hover:bg-[#DE8C9C] font-bold",
    'ghost': "bg-transparent hover:bg-[#36383C] border border-[#9B9B9F] text-white  font-base",
  }

  // Reactive
  let cssClass = $derived.by(() => {
    const classList = [
      `px-[16px] h-[32px] w-fit`,
      `flex flex-nowrap items-center justify-center`,
      `whitespace-nowrap cursor-pointer outline-none`,
      `ff-chakra text-[14px]/[14px] text-[#04070C]`,
      clipped ? 'btn-clipped' : '',
      variants[variant] ?? variants.buy,
      other?.class
    ].join(' ');
    return twMerge(classList);
  });

  /**
   * On click
   */
  function onClick() {
    if (disabled)
      return;
    onclick?.();
  }
</script>

<button
  type="button"
  class={cssClass}
  {disabled}
  onclick={onClick}
>
  {@render children?.()}
</button>

<style scoped>
  .btn-clipped {
    clip-path: polygon(0 0, 100% 0, 100% 100%, calc(0% + 13px) 100%, 0% calc(100% - 12px));
  }
</style>