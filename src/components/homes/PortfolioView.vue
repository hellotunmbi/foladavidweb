<template>
  <section id="portfolio" class="py-10">
    <div class="flex items-end justify-between mb-10">
      <div class="max-w-2xl mx-auto text-center">
        <!-- <span class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">{{
          tag
        }}</span> -->
        <h2
          class="text-4xl lg:text-5xl font-medium capitalize text-default-950 my-4"
        >
          Media
        </h2>
      </div>
    </div>

    <div>
      <Swiper
        class="rounded-md relative"
        :modules="[Thumbs, FreeMode, Autoplay]"
        :slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }"
      >
        <SwiperSlide v-for="project in projectList" :key="project.image">
          <div class="relative group rounded-3xl overflow-hidden">
            <div class="h-full] w-full">
              <img :src="project.image" class="h-full w-full" alt="" />
            </div>
            <!-- <div class="absolute inset-0 bg-black/20"></div> -->
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";

import type { PropType } from "vue";
import type { ProjectType } from "@/types/landing";

// eslint-disable-next-line no-undef
defineProps({
  projectList: {
    type: Array as PropType<ProjectType[]>,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
