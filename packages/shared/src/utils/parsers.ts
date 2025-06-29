import { z } from 'zod';
import { tokenMCToSolPrice } from './tokenMCToSolPrice';

export enum PriceInputType {
	mc = 'mc',
	usd = 'usd',
	sol = 'sol'
}

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
		message: 'string must be a valid bigint number'
	}
);
export const parsedNumberSchema = bigintStringSchema.transform((val) => Number(val));

export const priceParser = z.string().transform((input) => {
	if (/^\d+M$/i.test(input)) {
		// "562M"
		return {
			value: parseInt(input) * 1_000_000,
			type: PriceInputType.mc
		};
	} else if (/^\d+$/.test(input)) {
		// "562698662"
		return {
			value: parseInt(input),
			type: PriceInputType.mc
		};
	} else if (/^\$\d+(\.\d+)?$/.test(input)) {
		// "$0.023"
		return {
			value: parseFloat(input.slice(1)),
			type: PriceInputType.usd
		};
	} else if (/^S\d+(\.\d+)?$/i.test(input)) {
		// "S0.01"
		return {
			value: parseFloat(input.slice(1)),
			type: PriceInputType.sol
		};
	} else {
		throw new Error('Invalid input format');
	}
});

export const inputToSolPrice = ({
	input,
	tokenStatusSupply,
	solPriceUSD
}: {
	input?: string;
	tokenStatusSupply?: string;
	solPriceUSD?: number;
}): { result?: number; error?: string } => {
	try {
		if (!input || !tokenStatusSupply || !solPriceUSD) {
			throw new Error('wrong inputs');
		}
		let targetTypeValuePrice;
		const { value, type } = priceParser.parse(input);

		switch (type) {
			case PriceInputType.mc:
				const mc = value; // 280_000_000
				targetTypeValuePrice = tokenMCToSolPrice({
					mc,
					tokenStatusSupply,
					solPriceUSD: solPriceUSD
				});
				break;
			case PriceInputType.usd:
				// 1token = $0.2861 1sol = 146.74$
				targetTypeValuePrice = value / solPriceUSD; // 0.00194970696
				break;
			case PriceInputType.sol:
				targetTypeValuePrice = value; // 0.002
		}

		return { result: targetTypeValuePrice };
	} catch (error) {
		return { error: (error as Error).message };
	}
};
