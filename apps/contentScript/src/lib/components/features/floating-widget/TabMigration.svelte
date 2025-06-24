<script lang="ts">
  import { Button, Input,  Section } from '@/components/ui';
  import SolanaCircleIcon from '@/components/icons/SolanaCircleIcon.svelte';

  // Props
  let {
    token = "$Alpha"
  } = $props();

  // Data
  let amountBuy: number | undefined = $state(0.0005);
  let buy = $state({
    tip: 0.5,
    priorityFee: 3,
    sleepage: 10,
  });

  let amountSell: number | undefined = $state(10);
  let sell = $state({
    tip: 0.5,
    priorityFee: 3,
    sleepage: 10,
  });
  
  // Methods
  const onBuySnipeClick = () => {
    console.log('onBuySnipeClick');
  }

  const onSellSnipeClick = () => {
    console.log('onSellSnipeClick');
  }
</script>

<div class="e:flex e:flex-col e:gap-[12px] e:h-full">
  <Section variant="buy" class="e:flex e:flex-col e:gap-y-[10px] e:h-full">
    <div class="e:flex e:justify-between e:items-center">
      <h4 class="text-18px e:font-bold text-buy">
        Buy
      </h4>
    </div>

    <div class="e:w-full e:grid e:grid-cols-3 e:gap-[10px]">
      <div class="e:flex e:flex-col e:gap-y-[4px]">
        <label for="" class="text-12px">
          Tip
        </label>
        <Input 
          bind:value={buy.tip} 
          variant="buy"
          type="number" 
          icon="sol" 
          min={0.1}
          max={100}
          step={0.1}
        />
      </div>

      <div class="e:flex e:flex-col e:gap-y-[4px]">
        <label for="" class="text-12px">
          Priority Fee
        </label>
        <Input 
          bind:value={buy.priorityFee} 
          variant="buy"
          type="number" 
          icon="sol" 
          min={0.1}
          max={100}
          step={0.1}
        />
      </div>

      <div class="e:flex e:flex-col e:gap-y-[4px]">
        <label for="" class="text-12px">
          Slippage
        </label>
        <Input 
          bind:value={buy.sleepage} 
          variant="buy"
          type="number" 
          icon="percent" 
          min={0.1}
          max={100}
          step={0.1}
        />
      </div>
    </div>

    <div class="e:w-full e:grid e:grid-cols-3 e:gap-[10px]">
      <Input 
        value={amountBuy} 
        variant="buy"
        type="number" 
        icon="sol" 
        placeholder="Enter SOL amount"
        min={0.001}
        max={100}
        step={0.001}
      />
      <Button 
        clipped
        variant="buy" 
        class="e:w-full e:col-span-2 e:gap-[6px] e:px-[4px]"
        onclick={onBuySnipeClick}
      >
        <span>
          Activate Snipe
        </span>
        <span class="e:flex e:items-center e:gap-[4px]">
          5.00 <SolanaCircleIcon />
        </span>
      </Button>
    </div>
  </Section>

  <Section variant="sell" class="e:flex e:flex-col e:gap-y-[10px] e:h-full">
    <div class="e:flex e:justify-between e:items-center">
      <h4 class="text-18px e:font-bold text-sell">
        Sell
      </h4>
    </div>

    <div class="e:w-full e:grid e:grid-cols-3 e:gap-[10px]">
      <div class="e:flex e:flex-col e:gap-y-[4px]">
        <label for="" class="text-12px">
          Tip
        </label>
        <Input 
          bind:value={sell.tip} 
          variant="sell"
          type="number" 
          icon="sol" 
          min={0.1}
          max={100}
          step={0.1}
        />
      </div>

      <div class="e:flex e:flex-col e:gap-y-[4px]">
        <label for="" class="text-12px">
          Priority Fee
        </label>
        <Input 
          bind:value={sell.priorityFee} 
          variant="sell"
          type="number" 
          icon="sol" 
          min={0.1}
          max={100}
          step={0.1}
        />
      </div>

      <div class="e:flex e:flex-col e:gap-y-[4px]">
        <label for="" class="text-12px">
          Slippage
        </label>
        <Input 
          bind:value={sell.sleepage} 
          variant="sell"
          type="number" 
          icon="percent" 
          min={0.1}
          max={100}
          step={0.1}
        />
      </div>
    </div>

    <div class="e:w-full e:grid e:grid-cols-3 e:gap-[10px]">
      <Input 
        value={amountSell} 
        variant="sell"
        type="number" 
        icon="sol" 
        placeholder="Enter SOL amount"
        min={0.001}
        max={100}
        step={0.001}
      />
      <Button 
        clipped
        variant="sell" 
        class="e:w-full e:col-span-2 e:gap-[6px] e:px-[4px]"
        onclick={onSellSnipeClick}
      >
        <span>
          Activate Snipe
        </span>
        <span class="e:flex e:items-center e:gap-[4px]">
          {amountSell ?? 0}%
        </span>
      </Button>
    </div>
  </Section>
</div>