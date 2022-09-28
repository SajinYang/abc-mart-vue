import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    updateCartNow: false,
    keywordVuex: ''
  },
  getters: {
  },
  mutations: {
    updateCart (state, stateNow) {
      state.updateCartNow = stateNow
    },
    updatekeyword(state, keyword) {
      state.keywordVuex = keyword
    }
  },
  actions: {
    updateCart({ commit }, stateNow ) {
      commit('updateCart', stateNow)
    },
    updatekeyword({ commit }, keyword) {
      commit('updatekeyword', keyword)
    }
  },
  modules: {
  }
})
