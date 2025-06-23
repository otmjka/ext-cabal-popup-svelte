import { type Snippet } from 'svelte';

export type TToggleButtonVariant = 'buy' | 'sell';

export interface IToggleButton {
  enabled?: boolean,
  variant?: TToggleButtonVariant,
  disabled?: boolean,
  children?: Snippet,
  onclick?: (e: MouseEvent | TouchEvent) => void,
  class?: string
}