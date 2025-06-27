import { EventEmitter } from 'events';
import { createGRPCCabalClient } from './cabal';
import { UserResponse, TradeEventResponse } from './cabal/CabalRpc/cabal_pb';

import CabalStream, { CabalStreamEvents } from './CabalStream';
import {
	CabalStreamEventsHandler,
	streamNames,
	CabalTradeStreamMessages,
	SubscribeTokenReturn,
	ApiOrderParsed,
	AmountCase,
	TargetTypeCase
} from './CabalServiceTypes';

import { CabalUserActivityStreamMessages, ApiOrder, PlaceLimitOrdersResponse } from '.';
import { defaultState } from './cabalEnums';
import { toLamports } from '../../apps/backgroundScript/src/shared/helpers/toLamports';
import { parseApiOrder } from './utils/parseApiOrder';

class CabalService extends EventEmitter {
	client: ReturnType<typeof createGRPCCabalClient>;
	userActivityStream: CabalStream<UserResponse> | undefined;
	tradesStream: CabalStream<TradeEventResponse> | undefined;
	ready: boolean;
	uaDebugMode = false;
	tradesDebugMode = false;

	constructor({ apiKey, apiUrl }: { apiKey: string; apiUrl: string }) {
		super();
		this.client = createGRPCCabalClient({
			apiKey,
			apiUrl
		});
		this.ready = false;
	}

	createUAStream() {
		this.handleUserActivityMessage = this.handleUserActivityMessage.bind(this);
		this.userActivityStream = new CabalStream<UserResponse>({
			nameStream: streamNames.UA,

			clientConnectToStream: () => this.client.userActivityUni({}),
			clientIsPong: (response: UserResponse) => response.userResponseKind.case === 'pong',

			streamPinger: ({ count }: { count: bigint }) => this.client.userPing({ count }),
			onMessage: this.handleUserActivityMessage,

			debug: this.uaDebugMode
		});

		return this.userActivityStream;
	}

	destroyUAStrem() {
		this.ready = false;
		this.userActivityStream?.destroy();
		this.userActivityStream = undefined;
	}

	createTradeStream() {
		this.handleTradeMessage = this.handleTradeMessage.bind(this);

		this.tradesStream = new CabalStream<TradeEventResponse>({
			nameStream: streamNames.TRADE,

			clientConnectToStream: () => this.client.tradesUni({}),
			clientIsPong: (response: TradeEventResponse) =>
				response.tradeEventResponseKind.case === 'pong',

			streamPinger: ({ count }: { count: bigint }) => this.client.tradePing({ count }),

			onMessage: this.handleTradeMessage,

			debug: this.tradesDebugMode
		});
	}

	destroyTStrem() {
		this.ready = false;
		this.tradesStream?.destroy();
		this.tradesStream = undefined;
	}

	async start() {
		try {
			this.ready = true;
			this.createUAStream();
			await this.userActivityStream?.start();
			this.handleUserActivityMessage(CabalStreamEvents.connected);
			this.createTradeStream();
			await this.tradesStream?.start();
		} catch (error) {
			this.ready = false;
			console.log('Cabal Service Error');
			this.stop();
		}
	}

	stop() {
		this.destroyUAStrem();
		this.destroyTStrem();
	}

	// TODO: https://stackoverflow.com/questions/71200948/how-can-i-validate-a-solana-wallet-address-with-web3js
	// CabalRpc -> SubscribeToken(TokenTradeEventSub) returns (TradeResponse) {}
	async subscribeToken(mint: string): SubscribeTokenReturn {
		try {
			const result = await this.client.subscribeToken({
				mint
			});
			console.log(`[CS][subscribeToken][${mint}] result:`, result);
			return { result };
		} catch (error) {
			console.error(`[subscribeToken][${mint}]`, error);
			return { error: error as Error };
		}
	}
	// CabalRpc -> PlaceLimitOrders
	async placeLimitOrders(item: ApiOrderParsed) {
		debugger;
		try {
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

			const result = await this.client.placeLimitOrders({
				mint: item.mint, // 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr
				orders: [
					{
						id: item.id ? BigInt(item.id) : undefined,
						slippageBps: item.slippageBps, // 20
						tip: toLamports(Number(item.tip)), // 0.001 * 1_000_000_000
						target: target,

						side: item.side,
						amount,
						trigger: item.trigger
					}
				]
			});

			console.log('sell result::::', result);
			return result;
		} catch (error) {
			console.error('error token sell', error);
		}
	}

	// CabalRpc -> MarketSell
	async marketSell({
		mint,
		amountBps,
		slippageBps,
		priorityFee,
		tip
	}: {
		mint: string;
		amountBps: number;
		slippageBps: number;
		priorityFee?: number;
		tip: number;
	}) {
		try {
			if (amountBps > 10000 || amountBps <= 0) {
				throw new Error('should be in range of [0;10000]');
			}
			const sellParams = {
				amountBps,
				mint,
				slippageBps: slippageBps || defaultState.sell_slippage,
				tip: tip ? toLamports(tip) : toLamports(defaultState.sell_tip),
				priorityFee: priorityFee ? toLamports(defaultState.sell_priority_fee) : undefined
			};
			console.log('### sell params', sellParams);
			const result = await this.client.marketSell(sellParams);

			console.log('sell result::::', result);
			return result;
		} catch (error) {
			console.error('error token sell', error);
		}
	}

