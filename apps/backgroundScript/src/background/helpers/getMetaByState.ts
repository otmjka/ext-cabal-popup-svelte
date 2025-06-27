import { CabalMeta } from '@/shared/src/cabalSharedTypes';
import { BackgroundState } from '../types';

export const getMetaByState = (state: BackgroundState): CabalMeta => ({
	mint: state.mint,
	isReady: state.isReady,
	shouldSetApiKey: !state.apiKey,
	config: state.config,
	solPriceUSD: state.solPriceUSD
});
