// 1 token price in SOL

import type { StrBigInt, TokenStatusParsed, TradeStatsParsed } from '@/types/cabalSharedTypes';
import { parsedNumberSchema } from './parsers';

// quoteLiq / baseLiq = 33,062,018,174,929 / 16,139,087,229,039,483 ≈ 0.002048 SOL
export const oneTokenPriceInSol = ({
	quoteLiq,
	baseLiq
}: {
	quoteLiq: StrBigInt;
	baseLiq: StrBigInt;
}) => {
	const qLiq = parsedNumberSchema.parse(quoteLiq);
	const bLiq = parsedNumberSchema.parse(baseLiq);

	return qLiq / bLiq;
};

// {
//     "mint": "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
//     "tokenBalance": "3147214129", -> 3_147_214_129 -> 3.1 POPCAT
//     "buyQoute": "2574000",
//     "sellQoute": "0",
//     "buyBase": "1251567968",
//     "sellBase": "0",
//     "buys": 1,
//     "sells": 0,
//     "solBalance": "67775063",  67_775_063 -> 0.067 Sol
//     "lastTradedSlot": "348920828",
//     "tokenDecimals": 9,
//     "qouteKind": 0
// }

// "buyQoute": "2_574_000", -> "0.002" SOL
// "buyBase": "1_251_567_968", -> "1.251" POPCAT

// {
//     "mint": "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
//     "poolId": "FRhB8L7Y9Qq41qZXYLtC2nw8An1RJfLLxRF2x9RwLLMo",
//     "poolKind": 1,
//     "migrationStatus": 3,
//     "supply": "979939577005946212",
//     "baseLiq": "16139087229039483",
//     "quoteLiq": "33062018174929",
//     "qouteKind": 0,
//     "ticker": "POPCAT"
// }

// supply 979939577_005_946_212

// baseLiq (POPCAT) 16139087_229_039_483
// quoteLiq (SOL) 33,062_018,174,929

export const getAmountBpsBySol = ({
	requiredSol,
	tokenStatus,
	tradeStats
}: {
	requiredSol: number;
	tokenStatus: TokenStatusParsed;
	tradeStats: TradeStatsParsed;
}) => {
	const oneTokenPrice = oneTokenPriceInSol({
		baseLiq: tokenStatus.baseLiq,
		quoteLiq: tokenStatus.quoteLiq
	}); // 0.0021
	const tokenBalance = parsedNumberSchema.parse(tradeStats.tokenBalance);
	const tokenDiv = Math.pow(10, tradeStats.tokenDecimals);
	const tokenAmount = tokenBalance / tokenDiv; // 3.1 * 1e9 => 3.1 POPCAT
	const totalSolPriceTokenBalance = oneTokenPrice * tokenAmount; // 3.1 * 0.002 = 0.0062
	const onePercent = totalSolPriceTokenBalance / 100;
	const requiredPerc = requiredSol / onePercent;
	const requiredBps = requiredPerc * 100;
	return requiredBps;
};
