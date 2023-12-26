import { defineStore } from 'pinia'
export const useUserStore = defineStore('UserStore', {
  state: () => ({ userList: [] }),
  actions: {},
  getters: {
    shortUserList: (state) => {
      return state.userList.slice(0, 5)
    }
  }
})
