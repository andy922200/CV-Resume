<template>
  <header class="position-absolute w-full top-0 left-0 z-2 color-blackOnIcon">
    <nav class="navbar navbar-dark">
      <div class="w-full flex flex-wrap px-2 sm:justify-end">
        <a
          href="#"
          class="w-full sm:hidden text-size-6 decoration-none text-left color-white"
          @click="triggerOpenMenu"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </a>
        <ul
          v-if="openMobileNavItems || windowWidth > 576"
          class="menu"
          :class="
            windowWidth <= 576 ? 'w-full flex justify-center flex-wrap pl-0 pr-[0.625rem] py-0' : ''
          "
        >
          <li v-for="item in navItems" :key="item.prop" class="inline-block text-right">
            <a
              :href="`#${item.prop}`"
              class="color-lightGray case-capital decoration-none px-3 py-[0.625rem] text-size-5 font-bold @hover:bg-color-white"
              :class="
                currentNavItem === item.prop
                  ? 'position-relative mb-0 px-4 py-0 bg-white color-black! h-9 line-height-9 vertical-middle border-rd-[1.875rem]'
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

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
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
