<template>
  <div class="integrationTemplates">
    <div class="row">
      <h3 class="integrationTemplates__title">IntegrationTemplates</h3>
      <div v-for="item in templates" :key="item.name" class="col-md-6">
        <div class="card">
          <div class="card-header">
            {{ item.header }}
          </div>
          <div class="card-body">
            <div class="card-text-wrapper">
              <p class="card-text">
                {{ item.description }}
              </p>
            </div>
            <a :href="item.link" target="_blank" class="btn btn-secondary">
              <font-awesome-icon :icon="['fab', 'github']" class="card-footer__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IntegrationTemplates',
})

const templates = [
  {
    name: 'vite-vue3-ts-template',
    header: 'Vite Vue3 TypeScript Template',
    description: 'Vue3, Axios, dayjs, eslint, stylelint, typescript, jest, testcafe',
    link: 'https://github.com/andy922200/vite-vue3-ts-template',
  },
  {
    name: 'Dotnet5CoreMVCwithMultiVue',
    header: 'Dotnet 5 Core MVC with Multi-Vue',
    description: 'Vue 3, Dotnet 5, TypeScript, i18n, ESLint, StyleLint, Axios',
    link: 'https://github.com/andy922200/dotnet-mvc-multi-vue-template',
  },
  {
    name: 'Vue3andElementUIAdvanced',
    header: 'Vue 3 & Element UI Advanced',
    description: 'Vue 3, Element UI, TypeScript, Jest, TestCafe, i18n, ESLint, StyleLint, Axios',
    link: 'https://github.com/andy922200/vue3-typescript-jest-elementUI-testcafe',
  },
  {
    name: 'Vue2andVuetifyAdvanced',
    header: 'Vue 2 & Vuetify Advanced',
    description: 'Vue 2, Vuetify, TypeScript, Jest, TestCafe, i18n, ESLint, StyleLint, Axios',
    link: 'https://github.com/andy922200/vue-vuetify-typescript-eslint-babel-stylelint-integration',
  },
  {
    name: 'gulp4withBabel7',
    header: 'Gulp 4 With Babel 7',
    description: 'Gulp 4 Automation Tool with Babel.js',
    link: 'https://github.com/andy922200/gulp4_script_with_babel7',
  },
]
</script>

<style lang="scss" scoped src="../styles/IntegrationTemplates.scss"></style>
