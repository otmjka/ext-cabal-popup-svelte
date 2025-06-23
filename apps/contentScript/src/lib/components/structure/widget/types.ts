import { type Snippet } from 'svelte';

export interface IWidgetControlButton {
  disabled?: boolean,
  wrapperClass?: string,
  children?: Snippet,
  onclick?: () => void,
  class?: string,
  title?: string,
}