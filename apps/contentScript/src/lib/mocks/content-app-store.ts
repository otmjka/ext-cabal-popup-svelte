import type { ContentAppStore } from '@/stores/contentAppStore';

export const contentAppStoreMock: ContentAppStore = {
	tabMint: '7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr',
	mint: '7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr',
	isReady: false,
	isWidgetReady: false,
	focused: true,
	url: '',
	shouldSetApiKey: true,
	config: {
		autoLimit: {
			presets: [
				{
					buyLimits: [
						{
							amount: 50,
							color: 'red',
							priorityFee: 0.0005,
							slippage: 25,
							target: 100,
							tip: 0.005,
							type: 'TakeProfit Trailing'
						},
						{
							amount: 50,
							color: 'green',
							priorityFee: 0.0005,
							slippage: 25,
							target: 100,
							tip: 0.005,
							type: 'StopLoss'
						},
						{
							amount: 50,
							color: 'grey',
							priorityFee: 0.0005,
							slippage: 25,
							target: 100,
							tip: 0.005,
							type: 'new'
						}
					],
					name: 'preset 1',
					sellLimits: [
						{
							color: 'red',
							position: 50,
							priorityFee: 0.0005,
							profit: 100,
							slippage: 25,
							tip: 0.005,
							type: 'TakeProfit Trailing'
						},
						{
							color: 'green',
							position: 50,
							priorityFee: 0.0005,
							profit: 100,
							slippage: 25,
							tip: 0.005,
							type: 'StopLoss'
						},
						{
							color: 'grey',
							position: 50,
							priorityFee: 0.0005,
							profit: 100,
							slippage: 25,
							tip: 0.005,
							type: 'new'
						}
					]
				},
				{
					buyLimits: [
						{
							amount: 50,
							color: 'red',
							priorityFee: 0.0005,
							slippage: 25,
							target: 100,
							tip: 0.005,
							type: 'TakeProfit Trailing'
						},
						{
							amount: 50,
							color: 'green',
							priorityFee: 0.0005,
							slippage: 25,
							target: 100,
							tip: 0.005,
							type: 'StopLoss'
						},
						{
							amount: 50,
							color: 'grey',
							priorityFee: 0.0005,
							slippage: 25,
							target: 100,
							tip: 0.005,
							type: 'new'
						}
					],
					name: 'preset 2',
					sellLimits: [
						{
							color: 'red',
							position: 50,
							priorityFee: 0.0005,
							profit: 100,
							slippage: 25,
							tip: 0.005,
							type: 'TakeProfit Trailing'
						},
						{
							color: 'green',
							position: 50,
							priorityFee: 0.0005,
							profit: 100,
							slippage: 25,
							tip: 0.005,
							type: 'StopLoss'
						},
						{
							color: 'grey',
							position: 50,
							priorityFee: 0.0005,
							profit: 100,
							slippage: 25,
							tip: 0.005,
							type: 'new'
						}
					]
				},
				{
					buyLimits: [
						{
							amount: 50,
							color: 'red',
							priorityFee: 0.0005,
							slippage: 25,
							target: 100,
							tip: 0.005,
							type: 'TakeProfit Trailing'
						},
						{
							amount: 50,
							color: 'green',
							priorityFee: 0.0005,
							slippage: 25,
							target: 100,
							tip: 0.005,
							type: 'StopLoss'
						},
						{
							amount: 50,
							color: 'grey',
							priorityFee: 0.0005,
							slippage: 25,
							target: 100,
							tip: 0.005,
							type: 'new'
						}
					],
					name: 'preset 3',
					sellLimits: [
						{
							color: 'red',
							position: 50,
							priorityFee: 0.0005,
							profit: 100,
							slippage: 25,
							tip: 0.005,
							type: 'TakeProfit Trailing'
						},
						{
							color: 'green',
							position: 50,
							priorityFee: 0.0005,
							profit: 100,
							slippage: 25,
							tip: 0.005,
							type: 'StopLoss'
						},
						{
							color: 'grey',
							position: 50,
							priorityFee: 0.0005,
							profit: 100,
							slippage: 25,
							tip: 0.005,
							type: 'new'
						}
					]
				}
			],
			setAutoLimitIfTrade: false
		},
		buySell: {
			buyPresetsPerc: [1, 10, 15, 20],
			buyPresetsSol: [0.5, 1, 2, 5],
			buyPriorityFee: 0.01,
			buySlippage: 25,
			buyTip: 0.001,
			sellPresetsPerc: [1, 10, 15, 20],
			sellPresetsSol: [0.5, 1, 2, 5],
			sellPriorityFee: 0.01,
			sellSlippage: 20,
			sellTip: 0.001
		},
		limit: {
			buyPriorityFee: 0.01,
			buySlippage: 25,
			buyTip: 0.001,
			mcPerc: [-100, -50, 50, 100],
			sellPriorityFee: 0.01,
			sellSlippage: 20,
			sellTip: 0.001
		},
		migrationSnipe: {
			buyAmount: 0.005,
			buyPriorityFee: 0.01,
			buySlippage: 25,
			buyTip: 0.001,
			sellAmountPerc: 10,
			sellPriorityFee: 0.01,
			sellSlippage: 20,
			sellTip: 0.001
		},
		quickBuyAmount: 5,
		txProcessors: {
			'0slot_trade': false,
			astra_iris: false,
			blox_route: false,
			cabal: true,
			jito_validators: false,
			next_block: false,
			nozomi: false
		}
	},
	tokenStatus: null,
	tradeStats: null,
	solPriceUSD: 146.3,
	tokenInSol: 0.0021,
	mc: 296_000_000,
	lastTradeEvent: null,
	limitOrders: [],
	txLog: []
};
