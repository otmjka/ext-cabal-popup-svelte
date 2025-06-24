<script lang="ts">
  // Components
  import { SegmentControlItem, SegmentControlList, Button, Input, Section } from '@/components/ui';
  import { BalanceSol, QuickTradeActions } from "@/components/shared";
  import { 
    SolanaCircleIcon, SolanaIcon, 
    SlippageIcon, TipIcon, PriorityFeeIcon, 
    MevProtectionIcon, TxProcessorIcon  
  } from '@/components/icons';
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

  let stats = $derived.by(() => {
    return {
      'slippage ': {
        value: 20,
        prefix: '',
        suffix: '%',
        icon: SlippageIcon,
      },
      'tip': {
        value: 0.001,
        prefix: '',
        suffix: '',
        icon: TipIcon,
      }, 
      'priority_fee': {
        value: 0.0001,
        prefix: '',
        suffix: '',
        icon: PriorityFeeIcon,
      },
      'mev_protection': {
        value: "On",
        prefix: '',
        suffix: '',
        icon: MevProtectionIcon,
      },
      'tx_processors': {
        value: 5,
        prefix: '',
        suffix: '',
        icon: TxProcessorIcon,
      },
    }
  });

  let tradeStats = $derived.by(() => {
    return {
      bought: {
        label: 'Bought',
        value: 0,
        trend: 'positive',
        icon: SolanaIcon
      },
      sold: {
        label: 'Sold',
        value: 70.90,
        trend: 'negative',
        icon: SolanaIcon
      },
      holding: {
        label: 'Holding',
        value: 15.20,
        trend: 'neutral',
        icon: SolanaIcon
      },
      pnl: {
        label: 'PnL',
        value: `+0 (+0%)`,
        trend: 'positive',
        icon: SolanaIcon
      },
    }
  });
  let tradeType: TNavItem = $state(tradeTypes[0]);
  let tailingType: TNavItem = $state(TRAILING_TYPES[1]);
  let amountBuy: number | undefined = $state();
  let limitAmount: number | undefined = $state();
  let mcPercent: number = $state(0);

  // Methods
  const onTradeTypeClick = (el: TNavItem) => {
    tradeType = el;
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

<div class="e:flex e:flex-col e:gap-[12px] e:h-full">
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
        value={amountBuy} 
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
      <div class="e:w-full e:relative e:mb-[8px]">
        <Input bind:value={limitAmount} variant="default" />
        <span class="e:absolute e:top-[10px] e:right-[10px] text-12px e:text-white/50 e:font-normal">
          $MKT CAP
        </span>
      </div>

      <div class="e:w-full e:relative e:grid e:grid-cols-4 e:gap-x-[16px]">
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

  <div class="e:w-full e:flex e:justify-between">
    {#each Object.values(stats) as stat}
      <div class="e:flex e:items-center e:gap-x-[4px] e:py-[6px] e:px-[6px]">
        <stat.icon />
        <span class="text-12px e:text-[#9B9C9E]">
          {stat.value} {stat.suffix}
        </span>
      </div>
    {/each}
  </div>

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

{#if tradeType.key === 'market' || tradeType.key === 'limit'}
  <div class="e:w-full e:flex e:justify-between e:mb-[8px]">
    {#each Object.values(tradeStats) as stat}
      <div class="text-12px e:flex e:flex-col e:items-center e:gap-y-[4px]">
        <p class="e:text-[#9B9C9E]">
          {stat.label}
        </p>
        <p 
          class="text-buy e:flex e:gap-x-[4px] e:items-center"
          class:text-sell={stat.trend === 'negative'}
          class:text-buy={stat.trend === 'positive'}
          class:e:text-white={stat.trend === 'neutral'}
        >
          <stat.icon size={10} />
          {stat.value}
        </p>
      </div>
    {/each}
  </div>
  <Footer />
{/if}