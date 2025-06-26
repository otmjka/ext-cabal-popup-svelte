import { type Snippet } from 'svelte';

export interface IWidgetControlButton {
  disabled?: boolean,
  active?: boolean,
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

export interface IWidgetControlDropownItem {
  label: string;
  callback?: () => void;
}

export interface IWidgetControlDropown {
  visible?: boolean;
  items: IWidgetControlDropownItem[];
  closeOnSelect?: boolean;
  onopen?: () => void;
  onselect?: () => void;
  children: Snippet;
}
