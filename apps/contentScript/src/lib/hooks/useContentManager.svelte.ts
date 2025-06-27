import type { Mint } from '@/shared/src/cabalSharedTypes';
import { onMount } from 'svelte';
import { useCabalService } from './useCabalService';
import { contentAppStore, type ContentAppStore } from '../stores/contentAppStore';
import { getAmountBpsBySol } from '@/untils/token';
import {
	AmountCase,
	TargetTypeCase,
	type ApiOrderParsed
} from '@/cabal-clinet-sdk/CabalServiceTypes';
import { Direction, Side, Trigger } from '@/cabal-clinet-sdk/index';
import { parsedNumberSchema } from '@/untils/parsers';

export type ContentManagerHandlers = {
	onMarketSellSol: (amount: number) => void;
	onMarketBuySol: (amount: number) => void;
	onOpenSettings: () => void;
	onMarketSellPerc: (value: number) => void;
	onPlaceBuyLimitOrder: (params: {
		amountBuy: number;
		limitBuy: number;
		mcPercent: number;
	}) => void;
};

export const useContentManager = ({
	mint
}: {
	mint: Mint;
}): { handlers: ContentManagerHandlers } => {
	const {
		registerTab,
		startListen,
		subscribeToken,
		marketBuy,
		marketSell,
		getTokenLimitOrders,
		placeLimitOrder
	} = useCabalService();

	let contentStore: ContentAppStore | undefined;
	const unsubscribe = contentAppStore.subscribe((store) => {
		contentStore = store;
	});

	$effect(() => {
		const unsubscribe = contentAppStore.subscribe(async (state) => {
			if (!state.isWidgetReady || !state.focused || !state.tabMint) {
				return;
			}
			// Выполняем действие, когда isWidgetReady становится true
			console.log('[content][get limits] Widget is ready! Performing action...', state);
			// Здесь можно добавить вашу логику, например:
			// - Запрос данных
			// - Инициализация компонента
			// - Отображение UI
			const result = await getTokenLimitOrders({ mint: state.tabMint });
			console.log(`[content][get limits]`, result);
		});

		// Очистка подписки при уничтожении эффекта
		return () => unsubscribe();
	});

	onMount(() => {
		console.log('[onMount]', mint, location.href);
		contentAppStore.update((store) => ({ ...store, tabMint: mint }));
		startListen();
		registerTab({ mint: mint, locationHref: location.href });

		const handleFocus = async () => {
			try {
				console.log('[content] focus');

				contentAppStore.update((store) => ({
					...store,
					tokenStatus: null,
					tradeStats: null,
					lastTradeEvent: null,
					isReady: false,
					focused: true
				}));

				const result = await subscribeToken({ mint });
				console.log('[content][subscribeToken] result', result);
			} catch (error) {
				console.error('[content][subscribeToken] error', error);
			}
		};

		const handleBlur = () => {
			console.log('[content] blur');
			contentAppStore.update((store) => ({
				...store,
				focused: false
			}));
		};

		window.addEventListener('focus', handleFocus);
		window.addEventListener('blur', handleBlur);
		return () => {
			console.log('[cleanup]');
			window.removeEventListener('focus', handleFocus);
			window.removeEventListener('blur', handleBlur);
			unsubscribe();
		};
	});

	const handleOpenSettings = () => window.open(chrome.runtime.getURL('home.html'), '_blank');

	const handleMarketBuySol = (value: number) => {
		const tabMint = contentStore?.tabMint;

		console.log('[handleMarketBuySol]', value, tabMint);
		if (!value || !tabMint) {
			return;
		}
		marketBuy({ mint: tabMint, amountSol: value });
	};

	const handleMarketSellPerc = (value: number) => {
		const tabMint = contentStore?.tabMint;

		console.log('[handleMarketSellPerc]', value, tabMint);
		if (!value || !tabMint) {
			return;
		}
		const amountBps = value * 100;
		marketSell({ mint: tabMint, amountBps });
	};

	const handleMarketSellSol = (value: number) => {
		if (!contentStore) {
			return;
		}
		const tabMint = contentStore?.tabMint;
		const tokenStatus = contentStore.tokenStatus;
		const tradeStats = contentStore.tradeStats;

		console.log('[handleMarketSellSol]', value, tabMint);
		if (!value || !tabMint || !tokenStatus || !tradeStats) {
			return;
		}

		// tokenBalance * tokenProceInSol = 0.011
		// 0.0005 => 5%
		// 0.0005 / (0.011 / 100)

		const amountBps = Math.round(
			getAmountBpsBySol({ requiredSol: value, tokenStatus, tradeStats })
		);
		console.log('[handleMarketSellSol][amountBps]', amountBps);
		marketSell({ mint: tabMint, amountBps });
	};

	const handlePlaceBuyLimitOrder = async ({
		amountBuy,
		limitBuy,
		mcPercent
	}: {
		amountBuy: number;
		limitBuy: number;
		mcPercent: number;
	}) => {
		if (
			!contentStore?.tabMint ||
			!contentStore.config ||
			!contentStore.tokenStatus ||
			!contentStore.solPriceUSD
		) {
			return;
		}
		console.log(
			`[content][handlePlaceBuyLimitOrder] 1 ${contentStore.tokenStatus.ticker}: ${contentStore.tokenInSol}`
		);
		const targetTypeValuePrice =
			limitBuy /
			((parsedNumberSchema.parse(contentStore.tokenStatus.supply) / 1e9) *
				contentStore.solPriceUSD);
		console.log(`[content][handlePlaceBuyLimitOrder] target price: ${targetTypeValuePrice}`);
		const order: ApiOrderParsed = {
			mint: contentStore?.tabMint,
			slippageBps: contentStore.config.limit.buySlippage,
			tip: String(contentStore.config.limit.buyTip),
			priorityFee: String(contentStore.config.limit.buyPriorityFee),
			side: Side.BUY,
			targetTypeValueDirection: Direction.BELOW,

			targetTypeCase: TargetTypeCase.price,
			targetTypeValuePrice,
			amountCase: AmountCase.fixed,

			amountFixed: String(amountBuy * 1e9),
			trigger: Trigger.IMMEDIATE
		};
		console.log(`[!!! LIMIT !!!] params`, amountBuy, mcPercent, limitBuy);
		console.log(`[!!! LIMIT !!!]`, order);
		/*
		{
    "mint": "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
    "slippageBps": 25,
    "tip": "0.001",
    "side": 0,
    "targetTypeValueDirection": 1,
    "targetTypeCase": "price",
    "targetTypeValuePrice": 0.0009271956721945024,
    "amountCase": "fixed",
    "amountFixed": "2000000",
    "trigger": 0
}
		*/
		placeLimitOrder(order);
	};

	return {
		handlers: {
			onMarketSellSol: handleMarketSellSol,
			onMarketSellPerc: handleMarketSellPerc,
			onMarketBuySol: handleMarketBuySol,
			onOpenSettings: handleOpenSettings,
			onPlaceBuyLimitOrder: handlePlaceBuyLimitOrder
		}
	};
};