	// CabalRpc -> MarketBuy
	async marketBuy({
		amount,
		mint,
		slippageBps,
		priorityFee,
		tip
	}: {
		amount: number; // [0.5, 1, 2, 5 ]
		mint: string;
		slippageBps: number;
		priorityFee: number;
		tip: number;
	}) {
		try {
			const buyParams = {
				amount: toLamports(amount),
				mint,
				slippageBps: slippageBps || defaultState.buy_slippage,
				tip: tip ? toLamports(tip) : toLamports(defaultState.buy_tip),
				priorityFee: priorityFee ? toLamports(defaultState.buy_priority_fee) : undefined
			};
			console.log('### buy params', buyParams);
			const result = await this.client.marketBuy(buyParams);

			console.log('buy', result);
			return result;
		} catch (error) {
			console.error('token buy', error);
		}
	}
	// CabalRpc -> GetTokenLimitOrders

	async getTokenLimitOrders({
		mint
	}: {
		mint: string;
	}): Promise<{ result?: ApiOrderParsed[]; error?: Error }> {
		try {
			const result = await this.client.getTokenLimitOrders({ mint });

			const resultMint = result?.mint;
			const resultOrders = result?.orders.map((order: ApiOrder) => {
				return parseApiOrder({ apiOrder: order, mint: resultMint });
			});
			return { result: resultOrders };
		} catch (error) {
			console.error(`getTokenLimitOrders`, error);
			return { error: error as Error };
		}
	}

	// CabalRpc -> DeleteLimitOrders
	async deleteLimitOrders({
		mint,
		ids
	}: {
		mint: string;
		ids: string[];
	}): Promise<{ result?: PlaceLimitOrdersResponse; error?: Error }> {
		try {
			const idsn = ids.map((item) => BigInt(item));
			const result = await this.client.deleteLimitOrders({ mint, ids: idsn });
			return { result };
		} catch (error) {
			console.error(`deleteLimitOrders`, error);
			return { error: error as Error };
		}
	}
	/* 
    private 
  */

	handleTradeMessage: CabalStreamEventsHandler = (messageType, messagePayload) => {
		if (!this.ready) {
			return;
		}
		switch (messageType) {
			case CabalStreamEvents.connected:
				this.emit(CabalTradeStreamMessages.tradeConnected);
				break;
			case CabalStreamEvents.error:
				console.error('[[CabalService]]: trade stream error');
				this.stop();
				this.emit(CabalTradeStreamMessages.tradeError, messagePayload);
				break;
			case CabalStreamEvents.message:
				this.processTradeMessage(messagePayload as TradeEventResponse);
				break;
			default:
				console.log(`[handleUserActivityMessage]: unknown message type ${messageType}`);
		}
	};

	handleUserActivityMessage: CabalStreamEventsHandler = (messageType, messagePayload) => {
		if (!this.ready) {
			return;
		}
		switch (messageType) {
			case CabalStreamEvents.connected:
				this.emit(CabalUserActivityStreamMessages.userActivityConnected);
				break;
			case CabalStreamEvents.error:
				console.error('[[CabalService]]: UA stream error');
				this.stop();
				this.emit(CabalUserActivityStreamMessages.userActivityError, messagePayload);
				break;
			case CabalStreamEvents.message:
				this.processUserActivityMessage(messagePayload as UserResponse);
				break;
			default:
				console.log(`[handleUserActivityMessage]: unknown message type ${messageType}`);
		}
	};

	processUserActivityMessage(message: UserResponse) {
		const messageCase = message.userResponseKind.case;
		switch (messageCase) {
			case 'tradeStatus':
				break;
			case 'tradeStats':
				this.emit(CabalUserActivityStreamMessages.tradeStats, message.userResponseKind);
				break;
			case 'txnCb':
				this.emit(CabalUserActivityStreamMessages.txnCb, message.userResponseKind);
				break;
			case 'ping':
				break;
			case 'pong':
				this.emit(CabalUserActivityStreamMessages.userActivityPong, {
					count: message.userResponseKind.value
				});
				break;
			default:
				console.log(`[handleUserActivityMessage]: unknown case message: ${messageCase}`);
		}
	}

	processTradeMessage(message: TradeEventResponse) {
		const messageCase = message.tradeEventResponseKind.case;
		switch (messageCase) {
			case 'tradeEvent':
				this.emit(CabalTradeStreamMessages.tradeEvent, {
					value: message.tradeEventResponseKind.value.tradeEventKind
				});
				break;
			case 'tokenStatus':
				this.emit(CabalTradeStreamMessages.tokenStatus, {
					value: message.tradeEventResponseKind
				});
				break;
			case 'ping':
				this.emit(CabalTradeStreamMessages.tradePing, {
					value: message.tradeEventResponseKind.value
				});
				break;
			case 'pong':
				this.emit(CabalTradeStreamMessages.tradePong, {
					count: message.tradeEventResponseKind.value
				});
				break;
			default:
				console.log(`[processTradeMessage]: unknown case message: ${messageCase}`);
		}
	}
}

export default CabalService;
