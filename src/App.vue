<script setup lang="ts">
import 'aos/dist/aos.css'

import AOS from 'aos'
import { onMounted, onUnmounted } from 'vue'

import useStore from '@/store'

defineOptions({
  name: 'App',
})

const { app } = useStore()

const detectWindowWidth = () => {
  app.setWindowWidth(window.innerWidth)
  app.setWindowHeight(window.innerHeight)
}

onMounted(() => {
  AOS.init()
  window.addEventListener('resize', detectWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', detectWindowWidth)
})

detectWindowWidth()
</script>

<template>
  <div id="app" class="app-default-class text-center text-black">
    <div class="container-fluid p-0">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
$font-family-for-all-platforms:
  Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', '儷黑 Pro', 'LiHei Pro', '微軟正黑體',
  'Microsoft JhengHei', '標楷體', DFKai-SB, sans-serif;

.app-default-class {
  font-family: $font-family-for-all-platforms;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
