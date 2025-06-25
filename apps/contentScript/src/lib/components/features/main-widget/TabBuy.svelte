<script lang="ts">
  // Components
  import { SegmentControlItem, SegmentControlList, Button, Input, Section } from '@/components/ui';
  import { BalanceSol, QuickTradeActions } from "@/components/shared";
  import { SolanaCircleIcon } from '@/components/icons';
  import TokenStats from './TokenStats.svelte';
  import TradeStats from './TradeStats.svelte';
  import Footer from './Footer.svelte';
  
  // Stores
  import quickBuyStore from '@/stores/quick-buy';
  import quickMcLimitsStore from '@/stores/quick-mc-limits';

  // Types
  import type { TNavItem } from '@/types/app';

  // Constants
  import { TRAILING_TYPES } from '@/constants/trailing';

  // Props
  let {
    token = "$Alpha"
  } = $props();

  // Data
  const tradeTypes: TNavItem[] = [
    {
      label: "Market",
      key: "market"
    }, {
      label: "Limit",
      key: "limit"
    }, {
      label: "Trailing",
      key: "trailing"
    }
  ];
  let tradeType: TNavItem = $state(tradeTypes[0]);
  let tailingType: TNavItem = $state(TRAILING_TYPES[1]);
  let amountBuy: number | undefined = $state();
  let limitAmount: number | undefined = $state();
  let mcPercent: number = $state(0);

  // Methods
  const onTradeTypeClick = (el: TNavItem) => {
    tradeType = el;
    amountBuy = 0;
    limitAmount = 0;
  }

  const onBuyClick = () => {
    console.log('onBuyClick');
  }

  const onPlaceLimitOrderClick = () => {
    console.log('onPlaceLimitOrderClick');
  }

  const setBuyAmount = (amount: number) => {
    amountBuy = amount;
  }

  const setMcPercent = (amount: number) => {
    mcPercent = amount;
  }

  const setTrailingType = (el: TNavItem) => {
    tailingType = el;
  }
</script>

<div class="e:flex e:flex-col e:gap-[8px] e:h-full">
  <div class="e:w-full e:flex e:justify-between">
    <SegmentControlList>
      {#each tradeTypes as el}
        <SegmentControlItem
          active={tradeType.key === el.key}
          onclick={() => { onTradeTypeClick(el) }}
        >
          {el.label}
        </SegmentControlItem>
      {/each}
    </SegmentControlList>

    <BalanceSol walletIcon balance={12.56} />
  </div>
  
  <div class="e:w-full e:flex e:flex-col e:gap-[8px]">
    <Section variant="buy" class="e:flex e:flex-col e:gap-y-[10px]">
      {#if tradeType.key === 'trailing'}
        <SegmentControlList class="e:w-full">
          {#each TRAILING_TYPES as type}
            <SegmentControlItem 
              active={tailingType.key === type.key}
              onclick={() => setTrailingType(type)}
            >
              {type.label}
            </SegmentControlItem>
          {/each}
        </SegmentControlList>
      {/if}

      <QuickTradeActions 
        type="buy" 
        actions={$quickBuyStore} 
        onclick={setBuyAmount}
      />
      <Input 
        bind:value={amountBuy} 
        variant="buy"
        type="number" 
        icon="sol" 
        class="e:col-span-3"
        placeholder="Enter custom amount"
        min={0.001}
        max={100}
        step={0.001}
        onchange={() => {
          console.log('amountBuy', amountBuy);
        }}
      />
    </Section>

    {#if tradeType.key === 'limit' || tradeType.key === 'trailing'}
      <div class="e:w-full e:relative">
        <Input bind:value={limitAmount} variant="default" />
        <span class="e:absolute e:top-[10px] e:right-[10px] text-12px e:text-white/50 e:font-normal">
          $MKT CAP
        </span>
      </div>

      <div class="e:w-full e:relative e:grid e:grid-cols-4 e:gap-x-[12px]">
        <div class="e:col-span-3">
          <SegmentControlList class="e:w-full" size="lg">
            {#each $quickMcLimitsStore as mcLimit}
              <SegmentControlItem 
                active={mcPercent == mcLimit}
                onclick={() => setMcPercent(mcLimit)}
              >
                {mcLimit > 0 ? '+' : ''}{mcLimit}%
              </SegmentControlItem>
            {/each}
          </SegmentControlList>
        </div>

        <Input 
          bind:value={mcPercent} 
          variant="default" 
          icon="percent" 
        />
      </div>
    {/if}
  </div>

  <TokenStats />

  {#if tradeType.key === 'market'}
    <Button 
      clipped
      variant="buy" 
      class="e:w-full e:gap-x-[8px]"
      onclick={onBuyClick}
    >
      <span class="e:flex e:gap-x-[4px]">
        Buy {amountBuy} <SolanaCircleIcon />
      </span> {token}
    </Button>
  {/if}

  {#if tradeType.key === 'trailing'}
    <Button 
      clipped
      variant="buy" 
      class="e:w-full e:gap-x-[8px]"
      onclick={onPlaceLimitOrderClick}
    >
      Place Limit Order
    </Button>
  {/if}
</div>

<div 
  class="e:w-full e:flex e:flex-col e:gap-[8px] e:h-[60px]"
>
  <TradeStats />
  <Footer />
</div>