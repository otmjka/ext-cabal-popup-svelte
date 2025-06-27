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
