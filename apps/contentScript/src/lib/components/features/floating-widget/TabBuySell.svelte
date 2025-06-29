<script lang="ts">
	// Components
	import ShareIcon from '@lucide/svelte/icons/share';
	import { Button, ToggleButton, Input, Section } from '@/components/ui';
	import { QuickTradeActions } from '@/components/shared';
	import { SellSwitchIcon, SolanaCircleIcon } from '@/components/icons';
	import { toaster } from '@/config/toast';
	// Stores
	import tabBuySellStore from '@/stores/tab-buy-sell';
	import { contentAppStore } from '@/stores/contentAppStore';
	import { onDestroy } from 'svelte';
	import { calculatePnL, formatTradeData } from '@/untils/formatters';
	import type { ContentManagerHandlers } from '@/hooks/useContentManager/useContentManager.svelte';

	// Props
	let props = $props<{
		handlers: ContentManagerHandlers;
	}>();

	let buys = $state<string>('0');
	let buyQoute = $state<string>('0');
	let tokenBalance = $state<string>('-');
	let tokensInSol = $state<string>('-');
	let pnlPerc = $state<string>('0');

	let unsubscribe = contentAppStore.subscribe(($store) => {
		try {
			console.log('Store changed:', $store);

			if (!$store.tradeStats || !$store.tokenStatus) {
				return;
			}
			const formattedTS = formatTradeData({
				tradeStats: $store.tradeStats,
				tokenStatus: $store.tokenStatus
			});
			buys = formattedTS.buys;
			buyQoute = formattedTS.buyQoute;
			tokenBalance = formattedTS.tokenBalance;
			tokensInSol = formattedTS.tokensInSol || '0';

			const { percentagePnL } = calculatePnL({
				tokenStatus: $store.tokenStatus,
				tradeStats: $store.tradeStats
			});
			pnlPerc = `${percentagePnL > 0 ? '+' : ''}${percentagePnL.toFixed(1)}`;
		} catch (error) {
			console.error(error);
		}
	});

	// Data
	// let amountBuy: number | undefined = $state();
	let autoLimits = $state(true);

	// Methods

	const toggleSellUnit = () => {
		$tabBuySellStore.floating.sellUnittype =
			$tabBuySellStore.floating.sellUnittype === 'SOL' ? 'percent' : 'SOL';
		$tabBuySellStore.floating.amountSell = undefined;
	};
	const onBuyClick = () => {
		console.log('onBuyClick', $tabBuySellStore.floating.amountBuy);

		toaster.message('proba');
		props.handlers.onMarketBuySol($tabBuySellStore.floating.amountBuy);
	};

	const onSellClick = () => {
		console.log(
			'onSellClick',
			$tabBuySellStore.floating.amountSell,
			$tabBuySellStore.floating.sellUnittype
		);
		if ($tabBuySellStore.floating.sellUnittype === 'SOL') {
			props.handlers.onMarketSellSol($tabBuySellStore.floating.amountSell);
		}

		if ($tabBuySellStore.floating.sellUnittype === 'percent') {
			props.handlers.onMarketSellPerc($tabBuySellStore.floating.amountSell);
		}
	};

	const onSellInitialsClick = () => {
		console.log('onSellInitialsClick');
	};

	const onAutolimitsClick = (e: Event) => {
		console.log('onAutolimitsClick', autoLimits, e);
	};

	const onShareClick = () => {
		console.log('onShareClick');
	};

	const setBuyAmount = (amount: number) => {
		$tabBuySellStore.floating.amountBuy = amount;
	};

	const setSellAmount = (amount: number) => {
		$tabBuySellStore.floating.amountSell = amount;
	};
	const setSellPercent = (amount: number) => {
		$tabBuySellStore.floating.amountSell = amount;
	};

	onDestroy(unsubscribe);
</script>

