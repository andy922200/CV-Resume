<template>
  <div class="indexPage">
    <ScrollTop />
    <div class="indexPage__landingArea">
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="title title--format">Hi, I am Andy.</h2>
            <h3 class="subtitle title--format">Software Developer, Blogger and Traveler</h3>
            <h5 class="thirdLevelTitle title--format">
              Independent, Sensitive and immersed in Natural & Programming Languages
            </h5>
            <div class="social_icons">
              <div v-for="(item, index) in socialIcons" :key="index" class="social_icon">
                <a target="_blank" :href="item.url">
                  <font-awesome-icon :icon="['fab', item.iconProp]" />
                </a>
                <p class="icon__title">{{ item.title }}</p>
              </div>
            </div>
            <div class="resumeButtons d-flex justify-content-center">
              <a target="_blank" href="https://www.cakeresume.com/andy0922ucs-engineer-en">
                <button class="btn btn-outline--lightBlue m-2">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <About />
          <WhatIOffer />
          <IntegrationTemplates />
          <Portfolio />
        </div>
      </div>
    </div>
    <FooterArea :social-icons="socialIcons" />
  </div>
</template>

<script setup>
import ScrollTop from './../components/ScrollTop'
import Navbar from './../components/Navbar'
import About from './../components/About'
import WhatIOffer from './../components/WhatIOffer'
import IntegrationTemplates from './../components/IntegrationTemplates'
import Portfolio from './../components/Portfolio'
import FooterArea from './../components/FooterArea'

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

<style lang="scss" scoped src="../styles/IndexPage.scss"></style>
