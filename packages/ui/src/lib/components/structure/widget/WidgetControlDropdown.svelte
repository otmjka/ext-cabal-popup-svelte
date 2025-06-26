<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';

	// Types
	import type { IWidgetControlDropownItem, IWidgetControlDropown } from './types';

	// Props
	let {
		visible = $bindable(false),
		items,
		closeOnSelect = true,
		onselect,
		children
	}: IWidgetControlDropown = $props();

	// Methods
	const onClose = () => {
		if (visible) {
			visible = false;
		}
	};

	const onSelect = (item: IWidgetControlDropownItem) => {
		item.callback?.();
		onselect?.();
		if (closeOnSelect) {
			onClose();
		}
	};
</script>

<div class="e:relative" use:clickoutside onclickoutside={onClose}>
	{@render children?.()}

	{#if visible}
		<div class="e:absolute e:z-10 e:top-[calc(100%+6px)] e:right-0 e:w-[180px] e:bg-[#36383C]">
			{#each items as item}
				<button
					class="ext-widget-dropdown-item text-14px"
					onclick={() => {
						onSelect(item);
					}}
				>
					{item.label}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style scoped>
	@reference "../../../../app.css";

	.ext-widget-dropdown-item {
		@apply e:text-left e:cursor-pointer;
		@apply e:hover:bg-[#3f4146];
		@apply e:px-[16px] e:py-[10px] e:w-full;
		@apply e:border-b-[1px] e:border-b-[#2d2e31];
	}
	.ext-widget-dropdown-item:last-child {
		@apply e:border-b-0;
	}
</style>
