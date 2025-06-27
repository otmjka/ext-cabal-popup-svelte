export type TInputVariant = 'buy' | 'sell' | 'default'
export type TInputSize = 'sm' | 'md' | 'lg';

export interface IInput {
  value?: string | number;
  type?: 'text' | 'password' | 'email' | 'number';
  variant?: TInputVariant,
  icon?: 'sol' | 'percent' | undefined,
  size?: TInputSize,
  class?: string,
  placeholder?: string,
  min?: number,
  max?: number,
  step?: number,
  inputClass?: string,
  disabled?: boolean,
  onchange?: (event: Event) => void,
  onkeyup?: (event: KeyboardEvent) => void
}