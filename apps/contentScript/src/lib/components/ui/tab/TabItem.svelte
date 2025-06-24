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
      `ff-chakra ext-tab-item`,
      ``,
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

<style scoped>
  @reference "@src/app.css";

  .ext-tab-item {
    @apply e:flex e:items-center e:justify-center;
    @apply e:font-normal e:px-[8px] e:h-[28px] e:w-fit e:cursor-pointer;
    @apply e:border-b-[1px];
  }
  .ext-tab-item--default {
    @apply e:text-gray-400 e:border-b-transparent e:hover:text-gray-300;
  }
  .ext-tab-item--active {
    @apply e:text-white e:border-white;
  }
</style>