<template>
  <header class="header">
    <nav class="navbar navbar-dark">
      <div class="navbar__wrapper d-flex">
        <a href="#" class="showMenu showMenu__icon" @click="triggerOpenMenu">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            class="card-body__icon card-body__icon--wrench"
          />
        </a>
        <ul
          v-if="openMobileNavItems || windowWidth > 576"
          class="menu"
          :class="windowWidth <= 576 ? 'mobile-active' : ''"
        >
          <li v-for="item in navItems" :key="item.prop">
            <a
              :href="`#${item.prop}`"
              :class="currentNavItem === item.prop ? 'button-layout' : ''"
              @click="changeCurrentNavItem(item.prop)"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
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

const changeCurrentNavItem = (item) => {
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

<style lang="scss" scoped src="../styles/Navbar.scss"></style>
