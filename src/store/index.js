import { defineStore } from 'pinia'

export default defineStore({
  id: 'app',
  state: () => ({
    windowWidth: 0,
    windowHeight: 0,
  }),
  actions: {
    setWindowWidth(value) {
      this.windowWidth = value
    },
    setWindowHeight(value) {
      this.windowHeight = value
    },
  },
})
