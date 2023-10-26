import { defineStore } from 'pinia'

const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    windowWidth: 0,
    windowHeight: 0,
  }),
  actions: {
    setWindowWidth(value: number) {
      this.windowWidth = value
    },
    setWindowHeight(value: number) {
      this.windowHeight = value
    },
  },
})

export default useAppStore
