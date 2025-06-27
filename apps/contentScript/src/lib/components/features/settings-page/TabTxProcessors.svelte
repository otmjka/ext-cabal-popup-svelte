<script lang="ts">
  // Components
  import { Button, Switcher } from "@/components/ui";

  // Helpers
  import { toaster } from "@/config/toast";

  // Methods
  const onSaveClick = () => {
    toaster.message("Settings was successfully saved", "Saved");
  }

  const processors = $state([
    {label: "Cabal Provider", enabled: true, notice: "requires no tip, only validator fee"},
    {label: "Nozomi", enabled: true, notice: "require a minimum 0.001 SOL tip"},
    {label: "AstraIris", enabled: false, notice: "require a minimum 0.001 SOL tip"},
    {label: "JitoValidators", enabled: true, notice: "require a minimum 0.001 SOL tip"},
    {label: "BloxRoute", enabled: false, notice: "require a minimum 0.001 SOL tip"},
    {label: "NextBlock", enabled: false, notice: "require a minimum 0.001 SOL tip"},
    {label: "0slot_trade", enabled: true, notice: "require a minimum 0.001 SOL tip"},
  ])
</script>

<div class="e:w-full e:max-w-[420px] e:flex e:flex-col e:gap-[32px] e:p-[32px] e:bg-[#04070C] e:border-[1px] e:border-white/20">
  <header>
    <h3 class="text-24px e:text-white">
      Transaction processors
    </h3>
  </header>
  <div class="e:w-full e:flex e:flex-col e:gap-y-[32px]">
    {#each processors as item}
      <div class="e:w-full e:flex e:justify-between e:items-center">
        <div>
          <p class="text-18px e:text-white e:mb-[6px]">
            {item.label}
          </p>
          <p class="text-12px e:text-white/50">
            {item.label} {item.notice}
          </p>
        </div>

        <Switcher bind:checked={item.enabled} />
      </div>
    {/each}    
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

  <div class="e:text-[12px]/[14px] e:text-white/50">
    Your selected Priority Fee is split equally across all active processors.<br>
    Only the fastest transaction reaches the network. The rest are automatically cancelled.<br><br>

    Example:<br>
    • 0.05 P.Fee with 1 processor → 1 tx with 0.05 P.Fee<br>
    • 0.05 P.Fee with 5 processors → 5 txs with 0.01 P.Fee each<br><br>

    Use more processors = higher chance to win the speed race but P.Fee is shared. Choose wisely
  </div>

</div>