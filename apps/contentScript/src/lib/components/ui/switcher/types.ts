import type { Snippet } from "svelte";

export interface ISwitcherProps {
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  name?: string;
  value?: string;
  id?: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  highlight?: boolean;
  children?: Snippet,
  onchange?: (event: MouseEvent | TouchEvent) => void;
  onfocus?: (event: FocusEvent) => void;
}
