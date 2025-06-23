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
  class="e:size-[30px] e:bg-[#36383C] e:text-white e:flex e:items-center e:justify-center e:cursor-pointer {other?.class}"
  {disabled}
  title={other?.title}
  onclick={onClick}
>
  {@render children?.()}
</button>
