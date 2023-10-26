<template>
  <div id="app" class="app-default-class">
    <div class="container-fluid container-fluid--noPadding">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
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

<style lang="scss" scoped src="./styles/app.scss"></style>
