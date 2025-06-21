<script lang="ts">
  import { WidgetAside } from './lib/components/structure';
  import {  Button } from './lib/components/ui';

  let draggable = $state(false);

</script>

<main class="w-full h-dvh bg-slate-100">

  <button 
    class="px-2 py-1 bg-slate-200 rounded"
    onclick={() => draggable = !draggable}
  >
    Switch draggable {draggable ? 'off' : 'on'}
  </button>


  <WidgetAside {draggable} class="p-1">
    <h3 class="ff-chakra text-gray-200">
      Now widget is {draggable ? 'draggable' : 'not draggable'}
    </h3>

    <footer class="flex gap-2">
      <Button>
        Buy PopCat
      </Button>
      <Button variant="secondary">
        Sell
      </Button>
    </footer>
  </WidgetAside>
</main>
