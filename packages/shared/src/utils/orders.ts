import { Direction, Side, Trigger } from '../../../cabal-clinet-sdk';
import {
	AmountCase,
	ApiOrderParsed,
	TargetTypeCase
} from '../../../cabal-clinet-sdk/CabalServiceTypes';

import { CabalConfig } from '../cabalConfig';

export const createBuyLimitOrder = ({
	mint,
	config,
	targetPrice,
	amount
}: {
	mint: string;
	config: CabalConfig;
	targetPrice: number;
	amount: number;
}): ApiOrderParsed => {
	const order: ApiOrderParsed = {
		mint,
		slippageBps: config.limit.buySlippage,
		tip: String(config.limit.buyTip),
		priorityFee: String(config.limit.buyPriorityFee),
		side: Side.BUY,
		targetTypeValueDirection: Direction.BELOW,

		targetTypeCase: TargetTypeCase.price,
		targetTypeValuePrice: targetPrice,
		amountCase: AmountCase.fixed,

		amountFixed: String(amount * 1e9),
		trigger: Trigger.IMMEDIATE
	};
	return order;
};

export const createSellLimitOrder = ({
	mint,
	config,
	targetPrice,
	amount
}: {
	mint: string;
	config: CabalConfig;
	targetPrice: number;
	amount: number;
}): ApiOrderParsed => {
	const order: ApiOrderParsed = {
		mint,
		slippageBps: config.limit.sellSlippage,
		tip: String(config.limit.sellTip),
		priorityFee: String(config.limit.sellPriorityFee),
		side: Side.SELL,
		targetTypeValueDirection: Direction.BELOW,
		trigger: Trigger.IMMEDIATE,

		targetTypeCase: TargetTypeCase.price,
		targetTypeValuePrice: targetPrice,

		amountCase: AmountCase.percBps,
		amountPercBps: amount * 100
	};
	return order;
};
