<script lang="ts">
  // Components
  import { Button, Input } from "@/components/ui";

  // Helpers
  import { toaster } from "@/config/toast";

  import quickBuyStore from "@/stores/quick-buy";
  import quickSellStore from "@/stores/quick-sell";

  // Methods
  const onSaveClick = () => {
    toaster.message("Settings was successfully saved", "Saved");
  }
</script>

<div class="e:w-full e:max-w-[420px] e:flex e:flex-col e:gap-[32px] e:p-[32px] e:bg-[#04070C] e:border-[1px] e:border-white/20">
  <header>
    <h3 class="text-24px e:text-white">
      Buy/Sell Settings
    </h3>
  </header>

  <div class="e:w-full e:grid e:grid-cols-2 e:gap-x-[24px] e:gap-y-[32px]">
    <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
      <h4 class="text-18px e:font-bold e:text-white">
        <span class="text-buy">
          Buy
        </span>
        Presets
      </h4>
      <div class="e:w-full e:grid e:grid-cols-2 e:gap-[8px]">
        {#each $quickBuyStore as preset}
          <Input 
            bind:value={preset} 
            size="lg"
            variant="buy" 
            icon="percent" 
          />
        {/each}
      </div>
    </div>

    <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
      <h4 class="text-18px e:font-bold e:text-white">
        <span class="text-sell">
          Sell
        </span>
        Presets
      </h4>
      <div class="e:w-full e:grid e:grid-cols-2 e:gap-[8px]">
        {#each $quickSellStore as preset}
          <Input 
            bind:value={preset} 
            size="lg"
            variant="sell" 
            icon="percent" 
          />
        {/each}
      </div>
    </div>

    <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
      <h4 class="text-18px e:font-bold e:text-white">
        <span class="text-buy">Buy</span> Tip
      </h4>
      <Input 
        value=""
        variant="default" 
        size="lg"
        icon="percent" 
      />
    </div>

    <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
      <h4 class="text-18px e:font-bold e:text-white">
        <span class="text-sell">Sell</span> Tip
      </h4>
      <Input 
        value=""
        variant="default" 
        size="lg"
        icon="percent" 
      />
    </div>

    <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
      <h4 class="text-18px e:font-bold e:text-white">
        <span class="text-buy">Buy</span> Priority Fee
      </h4>
      <Input 
        value=""
        variant="default" 
        size="lg"
        icon="percent" 
      />
    </div>

    <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
      <h4 class="text-18px e:font-bold e:text-white">
        <span class="text-sell">Sell</span> Priority Fee
      </h4>
      <Input 
        value=""
        variant="default" 
        size="lg"
        icon="percent" 
      />
    </div>


    <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
      <h4 class="text-18px e:font-bold e:text-white">
        <span class="text-buy">Buy</span> Slippage
      </h4>
      <Input 
        value=""
        variant="default" 
        size="lg"
        icon="percent" 
      />
    </div>

    <div class="e:w-full e:flex e:flex-col e:gap-y-[12px]">
      <h4 class="text-18px e:font-bold e:text-white">
        <span class="text-sell">Sell</span> Slippage
      </h4>
      <Input 
        value=""
        variant="default" 
        size="lg"
        icon="percent" 
      />
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