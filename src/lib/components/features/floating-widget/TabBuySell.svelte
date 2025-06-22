<script lang="ts">
  // Components
  import ShareIcon from "@lucide/svelte/icons/share";
  import { Button, ToggleButton, Input, Section } from '@/components/ui';
  import SolanaCircleIcon from '@/components/icons/SolanaCircleIcon.svelte';
  
  // Stores
  import quickBuyStore from '@/stores/quick-buy';
  import quickSellStore from '@/stores/quick-sell';

  // Props
  let {
    token = "$Alpha"
  } = $props();

  // Data
  let amountBuy: number | undefined = $state();

  let amountSell: number | undefined = $state();
  let quickSellList = $state([0.5, 1, 2, 5]);

  let autoLimits = $state(true);

  // Methods
  const onBuyClick = () => {
    console.log('onBuyClick');
  }

  const onSellClick = () => {
    console.log('onSellClick');
  }

  const onSellInitialsClick = () => {
    console.log('onSellInitialsClick');
  }

  const onAutolimitsClick = (e: Event) => {
    console.log('onAutolimitsClick', autoLimits, e);
  }

  const onShareClick = () => {
    console.log('onShareClick');
  }
</script>

<div class="flex flex-col gap-[12px]">
  <Section variant="buy" class="flex flex-col gap-y-[10px]">
    <div class="flex justify-between items-center">
      <h4 class="text-[18px]/[18px] font-medium">
        Quick <span class="text-buy">Buy</span>
      </h4>

      <div class="text-[12px] flex gap-x-[8px] items-center">
        <span class="flex items-center">
          Buys: 1
        </span>
        <span class="flex gap-x-[4px] items-center">
          5 <SolanaCircleIcon />
        </span>
      </div>
    </div>
    <div class="w-full grid grid-cols-4 gap-[10px]">
      {#each $quickBuyStore as el, index}
        <Input 
          bind:value={$quickBuyStore[index]} 
          variant="buy"
          type="number" 
          icon="sol" 
          min={0.001}
          max={100}
          step={0.001}
        />
      {/each}
    </div>
    <div class="w-full grid grid-cols-4 gap-[10px]">
      <Input 
        value={amountBuy} 
        variant="buy"
        type="number" 
        icon="sol" 
        class="col-span-3"
        placeholder="Enter SOL amount"
        min={0.001}
        max={100}
        step={0.001}
        onchange={() => {
          console.log('amountBuy', amountBuy);
        }}
      />
      <Button 
        clipped
        variant="buy" 
        class="w-full"
        onclick={onBuyClick}
      >
        Buy
      </Button>
    </div>
  </Section>

  <Section variant="sell" class="flex flex-col gap-y-[10px] mb-[24px]">
    <div class="flex justify-between items-center">
      <h4 class="text-[18px]/[18px] font-medium">
        Quick <span class="text-sell">Sell</span>
      </h4>

      <div class="text-[12px] flex gap-x-[8px] items-center">
        <span class="flex items-center">
          {token} 8M
        </span>
        <span class="flex gap-x-[4px] items-center">
          8 <SolanaCircleIcon />
        </span>

        <span class="flex gap-x-[4px] items-center">
          +60% 
        </span>
      </div>
    </div>

    <div class="w-full grid grid-cols-4 gap-[10px]">
      {#each $quickSellStore as el, index}
        <Input 
          bind:value={$quickSellStore[index]} 
          variant="sell"
          type="number" 
          icon="sol" 
          min={0.001}
          max={100}
          step={0.001}
        />
      {/each}
    </div>

    <div class="w-full grid grid-cols-8 gap-[10px]">
      <Button 
        clipped
        variant="sell"
        class="col-span-3 w-full px-[8px]"
        onclick={onSellInitialsClick}
      >
        Sell initials
      </Button>
      <Input 
        value={amountSell} 
        variant="sell"
        type="number" 
        icon="sol" 
        class="col-span-3 w-full"
        placeholder="Enter %"
        min={0.001}
        max={100}
        step={0.001}
      />
      <Button 
        clipped
        variant="sell" 
        class="col-span-2 w-full"
        onclick={onSellClick}
      >
        Sell
      </Button>
    </div>
  </Section>

  <footer class="flex justify-between gap-[4px]">
    <ToggleButton 
      bind:enabled={autoLimits}
      onclick={onAutolimitsClick}
    >
      {autoLimits ? 'AutoLimits Activated' : 'Enable AutoLimits'}
    </ToggleButton>

    <Button 
      variant="ghost" 
      class="gap-[6px] px-[8px]"
      onclick={onShareClick}
    >
      <ShareIcon size={14} />
      Share P&L
    </Button>
  </footer>
</div>