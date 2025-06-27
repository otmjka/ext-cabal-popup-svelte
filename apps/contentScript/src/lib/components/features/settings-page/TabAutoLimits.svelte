<script lang="ts">
  import { onMount } from "svelte";

  // Components
  import { Button, SegmentControlItem, SegmentControlList, Switcher, InfoIcon } from "@/components/ui";
  import { AutoLimitsEditor } from "@/components/shared";

  // Helpers
  import { toaster } from "@/config/toast";

  // Constants
  import { 
    DEFAULT_BUY_AUTO_LIMIT, 
    DEFAULT_SELL_AUTO_LIMIT 
  } from "@/constants/auto-limits";

  // Types
  import type { 
    IAutoLimitBuyRecord, 
    IAutoLimitSellRecord, 
  } from "@/types/limits";

  // Data
  let presets: number[] = $state([1,2,3]);
  let selectedPreset = $state(presets[0]);
  let offAutolimitsOnTrade = $state(false);

  // Тут должны быть данные из сторов, но я замокал этот кусок
  let sell: IAutoLimitSellRecord[] = $state([]);
  let buy: IAutoLimitBuyRecord[] = $state([]);

  // Methods
  const onPresetSelect = (preset: number) => {
    selectedPreset = preset
  }

  const onSaveClick = () => {
    toaster.message("Settings was successfully saved", "Saved");
  }

  onMount(() => {
    if (sell.length === 0) {
      sell.push({...DEFAULT_SELL_AUTO_LIMIT});
    }
    if (buy.length === 0) {
      buy.push({...DEFAULT_BUY_AUTO_LIMIT});
    }
  })
</script>

<div class="e:w-full e:max-w-[764px] e:flex e:flex-col e:gap-[32px] e:p-[32px] e:bg-[#04070C] e:border-[1px] e:border-white/20">
  <header>
    <h3 class="text-24px e:text-white">
      AutoLimits Settings
    </h3>
  </header>

  <div class="e:w-full e:flex e:flex-col e:gap-y-[32px]">
    <div class="e:w-full e:flex e:justify-between e:items-center">
      <SegmentControlList size="lg">
        {#each presets as preset}
          <SegmentControlItem 
            active={selectedPreset === preset}
            onclick={() => { onPresetSelect(preset) }}
          >
            Presets {preset}
          </SegmentControlItem>
        {/each}
      </SegmentControlList>

      <div class="e:flex e:justify-between e:gap-[12px] e:items-center e:text-white">
        <InfoIcon tip="When enabled your AutoLimits will be placed immediately after buying a token" />

        <span class="e:uppercase">
          AutoPlace
        </span>

        <Switcher bind:checked={offAutolimitsOnTrade} />
      </div>
    </div>

    <div class="e:w-full e:flex e:flex-col e:gap-y-[16px]">
      <h4 class="e:flex e:gap-[8px] text-18px e:text-white font-700">
        <span class="text-sell">Sell</span> Limit Orders 
        <InfoIcon tip="Sell Limit Orders " />
      </h4>
      <AutoLimitsEditor type="sell" bind:records={sell} />
    </div>

    <div class="e:w-full e:flex e:flex-col e:gap-y-[16px]">
      <h4 class="e:flex e:gap-[8px] text-18px e:text-white font-700">
        <span class="text-buy">Buy</span> Limit Orders 
        <InfoIcon tip="Sell Limit Orders " />
      </h4>
      <AutoLimitsEditor type="buy" bind:records={buy} />
    </div>
  </div>

  <div class="e:w-full">
    <Button 
      clipped 
      variant="buy" 
      size="lg"  
      class="e:w-full" 
      onclick={onSaveClick}
    >
      Save Settings
    </Button>
  </div>
</div>