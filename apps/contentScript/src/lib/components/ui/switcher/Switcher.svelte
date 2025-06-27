<script lang="ts">
  import { nanoid } from 'nanoid';

  // Types
  import type { ISwitcherProps } from './types';

  // Props
  let {
    checked = $bindable(false),
    disabled = false,
    defaultChecked = false,
    name = 'switcher-name',
    value = 'switcher-value',
    id = `switcher-id-${nanoid(5)}`,
    ariaLabelledBy = '',
    ariaLabel = '',
    highlight = true,
    children,
    onchange,
    onfocus,
  }: ISwitcherProps = $props();

	let checkbox: HTMLDivElement;
  let isChecked = $state(!!(checked || defaultChecked));
  let isMoved = $state(false);
  let hasFocus = $state(false);

  // Methods
	const onFocus = (event: FocusEvent) => {
		if (onfocus) {
			onfocus?.(event);
		}
		hasFocus = true;
	};

	const onClick = (event: MouseEvent) => {
		if (disabled) {
			return;
		}
		if (event.target !== checkbox || isMoved) {
			event.preventDefault();

			onchange?.(event);
			if (isChecked === false) {
				isChecked = true;
				checked = true;
			} else {
				isChecked = false;
				checked = false;
			}
		}
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	bind:this={checkbox}
  tabindex="0"
	role="button"
	class="switcher"
  class:switcher--highlight={highlight}
	class:switcher--checked={isChecked}
	class:switcher--focus={hasFocus}
	class:switcher--disabled={disabled}
	onclick={onClick}
>
	<div class="switcher--track">
	  <div class="switcher--thumb"></div>
	</div>
	<input
		type="checkbox"
		{name}
		{value}
		aria-label={ariaLabel}
		aria-labelledby={ariaLabelledBy}
		checked={isChecked}
		{disabled}
		{id}
		onfocus={onFocus}
		class="switcher--screen-reader"
	/>

  {#if children}
    <span class="switcher--label">
      {@render children()}
    </span>
  {/if}
</div>

<style scoped lang="scss">
@import "tailwindcss" prefix(e);

  .switcher {
    @apply e:select-none;
    @apply e:relative e:cursor-pointer;
    @apply e:flex e:items-center e:gap-2;
    touch-action: pan-x;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;

    &--label {
      @apply e:font-semibold;
    }

    &--track {
      @apply e:relative;
      @apply e:w-[40px] e:h-[20px];
      @apply e:rounded-full;
      @apply e:bg-[#36383C];
      @apply e:transition-all e:duration-200 e:ease-in-out;
      // @apply e:border-2 e:border-[#474755];
      // transition: all 0.2s ease;
    }
  }

  .switcher--screen-reader {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .switcher:hover:not(.switcher--disabled) .switcher--track {
    background-color: #47494e;
  }

  .switcher--highlight {
    &.switcher--checked .switcher--track {
      background-color: #5BBE7B;
    }
  }

  .switcher--checked:hover:not(.switcher--disabled) .switcher--track {
    background-color: #5BBE7B;
  }

  .switcher--track-checked {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .switcher--checked .switcher--track-checked {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .switcher--track-unchecked {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .switcher--checked .switcher--track-unchecked {
    opacity: 0;
  }

  .switcher--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .switcher--thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    @apply e:absolute e:top-0.5 e:left-0.5;
    @apply e:size-[16px];
    @apply e:rounded-full;
    background-color: #fafafa;
  }

  .switcher--checked .switcher--thumb {
    left: calc(100% - 18px);
  }
</style>