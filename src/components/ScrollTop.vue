<template>
  <div v-if="isButtonShown" class="arrowUpIconWrapper" @click="triggerBackToTop">
    <font-awesome-icon :icon="['fas', 'arrow-up']" class="arrowUpIcon" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'ScrollTop',
})

const isButtonShown = ref(false)

onMounted(() => {
  window.addEventListener('scroll', showButton)
})

onUnmounted(() => {
  window.removeEventListener('scroll', showButton)
})

const showButton = () => {
  let scrollTop = document.documentElement.scrollTop
  isButtonShown.value = scrollTop > 40
}

const triggerBackToTop = () => {
  window.scrollTo(0, 0)
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
