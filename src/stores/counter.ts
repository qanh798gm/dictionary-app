import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),

  getters: {
    count(state) {
      return state.counter;
    },
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter += 1;
    },
    decrease() {
      if (this.counter <= 0) return;
      this.counter -= 1;
    },
  },
});
