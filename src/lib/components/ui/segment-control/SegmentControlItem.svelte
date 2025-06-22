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
      `px-[8px] py-[4px] w-full`,
      `border-r-[1px] border-r-[#36383C] last:border-r-0`,
      `flex flex-nowrap items-center justify-center`,
      `whitespace-nowrap cursor-pointer`,
      `ff-chakra text-[12px]/[12px]`,
      active ? `bg-[#9B9C9E]` : ``,
      active ? `text-black` : `text-white`,
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