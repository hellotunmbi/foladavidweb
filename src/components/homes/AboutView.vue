<template>
  <div>
    <section class="pt-10 md:py-20">
      <div class="container2">
        <div class="flex items-end justify-between">
          <div class="">
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
          class="grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10 mt-5 md:mt-10 items-center"
        >
          <div class="rounded-lg h-full w-full">
            <img
              src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809977/map_ybak4n.png"
              alt=""
              class="w-full h-full object-cover object-top rounded-lg"
            />
          </div>

          <div class="space-y-8">
            <h2 class="text-3xl text-accent-shades font-medium">
              The Unity in Diversity Project
            </h2>
            <p class="text-sm 2xl:text-base">
              Welcome to the Unity in Diversity Project, an inspiring initiative
              led by Dr. Foladavid in collaboration with Tolaram Group. Our
              mission is to celebrate and promote the rich cultural diversity of
              Nigeria, fostering unity and understanding through artistic
              expression, cultural exploration, and communal festivities.
            </p>

            <div>
              <p class="text-lg text-default-500">
                The project unfolds in three compelling phases:
              </p>
            </div>

            <ul class="space-y-6 px-5">
              <li class="list-disc list-warning list-outside">
                <p class="text-lg text-warning font-bold">Road to Record</p>
              </li>
              <li class="list-disc list-warning list-outside">
                <p class="text-lg text-warning font-bold">
                  World Record Attempt
                </p>
              </li>
              <li class="list-disc list-warning list-outside">
                <p class="text-lg text-warning font-bold">
                  #RepYourTribe Carnival
                </p>
              </li>
            </ul>

            <div class="flex mt-10">
              <router-link
                to="/about"
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ComponentIcon, LayersIcon, Diamond } from "lucide-vue-next";
</script>
