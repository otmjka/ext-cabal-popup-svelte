<script lang="ts">
  // Components
  import { Button, SegmentControlItem, SegmentControlList, Switcher, InfoIcon } from "@/components/ui";
  import { AutoLimitsEditor } from "@/components/shared";

  // Helpers
  import { toaster } from "@/config/toast";

  // Data
  let presets: number[] = $state([1,2,3]);
  let selectedPreset = $state(presets[0]);
  let offAutolimitsOnTrade = $state(false);


  const record = {
    "amount": 50,
    "color": "red",
    "priorityFee": 0.0005,
    "slippage": 25,
    "target": 100,
    "tip": 0.005,
    "type": "TakeProfit Trailing"
  };

  let sell = $state([]);
  let buy = $state([]);

  let sellDraft = [];
  let buDraft = [];

  Array(4).keys().forEach(() => {
    sellDraft.push(record);
  });
  sell = sellDraft;

  Array(8).keys().forEach(() => {
    buDraft.push(record);
  });
  buy = buDraft;

  // Methods
  const onPresetSelect = (preset: number) => {
    selectedPreset = preset
  }

  const onSaveClick = () => {
    toaster.message("Settings was successfully saved", "Saved");
  }
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

      {#if sell.length}
        <AutoLimitsEditor type="sell" bind:records={sell} />
      {/if}
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