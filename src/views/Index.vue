<template>
  <div class="index">
    <ScrollTop />
    <div class="landing-area pt-40 pb-32 text-white sm:py-56">
      <Navbar />
      <div class="container px-18px md:px-24px lg:px-16px xl:px-30px xxl:px-40px">
        <div class="row">
          <div class="col-12">
            <h2 class="text-size-[1.75rem] sm:text-size-[2.25rem]">Hi, I am Andy.</h2>
            <h3 class="text-size-[1.25rem] sm:text-size-[1.5rem]">
              Software Developer, Blogger and Traveler
            </h3>
            <h5 class="text-size-[1rem] sm:text-size-[1.25rem]">
              Independent, Sensitive and immersed in Natural & Programming Languages
            </h5>
            <div class="mx-0 my-0.625rem flex flex-nowrap justify-center">
              <div
                v-for="(item, index) in socialIcons"
                :key="index"
                class="social_icon w-50px pr-0.5rem sm:w-75px pr-0.75rem"
              >
                <a
                  target="_blank"
                  :href="item.url"
                  class="text-size-[1.75rem] sm:text-size-[2.25rem] text-white"
                >
                  <font-awesome-icon :icon="['fab', item.iconProp]" />
                </a>
                <p class="icon__title mb-0">
                  {{ item.title }}
                </p>
              </div>
            </div>
            <div class="flex justify-center">
              <a target="_blank" href="https://www.cakeresume.com/andy0922ucs-engineer-en">
                <button
                  class="btn color-lightBlue border-lightBlue @hover:color-white @hover:bg-lightBlue @hover-border-lightBlue m-2"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-18px md:px-24px lg:px-16px xl:px-30px xxl:px-40px">
      <div class="row">
        <div class="col-12">
          <About />
          <WhatIOffer />
          <Package />
          <IntegrationTemplates />
          <Portfolio />
        </div>
      </div>
    </div>
    <FooterArea :social-icons="socialIcons" />
  </div>
</template>

<script setup lang="ts">
import ScrollTop from './../components/ScrollTop.vue'
import Navbar from './../components/Navbar.vue'
import About from './../components/About.vue'
import WhatIOffer from './../components/WhatIOffer.vue'
import IntegrationTemplates from './../components/IntegrationTemplates.vue'
import Package from '@/components/Package.vue'
import Portfolio from './../components/Portfolio.vue'
import FooterArea from './../components/FooterArea.vue'

defineOptions({
  name: 'Index',
})

const socialIcons = [
  {
    title: 'Facebook',
    iconProp: 'facebook',
    url: 'https://www.facebook.com/andy0922ucs',
  },
  {
    title: 'Instagram',
    iconProp: 'instagram',
    url: 'https://www.instagram.com/smlpoints/',
  },
  {
    title: 'My Blog',
    iconProp: 'wordpress-simple',
    url: 'https://smlpoints.com',
  },
  {
    title: 'LinkEdin',
    iconProp: 'linkedin-in',
    url: 'https://www.linkedin.com/in/andy922200',
  },
  {
    title: 'Github',
    iconProp: 'github',
    url: 'https://github.com/andy922200',
  },
  {
    title: 'Twitter',
    iconProp: 'twitter',
    url: 'https://twitter.com/SMLPOINTS',
  },
]
</script>

<style lang="scss" scoped>
.landing-area {
  background-image: url(../assets/dark_layout.png), url(../assets/topImage.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  .social_icon {
    .icon__title {
      visibility: hidden;
    }

    &:hover {
      .icon__title {
        visibility: visible;
      }
    }
  }
}
</style>
