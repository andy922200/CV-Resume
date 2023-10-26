<template>
  <footer class="footer">
    <p class="footer__content">&copy; 2023 SMLPoints.com || All Rights Reserved.</p>
    <ul class="footer__socialIcons">
      <li>
        <a v-for="(item, index) in socialIcons" :key="index" target="_blank" :href="item.url">
          <font-awesome-icon :icon="['fab', item.iconProp]" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
defineOptions({
  name: 'FooterArea',
})

defineProps({
  socialIcons: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped src="../styles/Footer.scss"></style>
