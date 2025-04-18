<script setup lang="ts">
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css'

import { Carousel, Slide } from '@jambonn/vue-concise-carousel'
import { computed } from 'vue'

import useStore from '@/store'

import { images } from '../assets'

defineOptions({
  name: 'Portfolio',
})

interface Project {
  title: string
  listItems: string[]
  finished_time: string
  isFinished: boolean
  thumb_img: string
  web_url: string
  github_url: string | null
  hide?: boolean
}

const { app } = useStore()
const windowWidth = computed(() => app.windowWidth)
const projects: Project[] = [
  {
    title: 'Component Library',
    listItems: ['Vue 3', 'TypeScript', 'TypeScript', 'Prime Vue'],
    finished_time: '2025-04-18',
    isFinished: true,
    thumb_img: images.componentLibraryDemo,
    web_url: 'https://andy922200.github.io/component-library-demo/#/',
    github_url: 'https://github.com/andy922200/component-library-demo',
  },
  {
    title: 'Taiwan Motel Search',
    listItems: ['Vue 3', 'TypeScript', 'OpenLayers', 'Prime Vue 3'],
    finished_time: '2021-06-20',
    isFinished: true,
    thumb_img: images.taiwanMotelSearch,
    web_url: 'https://andy922200.github.io/search-something-platform-taiwan/#/',
    github_url: 'https://github.com/andy922200/search-something-platform-taiwan',
  },
  {
    title: 'Vue-Multi-Select',
    listItems: ['Vue 2', 'TypeScript', 'Selector', 'npm package'],
    finished_time: '2021-04-19',
    isFinished: true,
    thumb_img: images.vueMultiSelect,
    web_url: 'https://www.npmjs.com/package/@andy922200/vue-multi-select',
    github_url: 'https://github.com/andy922200/vue-multi-select',
  },
  {
    title: 'Vue-tw-zip-code-selector',
    listItems: ['Vue 3', 'TypeScript', 'npm package'],
    finished_time: '2021-04-14',
    isFinished: true,
    thumb_img: images.vueTwZipCodeSelector,
    web_url: 'https://www.npmjs.com/package/@andy922200/vue-tw-zip-code-selector',
    github_url: 'https://github.com/andy922200/vue-tw-zip-code-selector',
  },
  {
    title: 'Front-End Dev Skills',
    listItems: ['Layout', 'Template', 'Mockup'],
    finished_time: '2020-08-31',
    isFinished: true,
    thumb_img: images.websiteMockup,
    web_url: 'https://andy922200.github.io/website-template-mockup/',
    github_url: 'https://github.com/andy922200/website-template-mockup',
  },
  {
    title: 'Cocktails Collections',
    listItems: ['MySQL', 'Vue.js', 'JWT & Validation', 'Payment API'],
    finished_time: '2020-07-24',
    isFinished: false,
    thumb_img: images.cocktailsCollections,
    web_url: 'https://cocktails-collections-sml.herokuapp.com/#/',
    github_url: 'https://github.com/andy922200/Cocktails-Collections',
    hide: true,
  },
  {
    title: 'Experience Editor',
    listItems: ['MySQL', 'Vue.js', 'JWT & Validation', 'Offline Mode'],
    finished_time: '2020-07-21',
    isFinished: true,
    thumb_img: images.personalExperienceEditor,
    web_url: 'https://personal-experience-editor.herokuapp.com/',
    github_url: 'https://github.com/andy922200/personal-experience-editor',
    hide: true,
  },
  {
    title: 'TW Visa Requirement',
    listItems: ['MySQL', 'Vue.js', 'RWD Layout'],
    finished_time: '2020-02-17',
    isFinished: true,
    thumb_img: images.twVisaPassport,
    web_url: 'https://visa-requirement-tw.herokuapp.com/#/',
    github_url: 'https://github.com/andy922200/visa-requirements-for-tw-citizens',
    hide: true,
  },
  {
    title: 'Real-time Chatroom',
    listItems: ['Vue.js', 'MySQL', 'JWT & Validation'],
    finished_time: '2020-02-06',
    isFinished: true,
    thumb_img: images.chatroom,
    web_url: 'https://chatroom-sml.herokuapp.com/',
    github_url: 'https://github.com/andy922200/chatroom-nodejs-vue',
  },
  {
    title: 'Movie / Trailer Search',
    listItems: ['Vue.js', 'JavaScript', 'Fetch TMDB API'],
    finished_time: '2020-01-24',
    isFinished: true,
    thumb_img: images.movieTrailerSearch,
    web_url: 'https://tmdb-movie-database.herokuapp.com/#/',
    github_url: 'https://github.com/andy922200/Movie-Database-from-TMDB',
    hide: true,
  },
  {
    title: 'Rank Search',
    listItems: ['Google Extension', 'JavaScript'],
    finished_time: '2019-12-31',
    isFinished: true,
    thumb_img: images.rankSearch,
    web_url:
      'https://chrome.google.com/webstore/detail/alexa-and-similarweb-rank/ikompppmnedgfglopochecapchmlehle',
    github_url: 'https://github.com/andy922200/Alexa-and-similarWeb-rank',
  },
  {
    title: 'AC Drinks Shop',
    listItems: ['Basic E-commerce Web Application', 'MySQL', 'Bootstrap', 'Payment API'],
    finished_time: '2019-11-29',
    isFinished: true,
    thumb_img: images.ACDrink,
    web_url: 'https://damp-cliffs-89201.herokuapp.com/',
    github_url: 'https://github.com/F-Kibatodos/final-project',
  },
  {
    title: 'URL Shortener',
    listItems: ['Node.js', 'MongoDB', 'async/await', 'Validation'],
    finished_time: '2019-08-05',
    isFinished: true,
    thumb_img: images.urlShortener,
    web_url: 'https://mighty-river-85810.herokuapp.com/',
    github_url: 'https://github.com/andy922200/URL_shortener',
  },
  {
    title: 'Currency Converter',
    listItems: ['BootStrap', 'Axios', 'Detect IP Address'],
    finished_time: '2019-06-01',
    isFinished: true,
    thumb_img: images.foreignExchangeGadget,
    web_url: 'https://andy922200.github.io/currency-exchange-gadget/',
    github_url: 'https://github.com/andy922200/currency-exchange-gadget',
  },
  {
    title: 'Industry 4.0',
    listItems: ['Proposal for the work-flow improvement', 'Suggestion for the automation'],
    finished_time: '2017-04-30',
    isFinished: true,
    thumb_img: images.industry4gen,
    web_url: 'https://tinyurl.com/y6kyxfn8',
    github_url: null,
    hide: true,
  },
]
const displayProjects = computed(() => projects.filter((project) => !project.hide))
</script>

