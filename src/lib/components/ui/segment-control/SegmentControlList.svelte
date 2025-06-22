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
      `border-[1px] border-[#36383C]`,
      `flex items-center w-fit`,
      other?.class
    ].join(' ');
    return twMerge(classList);
  });
</script>

<div class={cssClass}>
  {@render children?.()}
</div>