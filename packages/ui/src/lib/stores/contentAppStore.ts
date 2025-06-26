import type { TxMessageData } from '@/shared/src/cabalSharedTypes';
import type { CabalConfig } from '@/types/cabalConfig';
import type {
	TokenStatusParsed,
	TradeEventParsed,
	TradeStatsParsed
} from '@/types/cabalSharedTypes';
import { writable } from 'svelte/store';

export type ContentAppStore = {
	tabMint: string | undefined;
	mint: string | undefined;
	isReady: boolean;
	isWidgetReady: boolean;
	url: string;
	shouldSetApiKey: boolean;
	apiKeyError?: string;
	config: CabalConfig | null;
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
	url: '',
	shouldSetApiKey: false,
	apiKeyError: undefined,
	config: null,
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
