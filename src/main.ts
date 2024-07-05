import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import VueEasyLightbox from "vue-easy-lightbox";

import "animate.css";
import "preline/preline";
import "lucide";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/assets/css/icons.css";
import "@/assets/css/style.css";

createApp(App)
  .use(createPinia())
  .use(VueEasyLightbox)
  .use(router)
  .mount("#app");
