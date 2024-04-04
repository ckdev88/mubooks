import { defineStore } from 'pinia'

export const useStatiegeldStore = defineStore('StatiegeldStore', {
  //state (data)
  state: () => ({
    statiegeldFlesje: 0.25,
    kratFlesjes: 24,
    aantalKratjes: 0,
    statiegeldBon: 0
  }),
  //actions (computed)
  actions: {
    statiegeldBonKratjes(n) {
      this.aantalKratjes = n
      this.statiegeldBon = this.statiegeldFlesje * this.kratFlesjes * n
    }
  },
  // actions: {
  //   setStatiegeldBon() {
  // }
  // },
  // //getters (methods)
  getters: {
    statiegeldKrat: (state) => {
      return state.statiegeldFlesje * state.kratFlesjes
    }
    // statiegeldBonKratjes: () => {
    //   return 35 * n
    // }
    // statiegeldBon
  }
})
