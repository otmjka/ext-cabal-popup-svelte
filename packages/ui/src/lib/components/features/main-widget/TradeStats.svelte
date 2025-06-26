<script lang="ts">
	// Components
	import SolanaIcon from '@/components/icons/SolanaIcon.svelte';

	// Stores
	import { contentAppStore } from '@/stores/contentAppStore';
	import { calculatePnL, formatTradeData, getPnLLabel } from '@/untils/formatters';
	import { onDestroy } from 'svelte';

	let stats = $state<{ bought: string; sold: string; holding: string; pnl: string }>({
		bought: '-',
		sold: '-',
		holding: '-',
		pnl: '-'
	});

	let unsubscribe = contentAppStore.subscribe(($store) => {
		try {
			if (!$store.tradeStats || !$store.tokenStatus) {
				return;
			}
			const formattedTS = formatTradeData({
				tradeStats: $store.tradeStats,
				tokenStatus: $store.tokenStatus
			});
			const pnl = getPnLLabel({
				tradeStats: $store.tradeStats,
				tokenStatus: $store.tokenStatus
			});
			stats = {
				bought: formattedTS.buyQoute,
				sold: formattedTS.sellQoute,
				holding: formattedTS.tokensInSol,
				pnl
			};
		} catch (error) {
			console.error(error);
		}
	});

	// Data
	let tradeStats = $derived.by(() => {
		return {
			bought: {
				label: 'Bought',
				value: stats.bought,
				trend: 'positive',
				icon: SolanaIcon
			},
			sold: {
				label: 'Sold',
				value: stats.sold,
				trend: 'negative',
				icon: SolanaIcon
			},
			holding: {
				label: 'Holding',
				value: stats.holding,
				trend: 'neutral',
				icon: SolanaIcon
			},
			pnl: {
				label: 'PnL',
				value: stats.pnl,
				trend: 'positive',
				icon: SolanaIcon
			}
		};
	});
	onDestroy(unsubscribe);
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
