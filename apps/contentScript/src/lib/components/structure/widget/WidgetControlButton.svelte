<script lang="ts">
  import type { IWidgetControlButton } from './types';

  // Props
  let {
    disabled = false,
    active = false,
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
  class:ext-widget-control-btn--active={active}
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
    @apply e:size-[28px] e:relative;
    @apply e:bg-[#36383C] e:hover:bg-[#3f4146] e:text-white;
    @apply e:cursor-pointer e:select-none e:outline-none;
  }
  .ext-widget-control-btn--active {
    @apply e:bg-[#515358] e:hover:bg-[#515358];
  }
</style>