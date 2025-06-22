<script lang="ts">
  import type { ITabList } from './types';

  // Props
  let {
    children,
    ...other
  }: ITabList = $props();
</script>

<ul class="flex {other?.class}">
  {@render children?.()}
</ul>