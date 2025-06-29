import { AmountCase, ApiOrderParsed, TargetTypeCase } from '../CabalServiceTypes';
import { toLamports } from '../../../apps/backgroundScript/src/shared/helpers/toLamports';

export const createLimitOrderParams = ({
	mint,
	items
}: {
	mint: string;
	items: ApiOrderParsed[];
}) => {
	const orders = items.map(createOrderItem);
	return { mint, orders };
};

const createOrderItem = (item: ApiOrderParsed) => {
	let target;
	if (item.targetTypeCase === TargetTypeCase.price && item.targetTypeValuePrice) {
		target = {
			targetType: {
				case: 'price' as 'price',
				value: {
					price: item.targetTypeValuePrice, // priceOneTokenInSol,
					direction: item.targetTypeValueDirection
				}
			}
		};
	}

	if (item.targetTypeCase === TargetTypeCase.profit && item.targetTypeValueProfitPerc) {
		target = {
			targetType: {
				case: 'profit' as 'profit',
				value: {
					profitPerc: item.targetTypeValueProfitPerc / 100,
					direction: item.targetTypeValueDirection
				}
			}
		};
	}

	if (item.targetTypeCase === TargetTypeCase.movingPerc && item.targetTypeValuePricePerc) {
		target = {
			targetType: {
				case: 'movingPerc' as 'movingPerc',
				value: {
					pricePerc: item.targetTypeValuePricePerc / 100,
					direction: item.targetTypeValueDirection
				}
			}
		};
	}

	let amount;
	if (item.amountCase === AmountCase.percBps && item.amountPercBps) {
		amount = {
			amountType: {
				case: item.amountCase,
				value: item.amountPercBps // 500, // 10%
				// case: 'fixed'
				// value: 1_000_000_000n, // 1 POPCAT, 9 decimals
			}
		};
	}

	if (item.amountCase === AmountCase.fixed && item.amountFixed) {
		amount = {
			amountType: {
				case: item.amountCase,
				value: BigInt(item.amountFixed) // 0.0017 * 1e9
				// case: 'fixed'
				// value: 1_000_000_000n, // 1 POPCAT, 9 decimals
			}
		};
	}
	// limitOrdersParams = {
	// 	mint: item.mint, // 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr
	// 	orders: [
	const orderItem = {
		id: item.id ? BigInt(item.id) : undefined,
		slippageBps: item.slippageBps, // 20
		tip: toLamports(Number(item.tip)), // 0.001 * 1_000_000_000
		priorityFee: toLamports(Number(item.priorityFee)), // 0.00001 * 1e9
		target: target,

		side: item.side,
		amount,
		trigger: item.trigger
	};
	// ]
	// };
	return orderItem;
};
