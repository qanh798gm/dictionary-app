import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn') || '') || false,
  }),

  getters: {
    loginStatus(state) {
      return state.isLoggedIn;
    },
  },

  actions: {
    login(callback: any) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      callback();
    },
    logout(callback: any) {
      this.isLoggedIn = false;
      localStorage.setItem('isLoggedIn', 'false');
      callback();
    },
  },
});
