import useAppStore from './app'

const useStore = () => ({
  app: useAppStore(),
})

export default useStore
