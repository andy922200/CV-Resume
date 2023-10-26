<template>
  <div id="service" class="what-I-Offer">
    <div class="row">
      <div class="col-12">
        <h3 class="what-I-Offer__title">What I Offer</h3>
        <div v-for="(service, index) in services" :key="index" class="service-wrapper">
          <h4 class="what-I-Offer__subtitle">{{ service.title }}</h4>
          <div v-for="object in service.data" :key="object.name" class="service-content">
            <font-awesome-icon :icon="['fas', object.iconProp]" class="service-content__icon" />
            <h3>{{ object.name }}</h3>
            <ul>
              <li v-for="item in object.items" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
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

<style lang="scss" scoped src="../styles/WhatIOffer.scss"></style>
