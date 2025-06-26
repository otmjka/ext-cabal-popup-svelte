export enum CabalMessageType {
	CabalEvent = 'CABAL_EVENT'
}
export enum CabalCommonMessages {
	readyStatus = 'readyStatus',
	configChanged = 'configChanged'
}

export type FromBackgroundConfigChanged = {
	type: CabalMessageType;
	eventName: CabalCommonMessages.configChanged;
	meta: CabalMeta;
};

export type FromBackgroundMessage = FromBackgroundConfigChanged;
// | FromBackgroundTxMessage
// | FromBackgroundReadyStatusMessage
// | FromBackgroundMessageUAError
// | FromBackgroundMessageUAConnected
// | FromBackgroundMessageUAPong
// | FromBackgroundMessageUATradeStats
// | FromBackgroundMessageTradeConnected
// | FromBackgroundMessageTradePong
// | FromBackgroundMessageTradeTokenStatus
// | FromBackgroundMessageTradeEvent
// | FromBackgroundMessageTradeError;

export type MessageListener = (
	message: FromBackgroundMessage,
	sender: any,
	sendResponse: SendResponse
) => void;

export enum BackgroundMessages {
	SET_STORAGE_TO_DEFAULT = 'SET_STORAGE_TO_DEFAULT',
	GET_CONFIG_PROMISE = 'GET_CONFIG_PROMISE',
	POPUP_OPEN = 'POPUP_OPEN',
	INIT_CABAL = 'INIT_CABAL',
	SUBSCRIBE_TOKEN = 'SUBSCRIBE_TOKEN',
	SUBSCRIBE_TOKEN_PROMISE = 'SUBSCRIBE_TOKEN_PROMISE',

	BUY_MARKET = 'BUY_MARKET',
	SELL_MARKET = 'SELL_MARKET',
	SET_APIKEY = 'SET_APIKEY',
	SET_APIKEY_PROMISE = 'SET_APIKEY_PROMISE',

	BUY_SELL_SETTINGS_CHANGE = 'BUY_SELL_SETTINGS_CHANGE'
}

type AutoLimitSellItem = {
	type: string; // 'TakeProfit Trailing',
	color?: string; // 'red',
	priorityFee: number; // '0.0005',
	tip: number; //'0.005',
	slippage: number; //'25',
	position: number; //'50',
	profit: number; //'100',
};

type AutoLimitBuyItem = {
	type: string; // 'TakeProfit Trailing',
	color?: string; // 'red',
	priorityFee: number; // '0.0005',
	tip: number; //'0.005',
	slippage: number; //'25',
	amount: number; //'50',
	target: number; //'100',
};

type AutoLimitPreset = {
	name: string;
	sellLimits: Array<AutoLimitSellItem>;
	buyLimits: Array<AutoLimitBuyItem>;
};

type AutoLimitConfig = {
	setAutoLimitIfTrade: boolean;
	presets: Array<AutoLimitPreset>;
};
type Presets = number[];
export type BuySellConfig = {
	buyPresetsSol: Presets; // [0.5, 1, 2, 5];
	sellPresetsSol: Presets; // [0.5, 1, 2, 5];

	buyPresetsPerc: Presets; // [1, 10, 15, 20];
	sellPresetsPerc: Presets; // [1, 10, 15, 20];

	buyTip: number; // 0.001;
	sellTip: number; // 0.001;

	buyPriorityFee: number; // 0.01;
	sellPriorityFee: number; // 0.01;

	buySlippage: number; // 25;
	sellSlippage: number; // 20;
};

export type TXProcessorsConfig = {
	cabal: boolean;
	nozomi: boolean;
	astra_iris: boolean;
	jito_validators: boolean;
	blox_route: boolean;
	next_block: boolean;
	'0slot_trade': boolean;
};

export type LimitConfig = {
	buyTip: number; // 0.001;
	sellTip: number; // 0.001;

	buyPriorityFee: number; // 0.01;
	sellPriorityFee: number; // 0.01;

	buySlippage: number; // 25;
	sellSlippage: number; // 20;

	mcPerc: Array<number>; // [-100, -50, 50, 100];
};

export type MigrationSnipeConfig = {
	buyAmount: number; // 0.005;
	sellAmountPerc: number; // 10;

	buyTip: number; // 0.001;
	sellTip: number; // 0.001;

	buyPriorityFee: number; // 0.01;
	sellPriorityFee: number; // 0.01;

	buySlippage: number; // 25;
	sellSlippage: number; // 20;
};

export type CabalConfig = {
	quickBuyAmount: number;
	autoLimit: AutoLimitConfig;
	buySell: BuySellConfig;
	migrationSnipe: MigrationSnipeConfig;
	limit: LimitConfig;
	txProcessors: TXProcessorsConfig;
};

export type CabalStorageValue = {
	apiKey: null | string;
	config: CabalConfig;
};

export type CabalMeta = {
	mint: string | null;
	isReady: boolean;
	shouldSetApiKey: boolean;
	config: CabalConfig | null;
	error?: string;
};

export type BgInitMessageResponse = {
	meta: CabalMeta;
};

export type BgMessageResponse = BgInitMessageResponse;

export type InitCabalOnTabMessage = {
	type: BackgroundMessages.INIT_CABAL;
	data: {
		url: string;
		mint: string;
	};
};

export type MessageToBgPayload = InitCabalOnTabMessage;
export type SendResponse = (params: { ok: boolean }) => void;
