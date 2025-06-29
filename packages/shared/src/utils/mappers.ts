import { ApiOrderParsed } from '../../../cabal-clinet-sdk/CabalServiceTypes';
import { getLimitPriceFormatted, TargetFormatType } from './formatters';

export const mapApiOrderParsedToRecord =
	({
		formatType,
		tokenStatusSupply,
		solPriceUSD,
		ticker
	}: {
		formatType: TargetFormatType;
		tokenStatusSupply?: string | null;
		solPriceUSD?: number | null;
		ticker?: string;
	}) =>
	(order: ApiOrderParsed) => {
		let mc = getLimitPriceFormatted({
			formatType,
			solPrice: order.targetTypeValuePrice,
			tokenStatusSupply,
			solPriceUSD
		});

		const item: TLimitRecord = {
			id: order.id as string,
			ticker: ticker as string,
			limitType: 'limitType',
			type: 'type',
			mc
		};
		return item;
	};
