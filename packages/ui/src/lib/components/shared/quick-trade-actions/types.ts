export interface IQuickTradeActions{
  type: "buy" | "sell",
  unit?: "SOL" | "percent",
  actions: number[],
  onclick?: (el: number) => void
}
