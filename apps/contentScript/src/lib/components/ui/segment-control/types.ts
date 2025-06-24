import type { Snippet } from "svelte";

export interface ISegmentContrlList {
  size?: 'md' | 'lg',
  children?: Snippet;
  class?: string;
};

export interface ISegmentControlItem {
  disabled?: boolean
  active?: boolean
  children?: Snippet
  onclick?: () => void
  class?: string
}