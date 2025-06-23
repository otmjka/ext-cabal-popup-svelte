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
    'default': "e:text-gray-400 e:border-b-transparent e:hover:text-gray-300",
    'active': "e:text-white e:border-white",
  }

  // Reactive
  let cssClass = $derived.by(() => {
    return [
      `ff-chakra e:font-base e:px-[8px] e:h-[28px] e:flex e:w-fit e:items-center e:justify-center e:cursor-pointer`,
      `e:border-b`,
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
