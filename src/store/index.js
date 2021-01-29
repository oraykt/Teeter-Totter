import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    rectangle: {
      weight: 0,
      position: 0
    },
    circle: {
      weight: 0,
      position: 0
    },
    triangle: {
      weight: 0,
      position: 0
    },
    leftSide: 0,
    rightSide: 0,
    balance: 0
  },
  getters: {
    getLeftSide: (state) => {
      return parseInt(state.triangle.weight * state.triangle.position) +
        parseInt(state.circle.weight * state.circle.position)
    },
    getRightSide: (state) => {
      return parseInt(state.rectangle.weight * state.rectangle.position)
    }
  },
  actions: {},
  mutations: {}
})
