<script lang="ts">
  import type { ITabItem } from "./types";

  // Props
  let {
    disabled = false,
    active = false,
    wrapperClass = '',
    onclick,
    children,
    ...other
  }: ITabItem = $props();

  // Data
  const variants = {
    'default': "text-gray-400 border-b-transparent hover:text-gray-300",
    'active': "text-white border-white",
  }

  // Reactive
  let cssClass = $derived.by(() => {
    return [
      `ff-chakra font-base px-[8px] h-[28px] flex w-fit items-center justify-center cursor-pointer`,
      `border-b`,
      active ? variants.active : variants.default,
      other?.class
    ].join(' ');
  });

  /**
   * On click
   */
  function onClick() {
    if (disabled)
      return;
    onclick?.();
  }
</script>

<li>
  <button
    type="button"
    class={cssClass}
    {disabled}
    onclick={onClick}
  >
    {@render children?.()}
  </button>
</li>
