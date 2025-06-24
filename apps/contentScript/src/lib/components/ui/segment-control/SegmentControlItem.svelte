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
      `ext-segment-control-item`,
      `ff-chakra `,
      active ? `ext-segment-control-item--active` : ``,
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

<!-- 
<style >
  @reference "@src/app.css";


  .ext-segment-control-list--md .ext-segment-control-item {
    @apply e:py-[4px];
  }

  .ext-segment-control-list--lg .ext-segment-control-item {
    @apply e:py-[4px];
  }

  .ext-segment-control-item {
    @apply e:px-[8px] e:w-full;
    @apply e:border-r-[1px] e:border-r-[#36383C] e:last:border-r-0;
    @apply e:flex e:flex-nowrap e:items-center e:justify-center;
    @apply e:whitespace-nowrap e:cursor-pointer;
    @apply e:text-[12px]/[12px] e:text-white;
  }

  .ext-segment-control-item--active {
    @apply e:bg-[#9B9C9E] e:text-black;
  }
</style> 
-->