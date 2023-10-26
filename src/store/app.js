import { defineStore } from 'pinia'

const useAppStore = defineStore({
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

export default useAppStore
