<template>
  <div class="portfolio" id="portfolio">
    <div class="row">
      <div class="col-12">
        <h3 class="portfolio__title">Portfolio</h3>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(project, index) in projects"
              :key="index"
            >
              <div class="card">
                <img
                  :src="`${project.thumb_img}`"
                  :alt="`port-folio-${index}`"
                  class="card__img"
                />

                <div class="card__body">
                  <h3 class="card__body__title">{{ project.title }}</h3>
                  <div class="card-text">
                    <ul v-for="(item, index) in project.listItems" :key="index">
                      <li>{{ item }}</li>
                    </ul>
                  </div>
                  <span
                    class="card__body__finishedTime"
                    :class="
                      project.isFinished ? 'card__body__finishedTime--blue' : ''
                    "
                    >{{ project.finished_time }}</span
                  >
                  <span>
                    <font-awesome-icon
                      v-if="project.isFinished"
                      :icon="['fas', 'check']"
                      class="card-body__icon card-body__icon--check"
                    />
                    <font-awesome-icon
                      v-else
                      :icon="['fas', 'wrench']"
                      class="card-body__icon card-body__icon--wrench"
                    />
                  </span>
                </div>

                <div class="card-footer">
                  <div class="row">
                    <div class="circle">
                      <a target="_blank" :href="project.web_url">
                        <font-awesome-icon
                          :icon="['fas', 'external-link-alt']"
                          class="card-footer__icon"
                        />
                      </a>
                    </div>
                    <div class="circle">
                      <a
                        target="_blank"
                        v-if="project.github_url"
                        :href="project.github_url"
                      >
                        <font-awesome-icon
                          :icon="['fab', 'github']"
                          class="card-footer__icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SwiperInstance } from "./../utils/mixins";

export default {
  name: "Portfolio",
  mixins: [SwiperInstance],
  data() {
    return {
      projects: [
        {
          title: "Cocktails Collections",
          listItems: ["MySQL", "Vue.js", "JWT & Validation", "Payment API"],
          finished_time: "2020-07-24",
          isFinished: false,
          thumb_img: require("../assets/cocktails-collections.jpg"),
          web_url: "https://cocktails-collections-sml.herokuapp.com/#/",
          github_url: "https://github.com/andy922200/Cocktails-Collections"
        },
        {
          title: "Personal Experience Editor",
          listItems: ["MySQL", "Vue.js", "JWT & Validation", "Offline Mode"],
          finished_time: "2020-07-21",
          isFinished: true,
          thumb_img: require("../assets/PersonalExperienceEditor.jpg"),
          web_url: "https://personal-experience-editor.herokuapp.com/",
          github_url: "https://github.com/andy922200/personal-experience-editor"
        },
        {
          title: "TW Visa Requirement",
          listItems: ["MySQL", "Vue.js", "RWD Layout"],
          finished_time: "2020-02-17",
          isFinished: true,
          thumb_img: require("../assets/tw-visa-passport.gif"),
          web_url: "https://visa-requirement-tw.herokuapp.com/#/",
          github_url:
            "https://github.com/andy922200/visa-requirements-for-tw-citizens"
        },
        {
          title: "Real-time public chatroom",
          listItems: ["Vue.js", "MySQL", "JWT & Validation"],
          finished_time: "2020-02-06",
          isFinished: true,
          thumb_img: require("../assets/chatroom.gif"),
          web_url: "https://chatroom-sml.herokuapp.com/",
          github_url: "https://github.com/andy922200/chatroom-nodejs-vue"
        },
        {
          title: "Movie / Trailer Search",
          listItems: ["Vue.js", "JavaScript", "Fetch TMDB API"],
          finished_time: "2020-01-24",
          isFinished: true,
          thumb_img: require("../assets/Movie-Trailer Search.png"),
          web_url: "https://tmdb-movie-database.herokuapp.com/#/",
          github_url: "https://github.com/andy922200/Movie-Database-from-TMDB"
        },
        {
          title: "Rank Search",
          listItems: ["Google Extension", "JavaScript"],
          finished_time: "2019-12-31",
          isFinished: true,
          thumb_img: require("../assets/rank-search.png"),
          web_url:
            "https://chrome.google.com/webstore/detail/alexa-and-similarweb-rank/ikompppmnedgfglopochecapchmlehle",
          github_url: "https://github.com/andy922200/Alexa-and-similarWeb-rank"
        },
        {
          title: "AC Drinks Shop",
          listItems: [
            "Basic E-commerce Web Application",
            "MySQL",
            "Bootstrap",
            "Payment API"
          ],
          finished_time: "2019-11-29",
          isFinished: true,
          thumb_img: require("../assets/AC_Drink.jpg"),
          web_url: "https://damp-cliffs-89201.herokuapp.com/",
          github_url: "https://github.com/F-Kibatodos/final-project"
        },
        {
          title: "URL Shortener",
          listItems: ["Node.js", "MongoDB", "async/await", "Validation"],
          finished_time: "2019-08-05",
          isFinished: true,
          thumb_img: require("../assets/urlShortener.jpg"),
          web_url: "https://mighty-river-85810.herokuapp.com/",
          github_url: "https://github.com/andy922200/URL_shortener"
        },
        {
          title: "Currency Converter",
          listItems: ["BootStrap", "Axios", "Detect IP Address"],
          finished_time: "2019-06-01",
          isFinished: true,
          thumb_img: require("../assets/foreign-exchange-gadget.jpg"),
          web_url: "https://andy922200.github.io/currency-exchange-gadget/",
          github_url: "https://github.com/andy922200/currency-exchange-gadget"
        },
        {
          title: "Industry 4.0",
          listItems: [
            "Proposal for the work-flow improvement",
            "Suggestion for the automation"
          ],
          finished_time: "2017-04-30",
          isFinished: true,
          thumb_img: require("../assets/industry4gen.jpg"),
          web_url: "https://tinyurl.com/y6kyxfn8",
          github_url: null
        }
      ],
      swiperOptions: {
        effect: "coverflow",
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 0,
        coverflowEffect: {
          slideShadows: true,
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 2
        }
      }
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      this.createNewSwiper(".swiper-container", this.swiperOptions);
    }
  }
};
</script>

<style lang="scss" scoped src="../styles/Portfolio.scss"></style>
