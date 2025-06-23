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
    'buy': "e:bg-[#5BBE7B] e:hover:bg-[#87C999] e:font-bold",
    'sell': "e:bg-[#E96B82] e:hover:bg-[#DE8C9C] e:font-bold",
    'ghost': "e:bg-[#9B9C9E] e:hover:bg-[#9B9C9E]  e:font-bold",
  }

  // Reactive
  let cssClass = $derived.by(() => {
    const classList = [
      `e:pl-[20px] e:pr-[8px] e:h-[32px] e:w-fit e:relative`,
      `e:flex e:flex-nowrap e:items-center e:justify-center`,
      `e:whitespace-nowrap e:cursor-pointer`,
      `ff-chakra e:text-[14px]/[14px] e:text-[#04070C]`,
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
    class="e:absolute e:left-[8px] e:size-[8px] e:rounded-full"
    class:e:ring-[1px]={!enabled}
    class:e:ring-black={!enabled}
    class:e:ring-inset={!enabled}
    class:e:bg-black={enabled}
  ></span>
  {@render children?.()}
</button>
