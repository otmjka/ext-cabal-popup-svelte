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
  class="ext-widget-aside ff-chakra {other.class}"
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
    @apply e:max-w-xs e:w-full e:min-h-[320px] e:h-fit;
    @apply e:flex e:flex-col;
    @apply e:text-white e:bg-[#04070C];
    @apply e:border-[1px] e:border-white/40;
  }
</style>