<template>
  <div
    v-if="isButtonShown"
    class="position-fixed w-[50px] h-[50px] bottom-[50px] right-[20px] sm:right-[40px] z-2 flex justify-center items-center bg-[#27ae60] border-rd-50% cursor-pointer text-white"
    @click="triggerBackToTop"
  >
    <font-awesome-icon :icon="['fas', 'arrow-up']" class="text-size-5" />
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
