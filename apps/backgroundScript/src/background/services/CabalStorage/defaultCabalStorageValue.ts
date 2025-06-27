import { CabalConfig } from './types';

export const defaultCabalConfig: CabalConfig = {
	quickBuyAmount: 5,
	autoLimit: {
		setAutoLimitIfTrade: false,
		presets: [
			{
				name: 'preset 1',
				sellLimits: [
					{
						type: 'TakeProfit Trailing',
						color: 'red',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						position: 50,
						profit: 100
					},
					{
						type: 'StopLoss',
						color: 'green',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						position: 50,
						profit: 100
					},
					{
						type: 'new',
						color: 'grey',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						position: 50,
						profit: 100
					}
				],
				buyLimits: [
					{
						type: 'TakeProfit Trailing',
						color: 'red',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						amount: 50,
						target: 100
					},
					{
						type: 'StopLoss',
						color: 'green',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						amount: 50,
						target: 100
					},
					{
						type: 'new',
						color: 'grey',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						amount: 50,
						target: 100
					}
				]
			},
			{
				name: 'preset 2',
				sellLimits: [
					{
						type: 'TakeProfit Trailing',
						color: 'red',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						position: 50,
						profit: 100
					},
					{
						type: 'StopLoss',
						color: 'green',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						position: 50,
						profit: 100
					},
					{
						type: 'new',
						color: 'grey',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						position: 50,
						profit: 100
					}
				],
				buyLimits: [
					{
						type: 'TakeProfit Trailing',
						color: 'red',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						amount: 50,
						target: 100
					},
					{
						type: 'StopLoss',
						color: 'green',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						amount: 50,
						target: 100
					},
					{
						type: 'new',
						color: 'grey',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						amount: 50,
						target: 100
					}
				]
			},
			{
				name: 'preset 3',
				sellLimits: [
					{
						type: 'TakeProfit Trailing',
						color: 'red',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						position: 50,
						profit: 100
					},
					{
						type: 'StopLoss',
						color: 'green',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						position: 50,
						profit: 100
					},
					{
						type: 'new',
						color: 'grey',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						position: 50,
						profit: 100
					}
				],
				buyLimits: [
					{
						type: 'TakeProfit Trailing',
						color: 'red',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						amount: 50,
						target: 100
					},
					{
						type: 'StopLoss',
						color: 'green',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						amount: 50,
						target: 100
					},
					{
						type: 'new',
						color: 'grey',
						priorityFee: 0.0005,
						tip: 0.005,
						slippage: 25,
						amount: 50,
						target: 100
					}
				]
			}
		]
	},
	buySell: {
		buyPresetsSol: [0.5, 1, 2, 5],
		sellPresetsSol: [0.5, 1, 2, 5],

		buyPresetsPerc: [1, 10, 15, 20],
		sellPresetsPerc: [10, 25, 50, 100],

		buyTip: 0.001,
		sellTip: 0.001,

		buyPriorityFee: 0.00001,
		sellPriorityFee: 0.00001,

		buySlippage: 20,
		sellSlippage: 20
	},
	migrationSnipe: {
		buyAmount: 0.005,
		sellAmountPerc: 10,

		buyTip: 0.001,
		sellTip: 0.001,

		buyPriorityFee: 0.00001,
		sellPriorityFee: 0.00001,

		buySlippage: 50,
		sellSlippage: 50
	},
	limit: {
		buyTip: 0.001,
		sellTip: 0.001,

		buyPriorityFee: 0.00001,
		sellPriorityFee: 0.00001,

		buySlippage: 25,
		sellSlippage: 20,

		// mcPerc: [-99.9, -50, 100, 200] // -99.9% - 1000000%
		/*
      MC % Parameters Input Error:
      Value must be between -99.9% and 1000000%
    */
		mcPerc: [-99.9, -50, 100, 200]
	},
	txProcessors: {
		cabal: true,
		nozomi: false,
		astra_iris: false,
		jito_validators: false,
		blox_route: false,
		next_block: false,
		'0slot_trade': false
	}
};
