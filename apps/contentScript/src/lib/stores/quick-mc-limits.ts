import { writable } from 'svelte/store';

const DEFAULT_STATE = [-100, -50, 50, 100];

const { subscribe, set, update } = writable( DEFAULT_STATE);
const clear = () => set({...DEFAULT_STATE});

const quickMcLimitsStore = {
  subscribe,
  set,
  update,
  clear,
};

export default quickMcLimitsStore;
