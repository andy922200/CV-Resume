<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

import useStore from '@/store'

const { app } = useStore()

defineOptions({
  name: 'Navbar',
})

const navItems = ref([
  { title: 'Home', prop: 'home', isClicked: false },
  { title: 'About', prop: 'about', isClicked: false },
  { title: 'What I Offer?', prop: 'service', isClicked: false },
  { title: 'Portfolio', prop: 'portfolio', isClicked: false },
])

const windowWidth = computed(() => app.windowWidth)
const currentNavItem = ref('')
let openMobileNavItems = ref(false)

onMounted(() => {
  window.addEventListener('scroll', resetClickedStatus)
})

onUnmounted(() => {
  window.removeEventListener('scroll', resetClickedStatus)
})

const changeCurrentNavItem = (item: string) => {
  currentNavItem.value = item
}

const triggerOpenMenu = () => {
  if (openMobileNavItems.value) {
    openMobileNavItems.value = false
    currentNavItem.value = ''
  } else {
    openMobileNavItems.value = true
  }
}

const resetClickedStatus = () => {
  if (window.scrollY === 0) {
    currentNavItem.value = ''
  }
}

watch(currentNavItem, () => {
  navItems.value.forEach((d) => {
    d.prop.includes(currentNavItem.value) ? (d.isClicked = true) : (d.isClicked = false)
  })
})
</script>

<template>
  <header class="position-absolute z-2 color-blackOnIcon left-0 top-0 w-full">
    <nav class="navbar navbar-dark">
      <div class="flex w-full flex-wrap px-2 sm:justify-end">
        <a
          href="#"
          class="text-size-6 decoration-none color-white w-full text-left sm:hidden"
          @click="triggerOpenMenu"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </a>
        <ul
          v-if="openMobileNavItems || windowWidth > 576"
          class="menu"
          :class="
            windowWidth <= 576 ? 'flex w-full flex-wrap justify-center py-0 pl-0 pr-[0.625rem]' : ''
          "
        >
          <li v-for="item in navItems" :key="item.prop" class="inline-block text-right">
            <a
              :href="`#${item.prop}`"
              class="color-lightGray case-capital decoration-none text-size-5 @hover:bg-color-white px-3 py-[0.625rem] font-bold"
              :class="
                currentNavItem === item.prop
                  ? 'position-relative color-black! line-height-9 vertical-middle border-rd-[1.875rem] mb-0 h-9 bg-white px-4 py-0'
                  : ''
              "
              @click="changeCurrentNavItem(item.prop)"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
