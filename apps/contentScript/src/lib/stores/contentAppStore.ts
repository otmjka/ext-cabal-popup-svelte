import { writable } from 'svelte/store';

import type { CabalConfig } from '@/shared/src/cabalConfig';

import type {
	TokenStatusParsed,
	TradeEventParsed,
	TradeStatsParsed,
	TxMessageData
} from '@/shared/src/cabalSharedTypes';
import { oneTokenPriceInSol } from '@/untils/token';
import { parsedNumberSchema } from '@/untils/parsers';

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
	tokenInSol: number;
	mc: number;
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
	tokenInSol: 0,
	mc: 0,
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

		let tokenInSol = 0;

		if (next.tokenStatus && shouldBeReady) {
			tokenInSol = oneTokenPriceInSol({
				baseLiq: next.tokenStatus.baseLiq,
				quoteLiq: next.tokenStatus.quoteLiq
			});
		}

		let mc = 0;
		if (next.solPriceUSD && next.tokenStatus && shouldBeReady) {
			const tokenInUsd = tokenInSol * next.solPriceUSD;
			const suppyAmount = parsedNumberSchema.parse(next.tokenStatus.supply) / 1e9;
			mc = Math.round(tokenInUsd * suppyAmount);
			console.log('[MC]', mc, tokenInSol);
		}

		return {
			...next,
			isWidgetReady: shouldBeReady,
			tokenInSol,
			mc
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
