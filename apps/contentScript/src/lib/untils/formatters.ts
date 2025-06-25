import { z } from 'zod';
import type { StrBigInt, TokenStatusParsed, TradeStatsParsed } from '@/types/cabalSharedTypes';

export const formatLamports = ({
	solBalance,
	tokenDecimals,
	toFixed
}: {
	solBalance: string;
	tokenDecimals: number;
	toFixed: number;
}) => Number(Number(solBalance) / Math.pow(10, tokenDecimals)).toFixed(toFixed);

const bigintStringSchema = z.string().refine(
	(val) => {
		try {
			BigInt(val); // Пытаемся преобразовать в BigInt
			return true;
		} catch {
			return false;
		}
	},
	{
		message: 'Строка должна быть валидным bigint числом'
	}
);
const parsedNumberSchema = bigintStringSchema.transform((val) => Number(val));

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

// 1 token price in SOL
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

export const formatTradeData = ({
	tradeStats,
	tokenStatus
}: {
	tradeStats: TradeStatsParsed;
	tokenStatus: TokenStatusParsed;
}) => {
	const tokenDecimals = tradeStats.tokenDecimals;
	if (!tradeStats.tokenDecimals) {
		return {
			buys: '-',
			buyQoute: '-',
			sellQoute: '-',
			tokenBalance: '-',
			tokensInSol: '-'
		};
	}
	const buyQoute = formatLamports({
		solBalance: tradeStats.buyQoute || '0',
		tokenDecimals,
		toFixed: 3
	});

	const sellQoute =
		formatLamports({
			solBalance: tradeStats.sellQoute || '0',
			tokenDecimals,
			toFixed: 3
		}) || '-';

	const tokenBalanceFormatted = formatLamports({
		solBalance: tradeStats.tokenBalance || '0',
		tokenDecimals,
		toFixed: 3
	});

	const oneInSol = oneTokenPriceInSol({
		baseLiq: tokenStatus.baseLiq,
		quoteLiq: tokenStatus.quoteLiq
	});

	const tokensInSol = (
		(oneInSol * parsedNumberSchema.parse(tradeStats.tokenBalance)) /
		Math.pow(10, 9)
	).toFixed(3);

	return {
		buys: String(tradeStats.buys ?? '0'),
		buyQoute,
		sellQoute,
		tokenBalance: tokenBalanceFormatted,
		tokensInSol: tokensInSol
	};
};

export const calculatePnL = ({
	tokenStatus,
	tradeStats
}: {
	tokenStatus: TokenStatusParsed;
	tradeStats: TradeStatsParsed;
}): { absolutePnL: number; percentagePnL: number } => {
	const { tokenDecimals } = tradeStats;
	const solDec = 1e9; // balance SOL (1 SOL = 10^9 lamports)
	const tokDec = Math.pow(10, Number(tokenDecimals)); // balance SOL (1 SOL = 10^9 lamports)

	const baseTokenBalance = parsedNumberSchema.parse(tradeStats.tokenBalance) / tokDec; // 3.1 POPCAT

	const solBalance = parsedNumberSchema.parse(tradeStats.solBalance) / solDec; // 0.06
	const buyBase = parsedNumberSchema.parse(tradeStats.buyBase) / tokDec; // bought tokens
	const buyQuote = parsedNumberSchema.parse(tradeStats.buyQoute) / solDec; // Потраченные SOL

	// bought price
	const buyPricePerToken = buyQuote / buyBase;

	// current price based liq pool
	const baseLiqTokens = parsedNumberSchema.parse(tokenStatus.baseLiq) / tokDec;
	const quoteLiqSol = parsedNumberSchema.parse(tokenStatus.quoteLiq) / solDec;
	const currentPricePerToken = quoteLiqSol / baseLiqTokens;

	// Текущая стоимость купленных токенов
	const currentValueOfBoughtTokens = buyBase * currentPricePerToken;

	// Абсолютный PnL для сделки (в SOL)
	const absolutePnL = currentValueOfBoughtTokens - buyQuote;

	// Процентный PnL для сделки
	const percentagePnL = (absolutePnL / buyQuote) * 100;

	// Общий портфель: текущая стоимость токенов + SOL
	const totalPortfolioValue = baseTokenBalance * currentPricePerToken + solBalance;

	// Начальная стоимость (предполагаем, что начальный баланс SOL = текущий + потраченные)
	const initialPortfolioValue = solBalance + buyQuote;

	// Общий абсолютный и процентный PnL для портфеля
	const totalAbsolutePnL = totalPortfolioValue - initialPortfolioValue;
	const totalPercentagePnL = (totalAbsolutePnL / initialPortfolioValue) * 100;

	return {
		absolutePnL: totalAbsolutePnL,
		percentagePnL: totalPercentagePnL
	};
};

export const getPnLLabel = ({
	tokenStatus,
	tradeStats
}: {
	tokenStatus: TokenStatusParsed;
	tradeStats: TradeStatsParsed;
}) => {
	const pnl = calculatePnL({
		tokenStatus,
		tradeStats
	});
	const prefix = `${pnl.absolutePnL > 0 ? '+' : ''}`;
	const apnl = Number(pnl.absolutePnL).toFixed(1);
	const ppnl = Number(pnl.percentagePnL).toFixed(1);

	return `${prefix}${apnl} (${prefix}${ppnl}%)`;
};
export const getSolBalance = ({ tradeStats }: { tradeStats: TradeStatsParsed }) => {
	return (parsedNumberSchema.parse(tradeStats.solBalance) / 1e9).toFixed(3);
};
