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

export type ContentManagerHandlers = {
	onMarketSellSol: (amount: number) => void;
	onMarketBuySol: (amount: number) => void;
	onOpenSettings: () => void;
	onMarketSellPerc: (value: number) => void;
	onPlaceBuyLimitOrder: ({
		amountBuy,
		mcPercent
	}: {
		amountBuy: number;
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
		mcPercent
	}: {
		amountBuy: number;
		mcPercent: number;
	}) => {
		if (!contentStore?.tabMint || !contentStore.config) {
			return;
		}
		const order: ApiOrderParsed = {
			mint: contentStore?.tabMint,
			slippageBps: 60,
			tip: String(contentStore.config.limit.buyTip),
			side: Side.BUY,
			targetTypeValueDirection: Direction.ABOVE,

			targetTypeCase: TargetTypeCase.price,
			targetTypeValuePrice: 0.0008,
			amountCase: AmountCase.fixed,

			amountFixed: String(amountBuy * 1e9),
			trigger: Trigger.IMMEDIATE
		};
		console.log(order);
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
