<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import './styles.css';

  // Types
  import type { ISegmentContrlList } from './types';

  // Props
  let {
    size = 'md',
    children,
    ...other
  }: ISegmentContrlList = $props();

  // Reactive
  let cssClass = $derived.by(() => {
    const classList = [
      `ext-segment-control-list`,
      `ext-segment-control-list--${size}`,
      other?.class
    ].join(' ');
    return twMerge(classList);
  });
</script>

<div class={cssClass}>
  {@render children?.()}
</div>

<!-- 
<style >
  @reference "@src/app.css";

  .ext-segment-control-list {
    @apply e:border-[1px] e:border-[#36383C];
    @apply e:flex e:items-center;
  }
</style>
-->