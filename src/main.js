import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Vue-Font-Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faWordpressSimple,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import {
  faInbox,
  faFileCode,
  faServer,
  faTasks,
  faLanguage,
  faMagnet,
  faCertificate,
  faExternalLinkAlt,
  faCheck,
  faWrench,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faWordpressSimple,
  faLinkedinIn,
  faInbox,
  faFileCode,
  faServer,
  faTasks,
  faLanguage,
  faMagnet,
  faCertificate,
  faExternalLinkAlt,
  faCheck,
  faWrench,
  faArrowUp
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
// import Bootstrap-Vue
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

// import VueCarousel
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

// import AOS
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
