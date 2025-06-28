<script lang="ts">
	// Components
	import { SegmentControlItem, SegmentControlList, Button, Input, Section } from '@/components/ui';
	import { BalanceSol, QuickTradeActions } from '@/components/shared';
	import { SolanaCircleIcon } from '@/components/icons';
	import TokenStats from './TokenStats.svelte';
	import TradeStats from './TradeStats.svelte';
	// import Footer from './Footer.svelte';

	// Stores
	import quickSellStore from '@/stores/quick-sell';
	import quickMcLimitsStore from '@/stores/quick-mc-limits';
	import { contentAppStore } from '@/stores/contentAppStore';

	// Types
	import type { TNavItem } from '@/types/app';
	import type { ContentManagerHandlers } from '@/hooks/useContentManager.svelte';

	// Constants
	import { TRAILING_TYPES } from '@/constants/trailing';
	import { getSolBalance } from '@/untils/formatters';
	import { onDestroy } from 'svelte';
	import tabBuySellStore, { tradeTypes } from '@/stores/tab-buy-sell';

	// Props
	let props = $props<{
		handlers: ContentManagerHandlers;
	}>();

	// Data

	let tradeType: TNavItem = $state(tradeTypes[0]);
	let tailingType: TNavItem = $state(TRAILING_TYPES[1]);
	let amountSell: number | undefined = $state();
	let limitAmount: number | undefined = $state();
	let mcPercent: number = $state(0);
	let ticker = $state('-');
	let quickSellPerc = $state<number[]>([]);
	let solBalance = $state<string>('0');

	let quickMcLimits = $state<number[]>([]);
	let unsubscribeTabBuySellStore = tabBuySellStore.subscribe(($store) => {
		console.log(`[content][tabBuySellStore.subscribe]`, $store);
		tradeType = $store.main.tradeType;
		amountSell = $store.main.amountSell;
		mcPercent = $store.main.mcPercent;
	});

	let unsubscribe = contentAppStore.subscribe(($store) => {
		try {
			if (!$store.tradeStats) {
				return;
			}
			solBalance = getSolBalance({ tradeStats: $store.tradeStats });

			ticker = $store.tokenStatus?.ticker || '-';
			if ($store.config?.buySell.sellPresetsSol) {
				quickSellPerc = $store.config?.buySell.sellPresetsPerc;
			}

			if ($store.config?.limit.mcPerc) {
				quickMcLimits = $store.config?.limit.mcPerc;
			}
		} catch (error) {
			console.error(error);
		}
	});

	// Methods
	const onTradeTypeClick = (el: TNavItem) => {
		tradeType = el;
		amountSell = 0;
		limitAmount = 0;
	};

	const onSellClick = () => {
		console.log('onSellClick', amountSell);
		props.handlers.onMarketSellSol(amountSell);
	};

	const onPlaceLimitOrderClick = () => {
		console.log('onPlaceLimitOrderClick');
	};

	const setSellAmount = (amount: number) => {
		amountSell = amount;
	};

	const setMcPercent = (amount: number) => {
		mcPercent = amount;
	};

	const setTrailingType = (el: TNavItem) => {
		tailingType = el;
	};

	onDestroy(() => {
		unsubscribe();
		unsubscribeTabBuySellStore();
	});
</script>

<div class="e:flex e:flex-col e:gap-[12px] e:h-full">
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
		<Section variant="sell" class="e:flex e:flex-col e:gap-y-[10px]">
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

			<!-- <QuickTradeActions type="sell" actions={quickSells} onclick={setSellAmount} /> -->
			<QuickTradeActions
				type="sell"
				unit={'percent'}
				actions={quickSellPerc}
				onclick={setSellAmount}
			/>

			<div class="e:grid e:grid-cols-4 e:gap-[10px]">
				<Button clipped variant="sell" class="e:w-full e:col-span-2 e:px-[8px]">
					Sell initials
				</Button>
				<Input
					bind:value={amountSell}
					variant="sell"
					type="number"
					icon="percent"
					class="e:col-span-2"
					placeholder="Enter custom amount"
					min={0.001}
					max={100}
					step={0.001}
					onchange={() => {
						console.log('amountSell', amountSell);
					}}
				/>
			</div>
		</Section>

		{#if tradeType.key === 'limit' || tradeType.key === 'trailing'}
			<div class="e:w-full e:relative e:mb-[8px]">
				<Input bind:value={limitAmount} variant="default" />
				<span
					class="e:absolute e:top-[10px] e:right-[10px] text-12px e:text-white/50 e:font-normal"
				>
					$MKT CAP
				</span>
			</div>

			<div class="e:w-full e:relative e:grid e:grid-cols-4 e:gap-x-[16px]">
				<div class="e:col-span-3">
					<SegmentControlList class="e:w-full" size="lg">
						{#each $quickMcLimitsStore as mcLimit}
							<SegmentControlItem
								active={mcPercent == mcLimit}
								onclick={() => setMcPercent(mcLimit)}
							>
								{mcLimit > 0 ? '+' : ''}{mcLimit}%
							</SegmentControlItem>
						{/each}
					</SegmentControlList>
				</div>

				<Input bind:value={mcPercent} variant="default" icon="percent" />
			</div>
		{/if}
	</div>

	<TokenStats type={'sell'} />

	{#if tradeType.key === 'market'}
		<Button clipped variant="sell" class="e:w-full e:gap-x-[8px]" onclick={onSellClick}>
			<span class="e:flex e:gap-x-[4px]">
				Sell {amountSell}
				<SolanaCircleIcon />
			</span>
			{ticker}
		</Button>
	{/if}

	{#if tradeType.key === 'trailing'}
		<Button clipped variant="sell" class="e:w-full e:gap-x-[8px]" onclick={onPlaceLimitOrderClick}>
			Place Limit Order
		</Button>
	{/if}
</div>

<div class="e:w-full e:flex e:flex-col e:gap-[8px]">
	<TradeStats />
	<!-- <Footer /> -->
</div>
