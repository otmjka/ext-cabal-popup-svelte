
<script lang="ts">
  // Helpers
  import { tippy } from '@/config/tippy';

  // Types
  import type { IInfoIcon } from './types';

  // Props
  let {
    tip = "",
    children
  }:IInfoIcon = $props();
</script>

<span 
  use:tippy={{ content: tip }}
  class="text-12px e:h-[18px] e:w-fit e:min-w-[18px] e:bg-[#454651] e:flex e:justify-center e:items-center e:rounded-full e:cursor-default"
>
  {#if children}
    {@render children()}
  {:else}
    ?
  {/if}
</span>