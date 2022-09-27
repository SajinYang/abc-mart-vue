import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    updateCartNow: false
  },
  getters: {
  },
  mutations: {
    updateCart (state, stateNow) {
      state.updateCartNow = stateNow
    }
  },
  actions: {
    updateCart({ commit }, stateNow ) {
      commit('updateCart', stateNow)
    }
  },
  modules: {
  }
})
