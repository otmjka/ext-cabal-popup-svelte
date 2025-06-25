<script lang="ts">
  // Components
  import Button from '@/components/ui/button/Button.svelte';
  import SolanaCircleIcon from '@/components/icons/SolanaCircleIcon.svelte';

  // type
  import type { IQuickTradeActions } from "./types";

  // Props
  let {
    type = 'buy',
    unit = 'sol',
    actions = [],
    onclick
  }: IQuickTradeActions= $props();

  // Methods
  const onClick = (el: number) => {
    onclick?.(el);
  }
</script>

<div class="e:w-full e:grid e:grid-cols-4 e:gap-[10px]">
  {#each actions as action}
    <Button 
      variant={type === "buy" ? "buy-secondary" : "sell-secondary"}
      class="e:gap-x-[4px] e:w-full e:!px-[2px]"
      onclick={() => { onClick(action); }}
    >
      {action} 
      {#if unit === 'SOL'}
        <SolanaCircleIcon />
      {:else}
        <span>%</span>
      {/if}
    </Button>
  {/each}
</div>