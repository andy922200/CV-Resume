<template>
  <div class="row">
    <h3 class="mx-0 my-5 text-size-[1.625rem] sm:text-size-[2rem] w-full">NPM Packages</h3>

    <div v-for="item in displayPackages" :key="item.title" class="p-1 col-md-6">
      <div class="card">
        <div class="card-header bg-#CC3534 border-#CC3534 text-white">
          {{ item.title }}
        </div>
        <div class="card-body">
          <div class="h-[60px]">
            {{ item.description }}
          </div>

          <a :href="item.link" target="_blank" class="btn border-#CC3534 text-#CC3534">
            <font-awesome-icon :icon="['fab', 'npm']" class="card-footer__icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Package',
})

interface Package {
  title: string
  description: string
  link: string
  hide?: boolean
}

const displayPackages: Package[] = [
  {
    title: 'Parse Localized Number',
    description:
      'An npm package for number formatting and parsing based on different browser region settings.',
    link: 'https://www.npmjs.com/package/parse-localized-number',
  },
  {
    title: 'Vue-tw-zip-code-selector',
    description: 'A Taiwan-Zip-Code-Selector via Vue 3.0 & TypeScript',
    link: 'https://www.npmjs.com/package/@andy922200/vue-tw-zip-code-selector',
  },
  {
    title: 'Vue Multi Select',
    description:
      '以 Vue 2 和 TypeScript 為基底的簡易選擇器 A Vue-Multi-Select via Vue 2.0 & TypeScript',
    link: 'https://www.npmjs.com/package/@andy922200/vue-multi-select',
  },
]
</script>
