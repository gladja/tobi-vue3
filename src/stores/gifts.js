import { defineStore } from 'pinia';

export const useGiftStore = defineStore('giftStore', {
  state: () => ({
    giftData: [],
  }),
  actions: {
    setGiftData(data) {
      this.giftData = data;
    },
  },
});
