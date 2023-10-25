<template>
  <div class="arrowUpIconWrapper" v-if="isButtonShown" @click="triggerBackToTop">
    <font-awesome-icon :icon="['fas', 'arrow-up']" class="arrowUpIcon" />
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
  data() {
    return {
      isButtonShown: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showButton)
  },
  unmounted() {
    window.removeEventListener('scroll', this.showButton)
  },
  methods: {
    showButton() {
      let scrollTop = document.documentElement.scrollTop
      let currentView = this
      currentView.scrollTop = scrollTop
      if (currentView.scrollTop > 40) {
        this.isButtonShown = true
      } else {
        this.isButtonShown = false
      }
    },
    triggerBackToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.arrowUpIconWrapper {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 40px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27ae60;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  @media (max-width: 576px) {
    right: 20px;
  }
  .arrowUpIcon {
    font-size: 20px;
  }
}
</style>
