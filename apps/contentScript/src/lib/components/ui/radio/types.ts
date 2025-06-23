import { type Snippet } from 'svelte';

export interface IWidgetAside {
  draggable?: boolean,
  children?: Snippet,
  class?: string,
}
