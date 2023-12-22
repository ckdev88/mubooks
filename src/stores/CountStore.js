import { defineStore } from 'pinia'

export const useCountStore = defineStore('CountStore', {
  state: () => ({
    // like data, in options API
    count: 0,
    incrementAmount: 34
  }),
  actions: {
    // like methods, in options API
    increment() {
      this.count += this.incrementAmount
    }
  },
  getters: {
    // like computed, in options API
    doubleCount: (state) => {
      return state.count * 2
    }
  }
})
