import { writable } from 'svelte/store';
import type { TNavItem } from '@/types/app';

export const segments: TNavItem[] = [
	{
		label: 'Recent',
		key: 'recent'
	},
	{
		label: 'Worth',
		key: 'worth'
	}
];

export const tabsFloating: TNavItem[] = [
	{
		key: 'trade',
		label: 'Buy/Sell'
	},
	{
		key: 'migration',
		label: 'Migration'
	},
	{
		key: 'limits',
		label: 'Limits'
	}
];

export const tradeTypes: TNavItem[] = [
	{
		label: 'Market',
		key: 'market'
	},
	{
		label: 'Limit',
		key: 'limit'
	},
	{
		label: 'Trailing',
		key: 'trailing'
	}
];

export const tabs: TNavItem[] = [
	{
		key: 'buy',
		label: 'Buy'
	},
	{
		key: 'sell',
		label: 'Sell'
	}
];

type TabBuySellStore = {
	main: {
		amountBuy: number | undefined;
		amountSell: number | undefined;
		limitAmount: number | undefined;
		mcPercent: number;
		tradeType: TNavItem;

		activeTab: TNavItem;
		targetPrice: number | undefined;
	};
	floating: {
		sellUnittype: 'SOL' | 'percent';
		amountBuy: number | undefined;
		amountSell: number | undefined;
		activeTab: TNavItem;
		segment: TNavItem;
	};
};

const DEFAULT_STATE = {
	main: {
		amountBuy: undefined,
		amountSell: undefined,
		limitAmount: undefined,
		mcPercent: 0,
		tradeType: tradeTypes[0],

		activeTab: tabs[0],

		targetPrice: undefined
	},
	floating: {
		sellUnittype: 'percent' as const,
		amountBuy: undefined,
		amountSell: undefined,

		activeTab: tabsFloating[0],
		segment: segments[0]
	}
};

const { subscribe, set, update } = writable<TabBuySellStore>(DEFAULT_STATE);
const clear = () => set({ ...DEFAULT_STATE });

const tabBuySellStore = {
	subscribe,
	set,
	update,
	clear
};

export default tabBuySellStore;
