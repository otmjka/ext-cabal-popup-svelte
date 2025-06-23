<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  // Types
  import type { ISegmentControlItem } from './types';

  // Props
  let {
    disabled = false,
    active = false,
    onclick,
    children,
    ...other
  }: ISegmentControlItem = $props();

  // Reactive
  let cssClass = $derived.by(() => {
    const classList = [
      `e:px-[8px] e:py-[4px] e:w-full`,
      `e:border-r-[1px] e:border-r-[#36383C] e:last:border-r-0`,
      `e:flex e:flex-nowrap e:items-center e:justify-center`,
      `e:whitespace-nowrap e:cursor-pointer`,
      `ff-chakra e:text-[12px]/[12px]`,
      active ? `e:bg-[#9B9C9E]` : ``,
      active ? `e:text-black` : `e:text-white`,
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