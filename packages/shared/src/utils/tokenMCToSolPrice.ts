import { parsedNumberSchema } from './parsers';

export const tokenMCToSolPrice = ({
	mc,
	tokenStatusSupply,
	solPriceUSD
}: {
	mc: number;
	tokenStatusSupply: string;
	solPriceUSD: number;
}) => {
	return mc / ((parsedNumberSchema.parse(tokenStatusSupply) / 1e9) * solPriceUSD);
};
