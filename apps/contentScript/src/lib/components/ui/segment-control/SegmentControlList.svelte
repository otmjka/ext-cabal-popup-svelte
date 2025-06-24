<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  // Types
  import type { ISegmentContrlList } from './types';

  // Props
  let {
    children,
    ...other
  }: ISegmentContrlList = $props();

  // Reactive
  let cssClass = $derived.by(() => {
    const classList = [
      `ext-segment-control-list`,
      other?.class
    ].join(' ');
    return twMerge(classList);
  });
</script>

<div class={cssClass}>
  {@render children?.()}
</div>

<style scoped>
  @reference "@src/app.css";

  .ext-segment-control-list {
    @apply e:border-[1px] e:border-[#36383C];
    @apply e:flex e:items-center e:w-fit;
  }
</style>