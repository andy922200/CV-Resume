<template>
  <div class="row">
    <h3 class="mx-0 my-5 text-size-[1.625rem] sm:text-size-[2rem] w-full">IntegrationTemplates</h3>
    <div v-for="item in displayTemplates" :key="item.name" class="p-1 col-md-6">
      <div class="card">
        <div class="card-header">
          {{ item.header }}
        </div>
        <div class="card-body">
          <div class="h-[60px]">
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
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'IntegrationTemplates',
})

interface Template {
  name: string
  header: string
  description: string
  link: string
  hide?: boolean
}

const templates: Template[] = [
  {
    name: 'vite-vue3-multi-pages-template',
    header: 'Vue 3 + TS + Vite ( Multi Pages )',
    description: 'MultiPages - Vue3, Axios, dayjs, eslint, stylelint, typescript, jest, testcafe',
    link: 'https://github.com/andy922200/vite-vue3-multi-pages-template',
  },
  {
    name: 'vite-react-typescript-tailwindcss',
    header: 'Vite React TypeScript Template',
    description: 'React18, TypeScript, TailwindCSS, ESLint and Stylelint',
    link: 'https://github.com/andy922200/vite-react-typescript-tailwindcss',
    hide: true,
  },
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
    name: 'nuxt3-typescript-tailwindcss-template',
    header: 'Nuxt3 TypeScript TailwindCSS Template',
    description: 'Nuxt3 + TypeScript + ESlint + TailwindCSS Template',
    link: 'https://github.com/andy922200/nuxt3-typescript-tailwindcss-template',
  },
  {
    name: 'nuxt3-typescript-template',
    header: 'Nuxt3 TypeScript Template',
    description: 'Nuxt3 + TypeScript + ESlint + Stylelint Template',
    link: 'https://github.com/andy922200/nuxt3-typescript-template',
    hide: true,
  },
  {
    name: 'Vue3andElementUIAdvanced',
    header: 'Vue 3 & Element UI Advanced',
    description: 'Vue 3, Element UI, TypeScript, Jest, TestCafe, i18n, ESLint, StyleLint, Axios',
    link: 'https://github.com/andy922200/vue3-typescript-jest-elementUI-testcafe',
    hide: true,
  },
  {
    name: 'Vue2andVuetifyAdvanced',
    header: 'Vue 2 & Vuetify Advanced',
    description: 'Vue 2, Vuetify, TypeScript, Jest, TestCafe, i18n, ESLint, StyleLint, Axios',
    link: 'https://github.com/andy922200/vue-vuetify-typescript-eslint-babel-stylelint-integration',
    hide: true,
  },
  {
    name: 'gulp4withBabel7',
    header: 'Gulp 4 With Babel 7',
    description: 'Gulp 4 Automation Tool with Babel.js',
    link: 'https://github.com/andy922200/gulp4_script_with_babel7',
    hide: true,
  },
]

const displayTemplates = computed(() => templates.filter((item) => !item.hide))
</script>
