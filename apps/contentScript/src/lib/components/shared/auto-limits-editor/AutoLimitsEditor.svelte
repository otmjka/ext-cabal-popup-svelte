<script lang="ts">
  // Components
  import { Button, Input } from "@/components/ui";
  import Trash2Icon from "@lucide/svelte/icons/trash-2";
	import PlusIcon from '@lucide/svelte/icons/plus';

  // Helpers
  import { toaster } from "@/config/toast";

  // Constants
  import { 
    LIMIT_SUBTYPES, 
    DEFAULT_BUY_AUTO_LIMIT, 
    DEFAULT_SELL_AUTO_LIMIT 
  } from "@/constants/auto-limits";

  // Types
  import type { 
    IAutoLimitBuyRecord, 
    IAutoLimitSellRecord, 
  } from "@/types/limits";

  // Props
  let {
    records = $bindable([]),
    type
  }: {
    records: any[],
    type: "buy" | "sell",
  } = $props();

  // Data
  const headers = [
    "Limit type",
    "Priority Fee",
    "TIP",
    "Slippage",
    type === "buy" ? "Amount" : "Position",
    type === "buy" ? "Target, %" : "Profit",
  ];

  let formettedRecords = $state(formatRecords(records));

  // Methods
  function formatRecords(recordList: IAutoLimitBuyRecord[] | IAutoLimitSellRecord[]) {
    return recordList.map(el => {
      let trend = "neutral";
      let label = "New";
      if (type === "buy") {
        if (Number.isFinite(el.amount) && Number.isFinite(el.target)) {
          trend = el.target > 0 ? "positive" : "negative";
          label = el.target > 0 ? "BuyPush" : "BuyDip";
        }
        console.log(el.amount, el.target, Number.isFinite(el.amount), Number.isFinite(el.target))
        console.log(trend, label)
      }
      else {
        if (Number.isFinite(el.position) && Number.isFinite(el.profit)) {
          trend = el.profit > 0 ? "positive" : "negative";
          label = el.profit > 0 ? "Takeprofit" : "StopLoss";
        }
      }

      if (trend !== "neutral" && el.subtype === 'trailing') {
        label = `${label}<br>Trailing`;
      }

      return {
        trend,
        label,
        ...el
      }
    });
  }

  const onInputChange = () => {
    formettedRecords = formatRecords(records);
  }

  const onDeleteClick = (idx: number) => {
    const record = {...formettedRecords[idx]};
    records = records.filter((el, i) => i !== idx);
    formettedRecords = formatRecords(records);

    const label = record.label.replace("<br>", " ");
    toaster.message(`${label} limit was successfully deleted`);
  }

  const onAddClick = (subtype_key: string) => {
    const record = {
      ...(type === 'buy' ? DEFAULT_BUY_AUTO_LIMIT : DEFAULT_SELL_AUTO_LIMIT),
      subtype: subtype_key
    }
    records.push(record);
    formettedRecords = formatRecords(records);
  }
</script>

<div class="e:w-full e:flex e:flex-col  e:gap-[12px]">
  <header class="e:w-full e:flex e:gap-[12px]">
    <div class="e:w-full e:grid e:grid-cols-6 e:gap-[12px]">
      {#each headers as header}
        <div class="e:text-white/50">
          {header}
        </div>
      {/each}
    </div>
    <div>

    </div>
  </header>

  {#each formettedRecords as record, idx}
    <div class="e:w-full e:flex e:gap-[12px]">
      <div class="e:w-full e:grid e:grid-cols-6 e:gap-[12px]">
        <div class="e:text-white/50">
          <div class="limit-type limit-type--{record.trend}">
            {@html record.label}
          </div>
        </div>
        <div class="e:text-white/50">
          <Input 
            icon="sol"
            type="number"
            bind:value={records[idx].priorityFee}
          />
        </div>
        <div class="e:text-white/50">
          <Input 
            icon="sol"
            type="number"
            bind:value={records[idx].tip}
          />
        </div>
        <div class="e:text-white/50">
          <Input 
            icon="percent"
            type="number"
            bind:value={records[idx].slippage}
          />
        </div>

        <div class="e:text-white/50">
          {#if type === "buy"}
            <Input 
              icon="sol"
              type="number"
              placeholder="1"
              onkeyup={onInputChange}
              bind:value={records[idx].amount}
            />
          {:else}
            <Input 
              icon="percent"
              type="number"
              placeholder="50"
              onkeyup={onInputChange}
              bind:value={records[idx].position}
            />
          {/if}
        </div>
        
        <div class="e:text-white/50">
          {#if type === "buy"}
            <Input 
              icon="percent"
              type="number"
              placeholder="100"
              onkeyup={onInputChange}
              bind:value={records[idx].target}
            />
          {:else}
            <Input 
              icon="percent"
              type="number"
              placeholder="-50 or 50"
              onkeyup={onInputChange}
              bind:value={records[idx].profit}
            />
          {/if}
        </div>
      </div>
      <div class="e:flex e:justify-center e:items-center">
        <button 
          class="text-light-gray e:cursor-pointer"
          onclick={() => onDeleteClick(idx)}
        >
          <Trash2Icon size={16} />
        </button>
      </div>
    </div>
  {/each}

  <div class="e:flex e:items-center e:gap-[8px]">
    <PlusIcon class="e:text-white" />

    <div class="e:flex e:gap-[4px]">
      {#each  LIMIT_SUBTYPES as  subtype}
        <Button
          variant={type === "buy" ? "buy" : "sell"}
          onclick={() => onAddClick(subtype.key)}
        >
          {type === "buy" ? "Buy" : "Sell"} {subtype.suffix}
        </Button>
      {/each}
    </div>
  </div>
</div>

<style scoped>
	@reference "@src/app.css";

  .limit-type {
    @apply e:flex e:items-center e:justify-center e:text-center;
    @apply e:w-full e:h-[32px] e:font-semibold;
    @apply e:text-black e:text-[12px]/[13px] e:uppercase;
  }
  .limit-type--neutral {
    @apply e:bg-[#6A6D72];
  }
  .limit-type--positive {
    @apply e:bg-[#5BBE7B];
  }
  .limit-type--negative {
    @apply e:bg-[#E96B82];
  }
</style>