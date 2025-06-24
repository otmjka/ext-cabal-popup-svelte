import { type Snippet } from 'svelte';

export interface IWidgetControlButton {
  disabled?: boolean,
  wrapperClass?: string,
  children?: Snippet,
  onclick?: () => void,
  class?: string,
  title?: string,
}

export interface IWidgetAside {
  draggable?: boolean,
  width?: number,
  height?: number,
  header?: Snippet,
  children?: Snippet,
  class?: string,
}
