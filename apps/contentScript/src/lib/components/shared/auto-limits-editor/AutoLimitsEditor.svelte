<script lang="ts">
  // Components
  import { Button, Input } from "@/components/ui";
  import Trash2Icon from "@lucide/svelte/icons/trash-2";

  // Helpers
  import { toaster } from "@/config/toast";

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

  // Methods
  const onLimitDelete = (idx: number) => {
    toaster.message("Limit was successfully deleted", "Deleted");
  }

  const onAddClick = () => {
    
  }
</script>

<div class="e:w-full e:flex e:flex-col  e:gap-[12px]">
  <div class="e:w-full e:flex e:gap-[12px]">
    <header class="e:w-full e:grid e:grid-cols-6 e:gap-[12px]">
      {#each headers as header}
        <div class="e:text-white/50">
          {header}
        </div>
      {/each}
    </header>
    <div>

    </div>
  </div>

  {#each records as record, idx}
    <div class="e:w-full e:flex e:gap-[12px]">
      <div class="e:w-full e:grid e:grid-cols-6 e:gap-[12px]">
        <div class="e:text-white/50">
          
        </div>
        <div class="e:text-white/50">
          <Input 
            icon="sol"
            bind:value={records[idx].priorityFee}
          />
        </div>
        <div class="e:text-white/50">
          <Input 
            icon="sol"
            bind:value={records[idx].tip}
          />
        </div>
        <div class="e:text-white/50">
          <Input 
            icon="percent"
            bind:value={records[idx].slippage}
          />
        </div>
        <div class="e:text-white/50">
          <!-- #FIXME: Не нашел position data -->
          <Input 
            icon={type === "buy" ? "sol" : "percent"}
            bind:value={records[idx].slippage}
          />
        </div>
        <div class="e:text-white/50">
          <Input 
            icon="percent"
            bind:value={records[idx].target}
          />
        </div>
      </div>
      <div class="e:flex e:justify-center e:items-center">
        <button 
          class="text-light-gray e:cursor-pointer"
          onclick={() => onLimitDelete(idx)}
        >
          <Trash2Icon size={16} />
        </button>
      </div>
    </div>
  {/each}
</div>