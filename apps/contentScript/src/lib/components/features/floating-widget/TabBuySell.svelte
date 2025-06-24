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

  const setBuyAmount = (amount: number) => {
    amountBuy = amount;
  }

  const setSellAmount = (amount: number) => {
    amountSell = amount;
  }
</script>

<div class="e:flex e:flex-col e:gap-[12px]">
  <Section variant="buy" class="e:flex e:flex-col e:gap-y-[10px]">
    <div class="e:flex e:justify-between e:items-center">
      <h4 class="text-18px font-700">
        Quick <span class="text-buy">Buy</span>
      </h4>

      <div class="text-12px e:flex e:gap-x-[8px] e:items-center">
        <span class="e:flex e:items-center">
          Buys: 1
        </span>
        <span class="e:flex e:gap-x-[4px] e:items-center">
          5 <SolanaCircleIcon />
        </span>
      </div>
    </div>
    <div class="e:w-full e:grid e:grid-cols-4 e:gap-[10px]">
      {#each $quickBuyStore as el}
        <Button 
          variant="buy-secondary"
          class="e:gap-x-[4px] e:w-full e:px-[2px]"
          onclick={() => { setBuyAmount(el); }}
        >
          {el} <SolanaCircleIcon />
        </Button>
      {/each}
    </div>
    <div class="e:w-full e:grid e:grid-cols-4 e:gap-[10px]">
      <Input 
        value={amountBuy} 
        variant="buy"
        type="number" 
        icon="sol" 
        class="e:col-span-3"
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
        class="e:w-full"
        onclick={onBuyClick}
      >
        Buy
      </Button>
    </div>
  </Section>

  <Section variant="sell" class="e:flex e:flex-col e:gap-y-[10px] e:mb-[24px]">
    <div class="e:flex e:justify-between e:items-center">
      <h4 class="text-18px font-700">
        Quick <span class="text-sell">Sell</span>
      </h4>

      <div class="text-12px e:flex e:gap-x-[8px] e:items-center">
        <span class="e:flex e:items-center">
          {token} 8M
        </span>
        <span class="e:flex e:gap-x-[4px] e:items-center">
          8 <SolanaCircleIcon />
        </span>

        <span class="e:flex e:gap-x-[4px] e:items-center">
          +60% 
        </span>

        <span>
          <img src="/src/assets/sell-switch.svg" alt="">
        </span>
      </div>
    </div>

    <div class="e:w-full e:grid e:grid-cols-4 e:gap-[10px]">
      {#each $quickSellStore as el}
        <Button 
          variant="sell-secondary"
          class="e:gap-x-[4px] e:w-full e:px-[2px]"
          onclick={() => { setSellAmount(el); }}
        >
          {el} <SolanaCircleIcon />
        </Button>
      {/each}
    </div>

    <div class="e:w-full e:grid e:grid-cols-8 e:gap-[10px]">
      <Button 
        clipped
        variant="sell"
        class="e:col-span-3 e:w-full e:px-[8px]"
        onclick={onSellInitialsClick}
      >
        Sell initials
      </Button>
      <Input 
        value={amountSell} 
        variant="sell"
        type="number" 
        icon="sol" 
        class="e:col-span-3 e:w-full"
        placeholder="Enter %"
        min={0.001}
        max={100}
        step={0.001}
      />
      <Button 
        clipped
        variant="sell" 
        class="e:col-span-2 e:w-full"
        onclick={onSellClick}
      >
        Sell
      </Button>
    </div>
  </Section>

  <footer class="e:flex e:justify-between e:gap-[4px]">
    <ToggleButton 
      bind:enabled={autoLimits}
      onclick={onAutolimitsClick}
    >
      AutoLimits {autoLimits ? 'Enabled' : 'Disabled'}
    </ToggleButton>

    <Button 
      variant="ghost" 
      class="e:gap-[6px] e:px-[8px]"
      onclick={onShareClick}
    >
      <ShareIcon size={14} />
      Share P&L
    </Button>
  </footer>
</div>