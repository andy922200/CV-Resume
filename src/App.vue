<template>
  <div id="app" class="app-default-class">
    <div class="container-fluid container-fluid--noPadding">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  created() {
    this.initialize()
    window.addEventListener('resize', this.detectWindowWidth)
  },
  destroyed() {
    window.removeEventListener('resize', this.detectWindowWidth)
  },
  methods: {
    ...mapMutations(['setWindowWidth', 'setWindowHeight']),
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
