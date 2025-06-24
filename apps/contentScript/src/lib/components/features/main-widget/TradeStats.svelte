<script lang="ts">
  // Components
  import SolanaIcon from '@/components/icons/SolanaIcon.svelte';

  // Data
  let tradeStats = $derived.by(() => {
    return {
      bought: {
        label: 'Bought',
        value: 0,
        trend: 'positive',
        icon: SolanaIcon
      },
      sold: {
        label: 'Sold',
        value: 70.90,
        trend: 'negative',
        icon: SolanaIcon
      },
      holding: {
        label: 'Holding',
        value: 15.20,
        trend: 'neutral',
        icon: SolanaIcon
      },
      pnl: {
        label: 'PnL',
        value: `+0 (+0%)`,
        trend: 'positive',
        icon: SolanaIcon
      },
    }
  });
</script>

<div class="e:w-full e:flex e:justify-between">
  {#each Object.values(tradeStats) as stat}
    <div class="text-12px e:flex e:flex-col e:items-center e:gap-y-[4px]">
      <p class="e:text-[#9B9C9E]">
        {stat.label}
      </p>
      <p 
        class="text-buy e:flex e:gap-x-[4px] e:items-center e:h-[12px]"
        class:text-sell={stat.trend === 'negative'}
        class:text-buy={stat.trend === 'positive'}
        class:e:text-white={stat.trend === 'neutral'}
      >
        <stat.icon size={10} />
        {stat.value}
      </p>
    </div>
  {/each}
</div>