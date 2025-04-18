<script setup lang="ts">
defineOptions({
  name: 'WhatIOffer',
})

const services = [
  {
    title: 'Programming Languages',
    data: [
      {
        name: 'Front-End',
        iconProp: 'file-code',
        items: [
          'HTML5 RWD',
          'SCSS / Bootstrap / Tailwind / Emotion',
          'JavaScript / TypeScript',
          'Vue Ecosystem ( Vue2, Vue3, Pinia, i18N )',
          'Vite / Webpack / Gulp',
          'ESLint, Prettier & Pre-Commit',
          'Unit Testing',
          'Chrome Extension / NPM Packages',
        ],
      },
      {
        name: 'Back-End',
        iconProp: 'server',
        items: ['Node.js', 'MongoDB / MySQL', 'Restful API', 'Fundamental Docker'],
      },
      {
        name: 'Skills',
        iconProp: 'tasks',
        items: ['Fundamental Deployment', 'Git & Bash', 'Google Analytics / Marketing'],
      },
    ],
  },
  {
    title: 'Others',
    data: [
      {
        name: 'Natural Languages',
        iconProp: 'language',
        items: [
          'Chinese - Native',
          'English - IELTS 6.5 / 9',
          'Taiwanese - Native',
          'German - B1',
          'Japanese - N5',
        ],
      },
      {
        name: 'Knowledge',
        iconProp: 'magnet',
        items: ['Over 2000 Posts on my blog', 'Cooperation', 'Communication', 'Microsoft Office'],
      },
      {
        name: 'Certificate',
        iconProp: 'certificate',
        items: ['9 issued by TABF', '4 issued by IATA and Examination Yuan'],
      },
    ],
  },
]
</script>

<template>
  <div id="service" class="row">
    <div class="col-12">
      <h3 class="text-size-[1.625rem] sm:text-size-[2rem] mx-0 mb-[0.625rem] mt-6">What I Offer</h3>
      <div v-for="(service, index) in services" :key="index" class="mb-[0.625rem] flex flex-wrap">
        <h4 class="mx-0 mb-[0.625rem] mt-6 w-full">{{ service.title }}</h4>
        <div
          v-for="object in service.data"
          :key="object.name"
          class="w-full text-center md:w-[50%] lg:w-[33.33333%] lg:text-left"
        >
          <font-awesome-icon
            :icon="['fas', object.iconProp]"
            class="color-#efb21e text-size-[2.5rem] line-height-[46px]"
          />
          <h3
            class="color-#003831 text-size-[1.25rem] case-capital mb-[0.5rem] mt-[0.875rem] font-bold"
          >
            {{ object.name }}
          </h3>
          <ul class="pl-0">
            <li
              v-for="item in object.items"
              :key="item"
              class="color-black text-size-[1rem] line-height-[1.75rem] list-none"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
