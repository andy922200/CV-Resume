import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

// import Vue-Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { icons } from './plugins/fortawesome'
library.add(icons)

// import Bootstrap 5
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(createPinia()).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
