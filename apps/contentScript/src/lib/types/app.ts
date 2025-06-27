import type { Component } from "svelte";

export type TNavItem = {
  key: string;
  label: string;
  url?: string;
  component?: Component;
};