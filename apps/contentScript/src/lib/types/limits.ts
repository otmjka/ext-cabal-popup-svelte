export type TLimitRecord = {
  id: number;
  ticker: string;
  limitType: string;
  type: string;
  mc: number;
}

export type ULimitSubtype = 'regular' | 'trailing';

export interface IAutoLimitRecord {
  priorityFee: number;
  tip: number;
  slippage: number;
  subtype: ULimitSubtype;
  // amount?: number;
  // target?: number;
  // position?: number;
  // profit?: number;
}

export interface IAutoLimitBuyRecord extends IAutoLimitRecord {
  amount: number | undefined;
  target: number | undefined;
}

export interface IAutoLimitSellRecord extends IAutoLimitRecord {
  position: number | undefined;
  profit: number | undefined;
}