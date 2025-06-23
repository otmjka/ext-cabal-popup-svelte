<script lang="ts">
  import type { ITabList } from './types';

  // Props
  let {
    children,
    ...other
  }: ITabList = $props();
</script>

<ul class="ext-tab-list {other?.class}">
  {@render children?.()}
</ul>

<style scoped>
  @reference "@src/app.css";

  .ext-tab-list {
    @apply e:flex;
  }
</style>