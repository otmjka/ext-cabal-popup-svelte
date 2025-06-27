import type { 
  IAutoLimitRecord, 
  IAutoLimitBuyRecord, 
  IAutoLimitSellRecord, 
  ULimitSubtype 
} from "@/types/limits";

type TSubtypeItem = {
  key: ULimitSubtype,
  label: string,
  suffix: string
}

export const LIMIT_SUBTYPES: TSubtypeItem[] = [
  {
    key: "regular",
    label: "",
    suffix: "",
  }, {
    key: "trailing",
    label: "Trailing",
    suffix: "T",
  }
];

export const DEFAULT_AUTO_LIMIT: IAutoLimitRecord = {
  priorityFee: 0.0005,
  tip: 0.005,
  slippage: 25,
  subtype: "regular",
};

export const DEFAULT_BUY_AUTO_LIMIT: IAutoLimitBuyRecord = {
  ...DEFAULT_AUTO_LIMIT,
  amount: undefined,
  target: undefined
}

export const DEFAULT_SELL_AUTO_LIMIT: IAutoLimitSellRecord = {
  ...DEFAULT_AUTO_LIMIT,
  position: undefined,
  profit: undefined,
}
