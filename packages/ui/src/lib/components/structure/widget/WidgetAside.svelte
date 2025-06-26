<script lang="ts">
	import { movable } from '@svelte-put/movable';
	import type { IWidgetAside } from './types';

	// Props
	let {
		draggable = false,
		width = 320,
		height = 380,
		header,
		children,
		...other
	}: IWidgetAside = $props();

	const limitation = {
		delta: {
			x: 0,
			y: 0
		}
	};
	let dragging = $state(false);
	let handle: HTMLElement | undefined = $state();

	// Methods
	const onMoveableStart = (e: Event) => {
		if (!draggable) {
			e.preventDefault();
			return;
		}
		dragging = true;
	};

	const onMoveableEnd = (e: Event) => {
		if (!draggable) {
			e.preventDefault();
			return;
		}
		dragging = false;
	};
</script>

{#if dragging}
	<div class="e:z-[999997] e:fixed e:inset-0 e:size-full"></div>
{/if}

<aside
	class="ext-widget-aside ff-chakra {other.class}"
	class:e:z-[999999]={dragging}
	class:e:z-[999998]={!dragging}
	style={`width: ${width}px; !important; height: ${height}px !important;`}
	onmovablestart={onMoveableStart}
	onmovableend={onMoveableEnd}
	use:movable={{
		ignore: '.not-draggable',
		cursor: draggable,
		handle,
		limit: {
			parent: 'screen',
			...(!draggable && { ...limitation })
		}
	}}
>
	<header class="ext-widget-aside--header" bind:this={handle}>
		{@render header?.()}
	</header>
	<div class="ext-widget-aside--body">
		{@render children?.()}
	</div>
</aside>

<style scoped>
	@reference "../../../../app.css";

	.ext-widget-aside {
		@apply e:max-w-xs e:w-full e:h-full;
		@apply e:flex e:flex-col;
		/* @apply e:gap-y-[8px]; */
		@apply e:text-white e:bg-[#04070C];
		@apply e:ring-[1px] e:ring-white/40;
		/* @apply e:border-[1px] e:border-white/40; */
	}

	.ext-widget-aside--header {
		@apply e:w-full e:px-[8px] e:py-[6px] e:hover:bg-white/5;
	}
	.ext-widget-aside--body {
		@apply e:p-[8px] e:h-full e:flex e:flex-col;
	}
</style>
