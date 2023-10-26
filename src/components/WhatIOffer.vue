<template>
  <div id="service" class="row">
    <div class="col-12">
      <h3 class="mt-6 mb-[0.625rem] mx-0 text-size-[1.625rem] sm:text-size-[2rem]">What I Offer</h3>
      <div v-for="(service, index) in services" :key="index" class="flex flex-wrap mb-[0.625rem]">
        <h4 class="mt-6 mb-[0.625rem] mx-0 w-full">{{ service.title }}</h4>
        <div
          v-for="object in service.data"
          :key="object.name"
          class="w-full md:w-[50%] lg:w-[33.33333%] text-center lg:text-left"
        >
          <font-awesome-icon
            :icon="['fas', object.iconProp]"
            class="color-#efb21e text-size-[2.5rem] line-height-[46px]"
          />
          <h3
            class="color-#003831 font-bold text-size-[1.25rem] case-capital mt-[0.875rem] mb-[0.5rem]"
          >
            {{ object.name }}
          </h3>
          <ul class="pl-0">
            <li
              v-for="item in object.items"
              :key="item"
              class="list-none color-black text-size-[1rem] line-height-[1.75rem]"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

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
          'HTML5 / CSS / RWD',
          'JavaScript / TypeScript',
          'Vue 2 & Vue 3 & Integration Templates',
          'Gulp / Webpack',
          'Chart.js / EChart',
          'Chrome Extension',
        ],
      },
      {
        name: 'Back-End',
        iconProp: 'server',
        items: ['Node.js', 'Restful API', 'MongoDB', 'MySQL'],
      },
      {
        name: 'Skills',
        iconProp: 'tasks',
        items: ['Deployment', 'Google Analytics / Marketing', 'Git & Terminal'],
      },
    ],
  },
  {
    title: 'Others',
    data: [
      {
        name: 'Natural Languages',
        iconProp: 'language',
        items: ['Chinese - Native', 'English - IELTS 6.5 / 9', 'Taiwanese - Native', 'German - B1'],
      },
      {
        name: 'Knowledge',
        iconProp: 'magnet',
        items: ['Over 1000 Posts on my blog', 'Cooperation', 'Communication', 'Microsoft Office'],
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
