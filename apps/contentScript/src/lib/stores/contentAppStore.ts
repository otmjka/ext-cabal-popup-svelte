import { writable } from 'svelte/store';

import type { CabalConfig } from '@/shared/src/cabalConfig';

import type {
	TokenStatusParsed,
	TradeEventParsed,
	TradeStatsParsed,
	TxMessageData
} from '@/shared/src/cabalSharedTypes';

export type ContentAppStore = {
	tabMint: string | undefined;
	mint: string | undefined;
	isReady: boolean;
	isWidgetReady: boolean;
	focused: boolean;
	url: string;
	shouldSetApiKey: boolean;
	apiKeyError?: string;
	config: CabalConfig | null;
	solPriceUSD: null | number;
	tokenStatus: null | TokenStatusParsed;
	tradeStats: null | TradeStatsParsed;
	lastTradeEvent: null | TradeEventParsed;
	txLog: Array<TxMessageData>;
};

const initialState: ContentAppStore = {
	tabMint: undefined,
	mint: undefined,
	isReady: false,
	isWidgetReady: false,
	focused: true,
	url: '',
	shouldSetApiKey: false,
	apiKeyError: undefined,
	config: null,
	solPriceUSD: null,
	tokenStatus: null,
	tradeStats: null,
	lastTradeEvent: null,
	txLog: []
};

const { subscribe, set, update: internalUpdate } = writable<ContentAppStore>(initialState);

const update = (updater: (state: ContentAppStore) => ContentAppStore) => {
	internalUpdate((state) => {
		const next = updater(state);

		const shouldBeReady =
			next.isReady && next.tokenStatus !== null && next.tradeStats !== null && next.config !== null;

		return {
			...next,
			isWidgetReady: shouldBeReady
		};
	});
};

const resetContentAppStore = () => {
	set(initialState);
};

export const contentAppStore = {
	subscribe,
	set,
	update,
	reset: resetContentAppStore
};
