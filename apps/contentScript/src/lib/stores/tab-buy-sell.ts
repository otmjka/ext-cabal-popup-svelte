import { writable } from 'svelte/store';

const DEFAULT_STATE = {
	amountBuy: undefined
};

const { subscribe, set, update } = writable<{
	amountBuy: number | undefined;
}>(DEFAULT_STATE);
const clear = () => set({ ...DEFAULT_STATE });

const tabBuySellStore = {
	subscribe,
	set,
	update,
	clear
};

export default tabBuySellStore;
