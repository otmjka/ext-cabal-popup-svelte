export type TInputVariant = 'buy' | 'sell' | 'default'

export interface IInput {
  value?: string | number;
  type?: 'text' | 'password' | 'email' | 'number';
  variant?: TInputVariant,
  icon: 'sol' | 'percent' | undefined,
  class?: string,
  placeholder?: string,
  min?: number,
  max?: number,
  step?: number,
  inputClass?: string,
  disabled?: boolean,
  onchange?: (event: Event) => void
}