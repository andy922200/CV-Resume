<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

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

<template>
  <div
    v-if="isButtonShown"
    class="position-fixed z-2 border-rd-50% bottom-[50px] right-[20px] flex h-[50px] w-[50px] cursor-pointer items-center justify-center bg-[#27ae60] text-white sm:right-[40px]"
    @click="triggerBackToTop"
  >
    <font-awesome-icon :icon="['fas', 'arrow-up']" class="text-size-5" />
  </div>
</template>
