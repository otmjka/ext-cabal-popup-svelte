<script lang="ts">
  import type { ITabList } from './types';

  // Props
  let {
    children,
    ...other
  }: ITabList = $props();
</script>

<ul class="e:flex {other?.class}">
  {@render children?.()}
</ul>