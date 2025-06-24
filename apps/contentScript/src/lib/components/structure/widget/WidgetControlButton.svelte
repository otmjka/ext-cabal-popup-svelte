<script lang="ts">
  import type { IWidgetControlButton } from './types';

  // Props
  let {
    disabled = false,
    onclick,
    children,
    ...other
  }: IWidgetControlButton = $props();

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
  class="ext-widget-control-btn {other?.class}"
  {disabled}
  title={other?.title}
  onclick={onClick}
>
  {@render children?.()}
</button>

<style scoped>
  @reference "@src/app.css";

  .ext-widget-control-btn {
    @apply e:flex e:items-center e:justify-center;
    @apply e:size-[30px];
    @apply e:bg-[#36383C] e:hover:bg-[#3f4146] e:text-white;
    @apply e:cursor-pointer e:select-none e:outline-none;
  }
</style>