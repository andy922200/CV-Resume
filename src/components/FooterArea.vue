<template>
  <footer class="flex flex-wrap justify-center bg-black color-white">
    <p class="w-full px-[0.625rem] py-5 mb-0 text-size-[0.875rem] sm:text-size-5">
      &copy; {{ currentYear }} SMLPoints.com || All Rights Reserved.
    </p>
    <ul class="pl-0 mb-5">
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
