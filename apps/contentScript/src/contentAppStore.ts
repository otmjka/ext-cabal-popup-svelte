import type { CabalConfig } from '@/types/cabalConfig';
import type {
	TokenStatusParsed,
	TradeEventParsed,
	TradeStatsParsed
} from '@/types/cabalSharedTypes';
import { writable } from 'svelte/store';

type ContentAppStore = {
	tabMint: string | undefined;
	mint: string | undefined;
	isReady: boolean;
	url: string;
	shouldSetApiKey: boolean;
	apiKeyError?: string;
	config: CabalConfig | null;
	tokenStatus: null | TokenStatusParsed;
	tradeStats: null | TradeStatsParsed;
	lastTradeEvent: null | TradeEventParsed;
};

const initialState: ContentAppStore = {
	tabMint: undefined,
	mint: undefined,
	isReady: false,
	url: '',
	shouldSetApiKey: false,
	apiKeyError: undefined,
	config: null,
	tokenStatus: null,
	tradeStats: null,
	lastTradeEvent: null
};

export const contentAppStore = writable<ContentAppStore>(initialState);

export function resetContentAppStore() {
	contentAppStore.set(initialState);
}
