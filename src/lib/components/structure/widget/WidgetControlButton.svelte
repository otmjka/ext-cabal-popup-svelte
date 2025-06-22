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
  class="size-[30px] bg-[#36383C] text-white flex items-center justify-center cursor-pointer {other?.class}"
  {disabled}
  title={other?.title}
  onclick={onClick}
>
  {@render children?.()}
</button>
