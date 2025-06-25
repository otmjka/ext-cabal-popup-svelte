import { writable, derived } from 'svelte/store';

const DEFAULT_STATE = [0.5, 1, 2, 5];

const { subscribe, set, update } = writable(DEFAULT_STATE);
const clear = () => set({ ...DEFAULT_STATE });

const quickBuyStore = {
	subscribe,
	set,
	update,
	clear
};

export default quickBuyStore;
