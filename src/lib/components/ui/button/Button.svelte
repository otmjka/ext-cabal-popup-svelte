<script lang="ts">
  import { type Snippet } from 'svelte';
   // Types
  type TButtonVariant = 'primary' | 'secondary' | 'ghost';
  type TButtonSize = 'sm' | 'md' | 'lg';

  interface IButton {
    variant?: TButtonVariant,
    size?: TButtonSize,
    block?: boolean,
    disabled?: boolean,
    loading?: boolean,
    wrapperClass?: string,
    children?: Snippet,
    onclick?: () => void,
    class?: string
  }

  // Props
  let {
    variant = 'primary',
    size = 'md',
    block = false,
    disabled = false,
    loading = false,
    wrapperClass = '',
    onclick,
    children,
    ...other
  }: IButton = $props();

  // Data
  const variants = {
    'primary': "bg-[#5BBE7B] hover:bg-[#87C999]",
    'secondary': "bg-[#E96B82] hover:bg-[#DE8C9C]",
    'ghost': "bg-transparent bg-[#36383C] border border-[#9B9B9F]",
  }

  // Reactive
  let cssClass = $derived.by(() => {
    return [
      `ff-chakra font-bold px-4 h-8 flex w-fit items-center justify-center cursor-pointer`,
      variants[variant] || variants.primary,
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

<button
  type="button"
  class="{cssClass}"
  {disabled}
  onclick={onClick}
>
  {@render children?.()}
</button>

