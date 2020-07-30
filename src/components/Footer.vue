<template>
  <footer class="footer">
    <p class="footer__content">&copy; 2020 SMLPoints.com || All Rights Reserved.</p>
    <ul class="footer__socialIcons">
      <li>
        <a target="_blank" v-for="(item,index) in socialIcons" :key="index" :href="item.url">
          <font-awesome-icon :icon="['fab', item.iconProp]" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name:"Footer",
  props:{
    socialIcons:{
      default:Array
    }
  }
}
</script>

<style lang="scss" scoped src="../styles/Footer.scss"></style>