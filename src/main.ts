import { library } from '@fortawesome/fontawesome-svg-core'
// import Vue-Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import router from '@/router'

import App from './App.vue'
import { icons } from './plugins/fortawesome'
library.add(icons)

// import Bootstrap 5
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// Add UnoCSS
import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia()).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
