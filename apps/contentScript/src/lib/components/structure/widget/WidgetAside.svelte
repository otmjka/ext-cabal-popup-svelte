<script lang="ts">
  import { movable } from '@svelte-put/movable';
  import type { IWidgetAside } from './types';

  // Props
  let {
    draggable = false,
    width = 320,
    height = 380,
    children,
    ...other
  }: IWidgetAside = $props();

  const limitation = {
    delta: {
      x: 0,
      y: 0,
    }
  }
  let dragging = $state(false);

  // Methods
  const onMoveableStart = (e: Event) => {
    dragging = true;
    if (!draggable) {
      e.preventDefault();
    }
  }

  const onMoveableEnd = (e: Event) => {
    dragging = false;
    if (!draggable) {
      e.preventDefault();
    }
  }
</script>

<aside 
  class="ext-widget-aside ff-chakra {other.class}"
  class:e:z-[99999]={dragging}
  class:e:z-[99998]={!dragging}
  style={`width: ${width}px; !important; height: ${height}px !important;`}
  onmovablestart={onMoveableStart}
  onmovableend ={onMoveableEnd}
  use:movable={{ 
    ignore: '.not-draggable',
    cursor: draggable,
    limit: { 
      parent: 'screen',
      ...(!draggable && {...limitation})
    } 
  }}
>
  {@render children?.()}
</aside>

<style scoped>
  @reference "@src/app.css";

  .ext-widget-aside {
    @apply e:max-w-xs e:w-full e:min-h-[320px] e:h-full;
    @apply e:flex e:flex-col;
    @apply e:text-white e:bg-[#04070C];
    @apply e:border-[1px] e:border-white/40;
  }
</style>