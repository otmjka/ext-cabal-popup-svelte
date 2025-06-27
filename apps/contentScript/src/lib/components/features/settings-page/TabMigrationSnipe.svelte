<script lang="ts">
  // Components
  import { Button, Input } from "@/components/ui";

  // Helpers
  import { toaster } from "@/config/toast";

  // Data
  let buy = $state([
    {
      unit: 'sol',
      value: 10,
      label: "Amount",
    }, {
      unit: 'sol',
      value: 10,
      label: "Tip",
    }, {
      unit: 'sol',
      value: 10,
      label: "Priority Fee",
    }, {
      unit: 'percent',
      value: 10,
      label: "Slippage",
    }
  ]);
  let sell = $state([
    {
      unit: 'percent',
      value: 10,
      label: "Amount",
    }, {
      unit: 'sol',
      value: 10,
      label: "Tip",
    }, {
      unit: 'sol',
      value: 10,
      label: "Priority Fee",
    }, {
      unit: 'percent',
      value: 10,
      label: "Slippage",
    }
  ]);

  // Methods
  const onSaveClick = () => {
    toaster.message("Settings was successfully saved", "Saved");
  }
</script>

<div class="e:w-full e:max-w-[420px] e:flex e:flex-col e:gap-[32px] e:p-[32px] e:bg-[#04070C] e:border-[1px] e:border-white/20">
  <header>
    <h3 class="text-24px e:text-white">
      Migration Snipe Settings
    </h3>
  </header>

  <div class="e:w-full e:grid e:grid-cols-2 e:gap-x-[24px]">
    <div class="e:w-full e:flex e:flex-col e:gap-y-[32px]">
      {#each buy as preset}
        <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
          <h4 class="text-18px e:font-bold e:text-white">
            <span class="text-buy">Buy</span> {preset.label}
          </h4>
          <Input 
            bind:value={preset.value}
            variant="default" 
            size="lg"
            icon={preset.unit} 
          />
        </div>
      {/each}
    </div>

    <div class="e:w-full e:flex e:flex-col e:gap-y-[32px]">
      {#each sell as preset}
        <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
          <h4 class="text-18px e:font-bold e:text-white">
            <span class="text-sell">Sell</span> {preset.label}
          </h4>
          <Input 
            bind:value={preset.value}
            variant="default" 
            size="lg"
            icon={preset.unit} 
          />
        </div>
      {/each}
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