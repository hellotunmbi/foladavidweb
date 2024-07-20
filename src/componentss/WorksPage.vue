<template>
  <section id="works" class="my-[70px] md:my-[140px]">
    <div class="max-w-[100%] mx-auto w-[80%]">
      <h3 class="text-4xl md:text-7xl opacity-20 font-bold text-end">Works</h3>

      <div class="mt-10">
        <swiper
          :spaceBetween="30"
          :slidesPerView="1"
          :centeredSlides="true"
          :loop="true"
          :autoplay="{
            delay: 1000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }"
          :navigation="false"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087217/impart-fola-david-abija_vyz4hj.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087216/DXHU4U7WAAA7CPO_oev80n.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>

          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087216/EzF2Ib1XAAAiQcx_v4c8om.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087215/6682201-HSC00002-7_xppfjj.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087215/impart-fola-david-the-watchman-2019_rxi8ae.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087215/077ccb0cbbb930f2401a8ace3ab752bf_qyazpw.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087215/EKTNhQWWkAA6qzj_tszphu.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087215/8213121-AVEJYVLO-6_n6s0q6.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087217/impart-fola-david-sarah-2017_suqshk.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720087216/phot_rlsw2p.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt=""
          /></swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  border-radius: 20px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
