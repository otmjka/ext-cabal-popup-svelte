<script lang="ts">
  // Components
  import { 
    SlippageIcon, TipIcon, PriorityFeeIcon, 
    MevProtectionIcon, TxProcessorIcon  
  } from '@/components/icons';

  // Data
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
</script>

<div class="e:w-full e:flex e:justify-between">
  {#each Object.values(stats) as stat}
    <div class="e:flex e:items-center e:gap-x-[4px] e:py-[4px] e:px-[6px]">
      <stat.icon />
      <span class="text-12px e:text-[#9B9C9E]">
        {stat.value} {stat.suffix}
      </span>
    </div>
  {/each}
</div>