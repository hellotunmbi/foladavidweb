<template>
  <div class="container">
    <section
      id="project"
      class="py-10 lg:py-20 bg-cover bg-no-repeat object-left-bottom bg-[url('../images/other/bg-lines-1.svg')]"
    >
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-4xl text-center">
            <span
              class="py-1 px-3 rounded-md dark:text-white text-xs lg:text-sm font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
              >project</span
            >
            <h2
              class="text-4xl lg:text-5xl font-medium capitalize text-default-950 my-4"
            >
              The Projects
            </h2>
            <p class="text-sm md:text-base lg:text-xl w-full mt-5">
              The Unity in Diversity Project is a multifaceted initiative aimed
              at showcasing and preserving Nigeria's cultural heritage through
              three main components: a documentary journey, a world record art
              attempt, and a cultural carnival.
            </p>
          </div>
        </div>
        <div
          class="grid grid-cols-1 items-center gap-6 md:grid-cols-2 py-5 md:py-10"
        >
          <div class="group relative h-full md:h-[600px]">
            <img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809951/draw-1_yxjfif.png"
              class="h-full w-full rounded-xl"
              alt=""
            />
          </div>
          <div>
            <div class="group relative h-full md:h-[500px]">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718810313/rep-1_l0be2q.png"
                class="h-full w-full rounded-xl"
                alt=""
              />
            </div>
            <div class="group relative mt-5 h-full md:h-[500px]">
              <img
                src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718810362/unity-md_epuci8.png"
                class="h-full w-full rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-10">
          <router-link
            :to="{ name: 'project' }"
            class="inline-flex items-center hover:text-warning justify-center gap-2 text-base py-3 px-8 rounded-md text-white bg-primary/90 hover:bg-primary transition-all duration-500"
            >Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon h-6 w-6"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path></svg
          ></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ServiceType } from "@/types/landing";
</script>
