import { type Snippet } from 'svelte';

export type TButtonVariant = 'buy' | 'buy-secondary' | 'sell' | 'sell-secondary' | 'ghost';
export type TButtonSize = 'sm' | 'md' | 'lg';

export interface IButton {
  variant?: TButtonVariant,
  size?: TButtonSize,
  disabled?: boolean,
  clipped?: boolean,
  children?: Snippet,
  onclick?: () => void,
  class?: string
}