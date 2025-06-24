export interface IQuickTradeActions{
  type: "buy" | "sell",
  actions: number[],
  onclick?: (el: number) => void
}
