import { defineStore } from "pinia";

export const usePinia = defineStore("base-stores", () => {
	const count = ref(0);

	return { count };
});
