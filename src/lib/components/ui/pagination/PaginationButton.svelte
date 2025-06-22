<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  // Components
  import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";

  // Types
  import type { IPaginationButton } from './types';

  // Props
  let {
    action = 'next',
    disabled = false,
    onclick,
    ...other
  }: IPaginationButton = $props();

  // Reactive
  let cssClass = $derived.by(() => {
    const classList = [
      `cursor-pointer outline-none bg-white/30 hover:bg-white/80 rounded-full p-[1px]`,
      other?.class
    ].join(' ');
    return twMerge(classList);
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

<button
  type="button"
  class={cssClass}
  {disabled}
  onclick={onClick}
>
  {#if action === 'prev'}
    <ChevronLeftIcon class="text-black/50" size={16} />
  {:else}
    <ChevronRightIcon class="text-black/50" size={16} />
  {/if}
</button>
