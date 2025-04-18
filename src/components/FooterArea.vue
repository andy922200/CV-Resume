<script setup lang="ts">
import { PropType } from 'vue'

defineOptions({
  name: 'FooterArea',
})

defineProps({
  socialIcons: {
    type: Array as PropType<{ iconProp: string; url: string }[]>,
    default: () => [],
  },
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="color-white flex flex-wrap justify-center bg-black">
    <p class="text-size-[0.875rem] sm:text-size-5 mb-0 w-full px-[0.625rem] py-5">
      &copy; {{ currentYear }} SMLPoints.com || All Rights Reserved.
    </p>
    <ul class="mb-5 pl-0">
      <li class="list-none">
        <a
          v-for="(item, index) in socialIcons"
          :key="index"
          target="_blank"
          :href="item.url"
          class="decoration-none text-size-5 sm:text-size-6 mr-4 text-white"
        >
          <font-awesome-icon :icon="['fab', item.iconProp]" />
        </a>
      </li>
    </ul>
  </footer>
</template>