<template>
  <div id="portfolio" class="portfolio">
    <div class="row">
      <div class="col-12">
        <h3 class="text-size-[1.625rem] sm:text-size-8 mx-0 my-4">Portfolio</h3>
        <Carousel
          :per-page="1"
          :per-page-custom="[
            [576, 1],
            [768, 2],
            [1024, 4],
          ]"
          :mouse-drag="true"
          :navigation-enabled="windowWidth >= 576 ? true : false"
          class="m-4"
        >
          <Slide v-for="(project, index) in displayProjects" :key="index">
            <div class="card mb-[0.625rem] ml-0 mr-[0.625rem] mt-0 w-full overflow-hidden bg-white">
              <img
                :src="`${project.thumb_img}`"
                :alt="`port-folio-${index}`"
                class="portfolio-img block h-[300px] w-full object-cover"
              />

              <div class="card__body h-[300px] px-5 py-4">
                <div class="flex h-[60px] items-center justify-center">
                  <h3 class="text-size-[1.125rem] color-#003831 sm:text-size-5 font-bold">
                    {{ project.title }}
                  </h3>
                </div>
                <span
                  class="text-size-5 color-#f44336 mb-[0.625rem] ml-0 mr-[0.625rem] mt-0 inline-block font-bold"
                  :class="project.isFinished ? 'color-blue' : ''"
                  >{{ project.finished_time }}</span
                >
                <span>
                  <font-awesome-icon
                    v-if="project.isFinished"
                    :icon="['fas', 'check']"
                    class="text-size-5 color-lightGreen"
                  />
                  <font-awesome-icon
                    v-else
                    :icon="['fas', 'wrench']"
                    class="text-size-5 color-lightPink"
                  />
                </span>
                <div>
                  <ul
                    v-for="(item, subIndex) in project.listItems"
                    :key="subIndex"
                    class="font-500 text-size-4 pl-4 text-left"
                  >
                    <li>{{ item }}</li>
                  </ul>
                </div>
              </div>

              <div class="card-footer">
                <div class="row">
                  <div class="icon-circle-wrapper">
                    <a target="_blank" :href="project.web_url">
                      <font-awesome-icon :icon="['fas', 'external-link-alt']" class="icon" />
                    </a>
                  </div>
                  <div v-if="project.github_url" class="icon-circle-wrapper">
                    <a target="_blank" :href="project.github_url">
                      <font-awesome-icon :icon="['fab', 'github']" class="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-img {
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 6px #999;
    transition: all 0.5s ease-out;
  }
}

.icon {
  position: relative;
  top: 15px;
  left: 0px;
  font-size: 1.25rem;
}

.icon-circle-wrapper {
  width: 50px;
  height: 50px;
  background-color: #efb21e;
  border-radius: 50%;
  margin: 0 auto;
  a {
    color: #444444;
    &:hover {
      color: #ffffff;
    }
  }
}
</style>
