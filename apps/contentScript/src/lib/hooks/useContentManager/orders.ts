import type { ContentAppStore } from '@/stores/contentAppStore';
import { inputToSolPrice } from '@/shared/src/utils/parsers';
import { createBuyLimitOrder, createSellLimitOrder } from '@/shared/src/utils/orders';
import type { ApiOrderParsed } from '@/cabal-clinet-sdk/CabalServiceTypes';

export const createBuyLimitOrderData = ({
	amount,
	contentStore,
	target
}: {
	target: string;
	amount: number;
	contentStore?: ContentAppStore;
}): ApiOrderParsed => {
	if (
		!contentStore?.tabMint ||
		!contentStore.config ||
		!contentStore.tokenStatus ||
		!contentStore.solPriceUSD
	) {
		throw new Error('no data to create order');
	}

	const { result: targetTypeValuePrice, error } = inputToSolPrice({
		input: target,
		tokenStatusSupply: contentStore.tokenStatus.supply,
		solPriceUSD: contentStore.solPriceUSD
	});

	if (error || !targetTypeValuePrice) {
		throw new Error('bad target');
	}

	const order = createBuyLimitOrder({
		mint: contentStore?.tabMint,
		config: contentStore.config,
		targetPrice: targetTypeValuePrice,
		amount
	});

	console.log(`[!!! LIMIT !!!]`, amount, target, targetTypeValuePrice, order);
	return order;
};

export const createSellLimitOrderData = ({
	amount,
	contentStore,
	target
}: {
	target: string;
	amount: number;
	contentStore?: ContentAppStore;
}): ApiOrderParsed => {
	if (
		!contentStore?.tabMint ||
		!contentStore.config ||
		!contentStore.tokenStatus ||
		!contentStore.solPriceUSD
	) {
		throw new Error('no data to create order');
	}

	const { result: targetTypeValuePrice, error } = inputToSolPrice({
		input: target,
		tokenStatusSupply: contentStore.tokenStatus.supply,
		solPriceUSD: contentStore.solPriceUSD
	});

	if (error || !targetTypeValuePrice) {
		throw new Error('bad target');
	}

	const order = createSellLimitOrder({
		mint: contentStore?.tabMint,
		config: contentStore.config,
		targetPrice: targetTypeValuePrice,
		amount
	});

	console.log(`[!!! LIMIT SELL !!!]`, amount, target, targetTypeValuePrice, order);
	return order;
};
