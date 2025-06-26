import { Pong, Side, Direction, Trigger } from '.';
import { TradeResponse } from './cabal/CabalRpc/cabal_pb';
import { CabalStreamEvents } from './CabalStream';

export enum streamNames {
	UA = 'UA',
	TRADE = 'TRADE'
}

export enum ErrorCase {
	ping = 'ping',
	pingFinally = 'pingFinally'
}
export interface CabalServiceOpts<StreamResponse> {
	nameStream: string;
	onMessage: CabalStreamEventsHandler;

	clientConnectToStream: () => AsyncIterable<StreamResponse>;
	clientIsPong: (response: StreamResponse) => boolean;
	streamPinger: (params: { count: bigint }) => Promise<Pong>;

	debug?: boolean;
	debugShowPing?: boolean;
}

export type CabalStreamEventsHandler = (
	message: CabalStreamEvents,
	messagePayload?: unknown
) => void;

export enum CabalUserActivityStreamMessages {
	userActivityConnected = 'userActivityConnected',

	userActivityStreamMessage = 'userActivityStreamMessage',

	userActivityPing = 'userActivityPing',
	userActivityPong = 'userActivityPong',
	userActivityError = 'userActivityError',

	tradeStats = 'tradeStats',
	txnCb = 'txnCb'
}

export enum CabalTradeStreamMessages {
	tradeConnected = 'tradeConnected',
	tradeDisconnected = 'tradeDisconnected',

	tradeStreamMessage = 'tradeStreamMessage',

	tradePing = 'tradePing',
	tradePong = 'tradePong',
	tradeError = 'tradeError',

	tradeEvent = 'tradeEvent',
	tokenStatus = 'tokenStatus'
}

export type SubscribeTokenReturn = Promise<{
	result?: TradeResponse;
	error?: null | Error;
}>;

export enum TargetTypeCase {
	price = 'price',
	profit = 'profit',
	movingPerc = 'movingPerc',
	market = 'market'
}

export enum AmountCase {
	percBps = 'percBps',
	fixed = 'fixed'
}

export type ApiOrderParsed = {
	mint: string;
	id?: string;
	slippageBps: number;
	tip: string; // bigint // 0.001
	side: Side;

	// target
	targetTypeCase?: TargetTypeCase;

	// "price"
	targetTypeValuePrice?: number;

	// "profit"
	targetTypeValueProfitPerc?: number;

	// "movingPerc"
	targetTypeValuePricePerc?: number;
	targetTypeValueLocalAth?: number;
	// "price" + "profit" + "movingPerc"
	targetTypeValueDirection?: Direction;

	// amount

	amountCase?: AmountCase;
	amountPercBps?: number;

	amountFixed?: string; // bigint

	trigger: Trigger;
};
