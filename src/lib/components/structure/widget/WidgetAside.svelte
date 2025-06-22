<script lang="ts">
  import { movable } from '@svelte-put/movable';
  import type { IWidgetAside } from '../../ui/radio/types';

  // Props
  let {
    draggable = false,
    children,
    ...other
  }: IWidgetAside = $props();

  const limitation = {
    delta: {
      x: 0,
      y: 0,
    }
  }

  const onMoveableStart = (e) => {
    if (!draggable) {
      e.preventDefault();
    }
  }

  const onMoveableEnd = (e) => {
    if (!draggable) {
      e.preventDefault();
    }
  }
</script>

<aside 
  class="widget-aside ff-chakra max-w-xs w-full min-h-[320px] h-fit flex flex-col text-white bg-[#04070C] border border-white/40 {other.class}"
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