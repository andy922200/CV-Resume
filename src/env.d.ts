// / <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@jambonn/vue-concise-carousel' {
  import { Carousel, Navigation, Pagination, Slide } from '@jambonn/vue-concise-carousel'
  export { Carousel, Navigation, Pagination, Slide }
}
