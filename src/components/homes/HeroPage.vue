<template>
  <section
    class="mt-[20px] md:mt-[100px] max-h-full bg-cover bg-no-repeat bg-[url('../images/other/bg-lines-1.svg')] mb-5"
  >
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full order-2 md:order-1 mt-20">
        <div class="px-5 md:pl-20 space-y-5 2xl:space-y-10">
          <h1
            class="animate__animated animate__fadeInUp capitalize text-[32px] sm:text-[40px] 2xl:text-[60px] text-white font-extrabold leading-snug"
          >
            Welcome to the Unity in Diversity Project!
          </h1>
          <p
            class="animate__animated animate__fadeInUp animate__faster animate__delay-1s text-white text-sm lg:text-xl 2xl:text-2xl"
          >
            Celebrating Nigeria's rich cultural heritage and
            <br class="hidden sm:inline" />
            fostering unity through art, travel, and cultural festivities.
          </p>

          <div
            class="animate__animated animate__fadeInUp animate__faster animate__delay-2s flex gap-4 pt-4 items-center"
          >
            <router-link :to="{ name: 'project' }">
              <button
                class="capitalize bg-primary hover:text-warning px-5 md:px-10 hover:bg-primary/80 text-xs sm:text-sm 2xl:text-lg cursor-pointer text-white py-3 rounded-md"
              >
                project
              </button></router-link
            >

            <div class="w-[400px]">
              <select
                v-model="selectedLink"
                @change="navigate"
                name="tribe"
                id="tribe"
                class="w-full bg-transparent border hover:text-primary-300 border-primary-50 py-2 md:py-3 rounded-md flex justify-between items-center px-3 over:cursor-pointer"
              >
                <option value="" disabled selected>
                  Select your tribe, Generate your custom dp for free
                </option>
                <option value="https://getdp.co/Xyi">Fulani</option>
                <option value="https://getdp.co/XyV">Hausa</option>
                <option value="https://getdp.co/Xyq">Yoruba</option>
                <option value="https://getdp.co/Xyo">Igbo</option>
                <option value="https://getdp.co/Xyj">Ibibio</option>
                <option value="https://getdp.co/XyX">Ijaw</option>
                <option value="https://getdp.co/Xyp">kanuri</option>
                <option value="https://getdp.co/XyL">Tiv</option>
              </select>
            </div>
          </div>

          <div class="pt-10 md:pt-20">
            <CountDown />
          </div>
        </div>
      </div>
      <div class="w-full max-w-full md:max-w-[50%] max-h-[50%] order-2">
        <Swiper
          class="mySwiper"
          :modules="[Navigation, Thumbs, FreeMode, Autoplay]"
          :thumbs="{ swiper: thumbsSwiper }"
          :loop="true"
          :autoplay="{ delay: 5000 }"
          :slides-Per-View="1"
        >
          <SwiperSlide>
            <div class="">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809950/img-1_ga1hfy.jpg"
                alt=""
                class="h-[700px] 2xl:h-[1000px] bg-contain object-scale-down w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1719527909/IMG_4427_wxptno.jpg"
                alt=""
                class="h-[700px] 2xl:h-[1000px] bg-contain object-scale-down w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720134934/oju4_lkwaip_potr_z12cgc.jpg"
                alt=""
                class="h-[700px] 2xl:h-[1000px] bg-contain object-scale-down w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809950/img-2_ov4sro.jpg"
                alt=""
                class="h-[700px] 2xl:h-[1000px] bg-contain object-scale-down w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720132794/kanuri_qtph8d.jpg"
                alt=""
                class="h-[700px] 2xl:h-[1000px] bg-contain object-scale-down w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720134155/oju6_kfttc9_c_crop_ar_3_4_bvx8gq.jpg"
                alt=""
                class="h-[700px] 2xl:h-[1000px] bg-contain object-scale-down w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1719527909/IMG_3634_dubryo.jpg"
                alt=""
                class="h-[700px] 2xl:h-[1000px] bg-contain object-scale-down w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720132794/efik_pc8oot.jpg"
                alt=""
                class="h-[700px] 2xl:h-[1000px] bg-contain object-scale-down w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1719529146/imgg_yqip5o.jpg"
                alt=""
                class="h-[700px] 2xl:h-[1000px] bg-contain object-scale-down w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Popper from "vue3-popper";
import { ArrowUpRightIcon } from "lucide-vue-next";
import CountDown from "@/components/CountDown.vue";
// import { tribes } from "@/utilities/tribes";

import { Swiper, SwiperSlide } from "swiper/vue";
import {
  FreeMode,
  Thumbs,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import type { Swiper as SwiperType } from "swiper/types";
import { ref } from "vue";

const selectedLink = ref("");

const navigate = () => {
  if (selectedLink.value) {
    window.open(selectedLink.value, "_blank");
  }
  selectedLink.value = "";
};

const thumbsSwiper = ref<SwiperType | null>(null);
const setThumbsSwiper = (swiper: SwiperType) => {
  return (thumbsSwiper.value = swiper);
};
</script>
