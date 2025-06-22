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

  // Data
  const variants = {
    'buy': "bg-[#5BBE7B] hover:bg-[#87C999] font-bold",
    'sell': "bg-[#E96B82] hover:bg-[#DE8C9C] font-bold",
    'ghost': "bg-[#9B9C9E] hover:bg-[#9B9C9E]  font-bold",
  }

  // Reactive
  let cssClass = $derived.by(() => {
    const classList = [
      `pl-[20px] pr-[8px] h-[32px] w-fit relative`,
      `flex flex-nowrap items-center justify-center`,
      `whitespace-nowrap cursor-pointer`,
      `ff-chakra text-[14px]/[14px] text-[#04070C]`,
      enabled ? variants[variant] ?? variants.buy : variants.ghost,
      other?.class
    ].join(' ');
    return twMerge(classList);
  });

  /**
   * On click
   */
  function onClick(e: MouseEvent | TouchEvent) {
    if (disabled)
      return;
    enabled = !enabled;
    onclick?.(e);
  }
</script>

<button
  type="button"
  class={cssClass}
  {disabled}
  onclick={onClick}
> 
  <span 
    class="absolute left-[8px] size-[8px] rounded-full"
    class:ring-[1px]={!enabled}
    class:ring-black={!enabled}
    class:ring-inset={!enabled}
    class:bg-black={enabled}
  ></span>
  {@render children?.()}
</button>
