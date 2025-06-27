<script lang="ts">
  import type { Snippet } from "svelte";

  interface IRadioProps {
    variant?: "primary"|"secondary",
    name: string,
    value: string|number,
    group?: string|number,
    disabled?: boolean,
    onclick?: (e: Event) => void
    children?: Snippet,
    class?: string
  }

  // Props
  let {
    variant = "primary",
    name,
    value = $bindable(0),
    group = $bindable(),
    disabled = false,
    onclick,
    children,
    ...other
  }: IRadioProps = $props();


  // Reactive
  let cssClass = $derived.by(() => {
    return [
      `cb-radio`,
      `cb-radio--variant-${variant}`,
      disabled ? ' cb-radio--disabled' : '',
      other?.class
    ].join(' ');
  });

  const onClick = (e: Event) => {
    if (!disabled && onclick) {
      onclick(e);
    }
  }
</script>

<label class={cssClass}>
  <input
    type="radio"
    {disabled}
    {name}
    bind:group
    bind:value
    {...other}
    onclick={onClick}
  >

  {@render children?.()}
</label>
