<script lang="ts">
  // Components
  import { SegmentControlItem, SegmentControlList, Button, Input, Section } from '@/components/ui';
  import { BalanceSol } from "@/components/shared";
  import SolanaCircleIcon from '@/components/icons/SolanaCircleIcon.svelte';
  import SolanaIcon from '@/components/icons/SolanaIcon.svelte';
  
  // Stores
  import quickBuyStore from '@/stores/quick-buy';
  import quickSellStore from '@/stores/quick-sell';

  // types
  import type { TNavItem } from '@/types/app';

  // Props
  let {
    token = "$Alpha"
  } = $props();

  // Data
  const segments: TNavItem[] = [
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
      'stats': {
        value: 20,
        prefix: '',
        suffix: '%',
        icon: 'chart-column',
      },
      'data': {
        value: 0.001,
        prefix: '',
        suffix: '',
        icon: 'database',
      }, 
      'gas': {
        value: 0.0001,
        prefix: '',
        suffix: '',
        icon: 'gas',
      },
      'sandwitch': {
        value: "On",
        prefix: '',
        suffix: '',
        icon: 'sandwitch',
      },
      'terminal': {
        value: 5,
        prefix: '',
        suffix: '',
        icon: 'terminal',
      },
    }
  });

  let tradeStats = $derived.by(() => {
    return {
      bought: 0,
      sold: 70.90,
      holding: 15.20,
      pnl: 0
    }
  });
  let segment: TNavItem = $state(segments[0]);
  let amountBuy: number | undefined = $state();

  // Methods
  const onSegmentClick = (el: TNavItem) => {
    segment = el;
  }

  const onBuyClick = () => {
    console.log('onBuyClick');
  }

  const setBuyAmount = (amount: number) => {
    amountBuy = amount;
  }
</script>

<div class="e:flex e:flex-col e:gap-[8px]">
  <div class="e:w-full e:flex e:justify-between">
    <SegmentControlList>
      {#each segments as el}
        <SegmentControlItem
          active={segment.key === el.key}
          onclick={() => { onSegmentClick(el) }}
        >
          {el.label}
        </SegmentControlItem>
      {/each}
    </SegmentControlList>

    <BalanceSol walletIcon balance={12.56} />
  </div>
  
  <Section variant="buy" class="e:flex e:flex-col e:gap-y-[10px]">
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

  <div class="e:w-full e:flex e:justify-between">
    {#each Object.values(stats) as stat}
      <div class="e:flex e:items-center e:gap-x-[4px] e:py-[10px] e:px-[6px]">
        <img src="/src/assets/{stat.icon}.svg" alt="">
        <span class="e:text-[12px]/[12px] e:text-[#9B9C9E]">
          {stat.value} {stat.suffix}
        </span>
      </div>
    {/each}
  </div>

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

  <div class="e:w-full e:grid e:grid-cols-4 ">
    <div class="e:text-[12px]/[12px] e:flex e:flex-col e:items-center e:gap-y-[4px]">
      <p class="e:text-[#9B9C9E]">
        Bought
      </p>
      <p class="text-buy e:flex e:gap-x-[4px] e:items-center">
        <SolanaIcon size={10} />
        {tradeStats.bought}
      </p>
    </div>

    <div class="e:text-[12px]/[12px] e:flex e:flex-col e:items-center e:gap-y-[4px]">
      <p class="e:text-[#9B9C9E]">
        Sold
      </p>
      <p class="text-sell e:flex e:gap-x-[4px] e:items-center">
        <SolanaIcon size={10} />
        {tradeStats.sold}
      </p>
    </div>

    <div class="e:text-[12px]/[12px] e:flex e:flex-col e:items-center e:gap-y-[4px]">
      <p class="e:text-[#9B9C9E]">
        Holding
      </p>
      <p class="e:text-white e:flex e:gap-x-[4px] e:items-center">
        <SolanaIcon size={10} />
        {tradeStats.holding}
      </p>
    </div>

    <div class="e:text-[12px]/[12px] e:flex e:flex-col e:items-center e:gap-y-[4px]">
      <p class="e:text-[#9B9C9E]">
        PnL
      </p>
      <p 
        class="e:text-white e:flex e:gap-x-[4px] e:items-center"
        class:text-buy={tradeStats.pnl >= 0}
        class:text-sell={tradeStats.pnl < 0}
      >
        <SolanaIcon size={10} />
        {tradeStats.pnl}
      </p>
    </div>
  </div>
</div>