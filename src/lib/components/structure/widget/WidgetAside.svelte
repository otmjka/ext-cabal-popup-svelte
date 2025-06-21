<script lang="ts">
  import { movable } from '@svelte-put/movable';
  import type { IWidgetAside } from '../../ui/radio/types';

  // Props
  let {
    draggable = false,
    children,
    ...other
  }: IWidgetAside = $props();


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
  class="min-w-xs w-fit h-[320px]"
  onmovablestart={onMoveableStart}
  onmovableend ={onMoveableEnd}
  use:movable={{ 
    ignore: '.not-draggable',
    cursor: draggable,
    limit: { parent: 'screen' } 
  }}
>
  <div 
    class="w-full h-full flex flex-col bg-[#04070C] border border-white/40 {other.class}"
    class:not-draggable={!draggable}
  >
    {@render children?.()}
  </div>
</aside>