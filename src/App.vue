<template>
  <div id="app" class="app-default-class">
    <div class="container-fluid container-fluid--noPadding">
      <router-view />
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { mapActions } from 'pinia'
import appStore from '@/store'

export default {
  name: 'App',
  created() {
    this.initialize()
    window.addEventListener('resize', this.detectWindowWidth)
  },
  mounted() {
    AOS.init()
  },
  unmounted() {
    window.removeEventListener('resize', this.detectWindowWidth)
  },
  methods: {
    ...mapActions(appStore, ['setWindowWidth', 'setWindowHeight']),
    initialize() {
      this.detectWindowWidth()
    },
    detectWindowWidth() {
      this.setWindowWidth(window.innerWidth)
      this.setWindowHeight(window.innerHeight)
    },
  },
}
</script>

<style lang="scss" scoped src="./styles/app.scss"></style>
