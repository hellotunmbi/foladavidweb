<template>
  <section class="pt-10 md:py-20" ref="scrollRef">
    <div class="container2">
      <div class="flex items-end justify-center">
        <div
          class="animate__animated animate__fadeInUp animate__delay-2s text-center"
        >
          <span
            class="py-1 px-3 rounded-md text-white text-xs lg:text-sm font-medium uppercase tracking-wider border border-primary bg-warning/30"
            >About</span
          >
          <h2
            class="text-4xl lg:text-5xl font-medium capitalize text-white mt-4"
          >
            About Us
          </h2>
        </div>
      </div>

      <div
        class="grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10 mt-5 md:mt- items-center"
      >
        <div
          class="rounded-lg h-full w-full animate__animated animate__zoomIn animate__delay-2s"
        >
          <img
            src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809977/map_ybak4n.png"
            alt=""
            class="w-full h-full object-cover object-top rounded-lg"
          />
        </div>

        <div class="space-y-5">
          <h3
            class="text-2xl text-accent-shades font-medium animate__animated animate__fadeInUp animate__delay-2s"
            :class="
              anime
                ? 'animate__animated animate__fadeInUp animate__delay-2s'
                : ''
            "
          >
            The Unity in Diversity Project
          </h3>
          <p class="animate__animated animate__fadeInUp animate__delay-3s">
            <span class="text-sm md:text-base">
              Welcome to the Unity in Diversity Project, an inspiring initiative
              led by Dr. Foladavid in collaboration with Tolaram Group. Our
              mission is to celebrate and promote the rich cultural diversity of
              Nigeria, fostering unity and understanding through artistic
              expression, cultural exploration, and communal festivities.
            </span>
          </p>

          <div class="animate__animated animate__fadeInUp animate__delay-4s">
            <p class="text-lg text-default-500">
              The project unfolds in three compelling phases:
            </p>
          </div>

          <ul
            class="space-y-6 px-5 animate__animated animate__fadeInUp animate__delay-5s"
          >
            <li class="list-disc list-warning list-outside">
              <p class="text-sm md:text-lg text-warning font-bold">
                Road to Record
              </p>
            </li>
            <li class="list-disc list-warning list-outside">
              <p class="text-sm md:text-lg text-warning font-bold">
                World Record Attempt
              </p>
            </li>
            <li class="list-disc list-warning list-outside">
              <p class="text-sm md:text-lg text-warning font-bold">
                #RepYourTribe Carnival
              </p>
            </li>
          </ul>

          <div
            class="flex mt-10 animate__animated animate__fadeInUp animate__delay-5s"
          >
            <router-link
              :to="{ name: 'about' }"
              class="inline-flex items-center text-xs md:text-base hover:text-warning justify-center gap-2 py-3 px-8 rounded-md text-white bg-primary/90 hover:bg-primary transition-all duration-500"
              >Read More
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ComponentIcon, LayersIcon, Diamond } from "lucide-vue-next";

import { ref, onMounted, onUnmounted } from "vue";

const observer = ref({
  rootMargin: "-100px 0px 0px 0px",
});
const scrollRef = ref({});
const anime = ref();

const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
  entries.forEach((entry) => {
    anime.value = entry.intersecting;
  });
  sectionObserver.observe(scrollRef.value);
});
</script>
