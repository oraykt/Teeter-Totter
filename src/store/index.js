import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isPlaying: false
  },
  getters: {
    getGameStatus: (state, getters) => {
      return state.isPlaying
    }
  },
  actions: {
    toggleGameAction (context) {
      context.commit('toggleGamePlay')
    }
  },
  mutations: {
    toggleGamePlay (state, payload) {
      state.isPlaying = !state.isPlaying
    }
  }
})
