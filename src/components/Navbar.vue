<template>
  <header class="header">
    <nav class="navbar navbar-dark">
      <div class="navbar__wrapper d-flex">
        <a href="#" class="showMenu showMenu__icon" @click="triggerOpenMenu">
          <b-icon icon="list"></b-icon>
        </a>
        <ul
          class="menu"
          v-if="openMobileNavItems || windowWidth > 576"
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

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      navItems: [
        { title: "Home", prop: "home", isClicked: false },
        { title: "About", prop: "about", isClicked: false },
        { title: "What I Offer?", prop: "service", isClicked: false },
        { title: "Portfolio", prop: "portfolio", isClicked: false }
      ],
      currentNavItem: "",
      openMobileNavItems: false
    };
  },
  computed: {
    ...mapGetters(["windowWidth"])
  },
  methods: {
    changeCurrentNavItem(item) {
      this.currentNavItem = item;
    },
    triggerOpenMenu() {
      if (this.openMobileNavItems) {
        this.openMobileNavItems = false;
        this.currentNavItem = "";
      } else {
        this.openMobileNavItems = true;
      }
    }
  },
  watch: {
    currentNavItem() {
      this.navItems.forEach(d => {
        d.prop.includes(this.currentNavItem)
          ? (d.isClicked = true)
          : (d.isClicked = false);
      });
    }
  }
};
</script>

<style lang="scss" scoped src="../styles/Navbar.scss"></style>
