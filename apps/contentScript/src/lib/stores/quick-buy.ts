import { writable, derived } from 'svelte/store';
import { contentAppStore } from './contentAppStore';

const DEFAULT_STATE = [0.5, 1, 2, 5];

const { subscribe, set, update } = writable(DEFAULT_STATE);
const clear = () => set({ ...DEFAULT_STATE });

const quickBuyStore = {
	subscribe,
	set,
	update,
	clear
};

contentAppStore.subscribe((state) => {
	if (state.config?.buySell?.buyPresetsSol) {
		// Обновляем quickBuyStore, если buyPresetsSol изменился
		quickBuyStore.set(state.config.buySell.buyPresetsSol);
	}
});
export default quickBuyStore;
