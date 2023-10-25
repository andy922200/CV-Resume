import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: 0,
    windowHeight: 0,
  },
  getters: {
    windowWidth: (state) => state.windowWidth,
    windowHeight: (state) => state.windowHeight,
  },
  mutations: {
    setWindowWidth(state, value) {
      state.windowWidth = value
    },
    setWindowHeight(state, value) {
      state.windowHeight = value
    },
  },
  actions: {},
  modules: {},
})