<div class="e:flex e:flex-col e:gap-[12px] e:h-full">
	<Section variant="buy" class="e:flex e:flex-col e:gap-y-[10px]">
		<div class="e:flex e:justify-between e:items-center">
			<h4 class="text-18px font-700">
				Quick <span class="text-buy">Buy</span>
			</h4>

			<div class="text-12px e:flex e:gap-x-[8px] e:items-center">
				<span class="e:flex e:items-center"> Buys: {buys} </span>
				<span class="e:flex e:gap-x-[4px] e:items-center">
					{buyQoute}
					<SolanaCircleIcon />
				</span>
			</div>
		</div>
		{#if $contentAppStore.config?.buySell.buyPresetsSol}
			<QuickTradeActions
				type="buy"
				unit="SOL"
				actions={$contentAppStore.config?.buySell.buyPresetsSol}
				onclick={setBuyAmount}
			/>
		{/if}
		<div class="e:w-full e:grid e:grid-cols-4 e:gap-[10px]">
			<Input
				bind:value={$tabBuySellStore.floating.amountBuy}
				variant="buy"
				type="number"
				icon="sol"
				class="e:col-span-3"
				placeholder="Enter SOL amount"
				min={0.001}
				max={100}
				step={0.001}
				onchange={() => {
					console.log('amountBuy', $tabBuySellStore.floating.amountBuy);
				}}
			/>
			<Button clipped variant="buy" class="e:w-full" onclick={onBuyClick}>Buy</Button>
		</div>
	</Section>

	<Section variant="sell" class="e:flex e:flex-col e:gap-y-[10px] e:mb-[24px]">
		<div class="e:flex e:justify-between e:items-center">
			<h4 class="text-18px font-700">
				Quick <span class="text-sell">Sell</span>
			</h4>

			<div class="text-12px e:flex e:gap-x-[8px] e:items-center">
				<span class="e:flex e:items-center">
					{$contentAppStore.tokenStatus?.ticker}
					{tokenBalance}
				</span>
				<span class="e:flex e:gap-x-[4px] e:items-center">
					{tokensInSol}
					<SolanaCircleIcon />
				</span>

				<span class="e:flex e:gap-x-[4px] e:items-center"> {pnlPerc} % </span>

				<button onclick={toggleSellUnit} class="e:cursor-pointer">
					<SellSwitchIcon />
				</button>
			</div>
		</div>

		{#if $contentAppStore.config}
			<QuickTradeActions
				type="sell"
				unit={$tabBuySellStore.floating.sellUnittype}
				actions={$tabBuySellStore.floating.sellUnittype === 'SOL'
					? $contentAppStore.config.buySell.sellPresetsSol
					: $contentAppStore.config.buySell.buyPresetsPerc}
				onclick={(value) => {
					if ($tabBuySellStore.floating.sellUnittype === 'SOL') {
						setSellAmount(value);
					} else {
						setSellPercent(value);
					}
				}}
			/>
		{/if}

		<div class="e:w-full e:grid e:grid-cols-8 e:gap-[10px]">
			<Button
				clipped
				variant="sell"
				class="e:col-span-3 e:w-full e:px-[8px]"
				onclick={onSellInitialsClick}
			>
				Sell initials
			</Button>
			<Input
				bind:value={$tabBuySellStore.floating.amountSell}
				variant="sell"
				type="number"
				icon="sol"
				class="e:col-span-3 e:w-full"
				placeholder="Enter %"
				min={0.001}
				max={100}
				step={0.001}
			/>
			<Button clipped variant="sell" class="e:col-span-2 e:w-full" onclick={onSellClick}>
				Sell
			</Button>
		</div>
	</Section>
</div>
<footer class="e:flex e:justify-between e:gap-[4px]">
	<ToggleButton bind:enabled={autoLimits} onclick={onAutolimitsClick}>
		AutoLimits {autoLimits ? 'Enabled' : 'Disabled'}
	</ToggleButton>

	<Button variant="ghost" class="e:gap-[6px] e:px-[8px]" onclick={onShareClick}>
		<ShareIcon size={14} />
		Share P&L
	</Button>
</footer>
