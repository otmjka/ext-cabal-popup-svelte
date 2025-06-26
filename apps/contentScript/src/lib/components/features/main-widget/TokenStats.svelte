<script lang="ts">
	// Components
	import {
		SlippageIcon,
		TipIcon,
		PriorityFeeIcon,
		MevProtectionIcon,
		TxProcessorIcon
	} from '@/components/icons';
	import { contentAppStore } from '@/stores/contentAppStore';
	import type { BuySellConfig } from '@/shared/src/cabalConfig';
	import { onDestroy } from 'svelte';

	// props

	let props = $props<{ type: 'sell' | 'buy' }>();

	let buySellConfig = $state<BuySellConfig>();
	let unsubscribe = contentAppStore.subscribe(($store) => {
		try {
			buySellConfig = $store.config?.buySell;
			// $store.config?.buySell.buySlippage
		} catch (error) {
			console.error(error);
		}
	});
	// Data
	let stats = $derived.by(() => {
		return {
			'slippage ': {
				value: props.type === 'buy' ? buySellConfig?.buySlippage : buySellConfig?.sellSlippage,
				prefix: '',
				suffix: '%',
				icon: SlippageIcon
			},
			tip: {
				value: props.type === 'buy' ? buySellConfig?.buyTip : buySellConfig?.sellTip,
				prefix: '',
				suffix: '',
				icon: TipIcon
			},
			priority_fee: {
				value:
					props.type === 'buy' ? buySellConfig?.buyPriorityFee : buySellConfig?.sellPriorityFee,
				prefix: '',
				suffix: '',
				icon: PriorityFeeIcon
			},
			mev_protection: {
				value: 'On',
				prefix: '',
				suffix: '',
				icon: MevProtectionIcon
			},
			tx_processors: {
				value: 5,
				prefix: '',
				suffix: '',
				icon: TxProcessorIcon
			}
		};
	});
	onDestroy(unsubscribe);
</script>

<div class="e:w-full e:flex e:justify-between">
	{#each Object.values(stats) as stat}
		<div class="e:flex e:items-center e:gap-x-[4px] e:py-[4px] e:px-[6px]">
			<stat.icon />
			<span class="text-12px e:text-[#9B9C9E]">
				{stat.value}
				{stat.suffix}
			</span>
		</div>
	{/each}
</div>
