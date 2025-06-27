<script lang="ts">
	// Components
	import { SegmentControlItem, SegmentControlList, Button, Input, Section } from '@/components/ui';
	import { BalanceSol, QuickTradeActions } from '@/components/shared';
	import { SolanaCircleIcon } from '@/components/icons';
	import TokenStats from './TokenStats.svelte';
	import TradeStats from './TradeStats.svelte';
	// import Footer from './Footer.svelte';

	// Stores
	import quickMcLimitsStore from '@/stores/quick-mc-limits';
	import { contentAppStore } from '@/stores/contentAppStore';
	import tabBuySellStore, { tradeTypes } from '@/stores/tab-buy-sell';

	// Types
	import type { TNavItem } from '@/types/app';

	// Constants
	import { TRAILING_TYPES } from '@/constants/trailing';
	import { getSolBalance } from '@/untils/formatters';
	import { onDestroy } from 'svelte';
	import type { ContentManagerHandlers } from '@/hooks/useContentManager.svelte';
	import { oneTokenPriceInSol } from '@/untils/token';

	// Props
	let props = $props<{
		handlers: ContentManagerHandlers;
	}>();

	// Data

	let tradeType: TNavItem = $state(tradeTypes[0]);
	let tailingType: TNavItem = $state(TRAILING_TYPES[1]);

	let amountBuy = $state<number | undefined>();
	let mcPercent: number = $state(0);
	let ticker = $state('-');
	let quickBuys = $state<number[]>([]);
	let solBalance = $state<string>('0');

	let quickMcLimits = $state<number[]>([]);
	let unsubscribeTabBuySellStore = tabBuySellStore.subscribe(($store) => {
		console.log(`[content][tabBuySellStore.subscribe]`, $store);
		tradeType = $store.tradeType;
		amountBuy = $store.amountBuy;
		mcPercent = $store.mcPercent;
	});

	let unsubscribe = contentAppStore.subscribe(($store) => {
		try {
			console.log(`[content][contentAppStore.subscribe]`, $store);
			if ($store.config?.limit.mcPerc) {
				quickMcLimits = [...$store.config?.limit.mcPerc];
			}
			if (!$store.tradeStats) {
				return;
			}
			solBalance = getSolBalance({ tradeStats: $store.tradeStats });

			ticker = $store.tokenStatus?.ticker || '-';
			if ($store.config?.buySell.buyPresetsSol) {
				quickBuys = $store.config?.buySell.buyPresetsSol;
			}
		} catch (error) {
			console.error(error);
		}
	});
	// Methods
	const onTradeTypeClick = (el: TNavItem) => {
		$tabBuySellStore.tradeType = el;
		$tabBuySellStore.amountBuy = 0;
		$tabBuySellStore.limitAmount = 0;
	};

	const onBuyClick = () => {
		console.log('onBuyClick', amountBuy);
		props.handlers.onMarketBuySol(amountBuy);
	};

	const onBuyLimitClick = () => {
		const params = { amountBuy, mcPercent, limitBuy: $tabBuySellStore.limitAmount };
		console.log('onBuyLimitClick', params);
		props.handlers.onPlaceBuyLimitOrder(params);
	};

	const onPlaceTrailingLimitOrderClick = () => {
		console.log('onPlaceLimitOrderClick');
	};

	const setBuyAmount = (amount: number) => {
		$tabBuySellStore.amountBuy = amount;
	};

	const setMcPercent = (amount: number) => {
		$tabBuySellStore.mcPercent = amount;
		$tabBuySellStore.limitAmount = $contentAppStore.mc + (amount * $contentAppStore.mc) / 100;
	};

	const setTrailingType = (el: TNavItem) => {
		tailingType = el;
	};

	onDestroy(() => {
		unsubscribe();
		unsubscribeTabBuySellStore();
	});
</script>

<div class="e:flex e:flex-col e:gap-[8px] e:h-full">
	<div class="e:w-full e:flex e:justify-between">
		<SegmentControlList>
			{#each tradeTypes as el}
				<SegmentControlItem
					active={tradeType.key === el.key}
					onclick={() => {
						onTradeTypeClick(el);
					}}
				>
					{el.label}
				</SegmentControlItem>
			{/each}
		</SegmentControlList>

		<BalanceSol walletIcon balance={solBalance} />
	</div>

	<div class="e:w-full e:flex e:flex-col e:gap-[8px]">
		<Section variant="buy" class="e:flex e:flex-col e:gap-y-[10px]">
			{#if tradeType.key === 'trailing'}
				<SegmentControlList class="e:w-full">
					{#each TRAILING_TYPES as type}
						<SegmentControlItem
							active={tailingType.key === type.key}
							onclick={() => setTrailingType(type)}
						>
							{type.label}
						</SegmentControlItem>
					{/each}
				</SegmentControlList>
			{/if}

			<QuickTradeActions type="buy" actions={quickBuys} onclick={setBuyAmount} />
			<Input
				bind:value={$tabBuySellStore.amountBuy}
				variant="buy"
				type="number"
				icon="sol"
				class="e:col-span-3"
				placeholder="Enter custom amount"
				min={0.001}
				max={100}
				step={0.001}
				onchange={() => {
					console.log('amountBuy', $tabBuySellStore.amountBuy);
				}}
			/>
		</Section>

		{#if tradeType.key === 'limit' || tradeType.key === 'trailing'}
			<div class="e:w-full e:relative">
				<Input bind:value={$tabBuySellStore.limitAmount} variant="default" />
				<span
					class="e:absolute e:top-[10px] e:right-[10px] text-12px e:text-white/50 e:font-normal"
				>
					$MKT CAP
				</span>
			</div>

			<div class="e:w-full e:relative e:grid e:grid-cols-4 e:gap-x-[12px]">
				<div class="e:col-span-3">
					<SegmentControlList class="e:w-full" size="lg">
						{#each quickMcLimits as mcLimit}
							<SegmentControlItem
								active={mcPercent == mcLimit}
								onclick={() => setMcPercent(mcLimit)}
							>
								{mcLimit > 0 ? '+' : ''}{mcLimit}%
							</SegmentControlItem>
						{/each}
					</SegmentControlList>
				</div>

				<Input bind:value={$tabBuySellStore.mcPercent} variant="default" icon="percent" />
			</div>
		{/if}
	</div>

	<TokenStats type="buy" />

	{#if tradeType.key === 'market'}
		<Button clipped variant="buy" class="e:w-full e:gap-x-[8px]" onclick={onBuyClick}>
			<span class="e:flex e:gap-x-[4px]">
				Buy {amountBuy}
				<SolanaCircleIcon />
			</span>
			{ticker}
		</Button>
	{/if}

	{#if tradeType.key === 'limit'}
		<Button clipped variant="buy" class="e:w-full e:gap-x-[8px]" onclick={onBuyLimitClick}>
			<span class="e:flex e:gap-x-[4px]">
				Buy {amountBuy}
				<SolanaCircleIcon />
			</span>
			{ticker}
		</Button>
	{/if}

	{#if tradeType.key === 'trailing'}
		<Button
			clipped
			variant="buy"
			class="e:w-full e:gap-x-[8px]"
			onclick={onPlaceTrailingLimitOrderClick}
		>
			Place Limit Order
		</Button>
	{/if}
</div>

<div class="e:w-full e:flex e:flex-col e:gap-[8px]">
	<TradeStats />
	<!-- <Footer /> -->
</div>
