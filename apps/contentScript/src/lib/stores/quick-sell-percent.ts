import { writable } from 'svelte/store';

const DEFAULT_STATE = [20, 40, 60, 100];

const { subscribe, set, update } = writable( DEFAULT_STATE);
const clear = () => set({...DEFAULT_STATE});

const quickSellPercentStore = {
  subscribe,
  set,
  update,
  clear,
};

export default quickSellPercentStore;
