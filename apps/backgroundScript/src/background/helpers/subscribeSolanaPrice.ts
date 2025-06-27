import { BackgroundState } from '../types';

type FetchSolanaPriceResult = {
	solana: {
		usd: number;
	};
};

export const subscribeSolanaPrice = async ({
	state,
	cb
}: {
	state: BackgroundState;
	cb: (params: { result?: FetchSolanaPriceResult; error?: unknown }) => void;
}) => {
	try {
		if (!state.solSubscribeOn) {
			throw new Error('[bg][state.solSubscribeOn] off');
		}
		const result = await fetchSolanaPrice();
		console.log(`[bg][SOL]`, result);
		cb(result);
	} catch (error) {
		console.error(`[bg][subscribeSolanaPrice]`, error, state.solSubscribeOn);
		cb({ error });
	} finally {
		setTimeout(() => subscribeSolanaPrice({ state, cb }), 60_000);
	}
};

const fetchSolanaPrice = () =>
	new Promise<{ result?: FetchSolanaPriceResult; error?: unknown }>((resolve, reject) => {
		fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
			.then((response) => response.json())
			.then((data) => resolve({ result: data }))
			.catch((error) => reject({ error }));
	});
