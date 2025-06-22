import { type Snippet } from 'svelte';

export type TSectionVariant = 'buy' | 'sell' | 'ghost';


export interface ISection {
  variant?: TSectionVariant,
  children?: Snippet,
  class?: string
}
