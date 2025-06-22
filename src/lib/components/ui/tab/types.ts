import { type Snippet } from 'svelte';

export interface ITabList {
  children?: Snippet,
  class?: string
}


export interface ITabItem {
  disabled?: boolean,
  active?: boolean,
  wrapperClass?: string,
  children?: Snippet,
  onclick?: () => void,
  class?: string
}