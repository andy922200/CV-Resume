import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

export const SwiperInstance = {
  methods: {
    createNewSwiper(idName, options) {
      return new Swiper(idName, options);
    }
  }
};
