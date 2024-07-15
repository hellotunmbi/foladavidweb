<template>
  <!-- Mobile Menu (Sidebar Menu) -->
  <div
    class="bg-gradient-to-r from-[#181630] via-[#032136] to-[#181630] fixed top-0 pt-20 z-50 w-[250px] h-full"
  >
    <!-- <div
      @click="closeNav"
      class="flex justify-end items-center mr-2 border-default-200 h-16 transition-all duration-300"
    >
      <p class="bg-primary py-2 px-4 rounded-full">X</p>
    </div> -->
    <div class="h-full overflow-y-auto">
      <nav
        class="hs-accordion-group p-4 w-full h-full flex flex-col gap-6 flex-wrap"
      >
        <!-- Navigation Menu -->
        <ul
          class="menu w-full items-center space-y-7 justify-end relative mx-auto grow"
        >
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-warning [&.active]:text-warning"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('/') ? 'text-warning' : ''"
              :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-warning [&.active]:text-warning"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('about') ? 'text-warning' : ''"
              :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-warning [&.active]:text-warning"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('ethnics') ? 'text-warning' : ''"
              :to="{ name: 'ethnics' }"
              >Tribes</router-link
            >
          </li>
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-warning [&.active]:text-warning"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('project') ? 'text-warning' : ''"
              :to="{ name: 'project' }"
              >Project</router-link
            >
          </li>
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-warning [&.active]:text-warning"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('media') ? 'text-warning' : ''"
              :to="{ name: 'media' }"
              >Media</router-link
            >
          </li>
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-warning [&.active]:text-warning"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('contact') ? 'text-warning' : ''"
              :to="{ name: 'contact' }"
              >Contact Us</router-link
            >
          </li>

          <div class="md:hidden">
            <a href="/brochure.pdf" download="World Record Bronchure">
              <button
                class="border rounded-md border-primary-400 p-2 text-xs sm:text-sm hover:bg-primary-900/20"
              >
                Download Bronchure
              </button></a
            >
          </div>
        </ul>
        <a
          href="https://forms.gle/g6BeVsuJWQ6ZPQVHA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="rounded-md inline-flex text-xs border border-default-400 px-3 py-2 text-default-950 md:text-sm transition-all duration-300 bg-primary-900 hover:bg-warning-600 hover:text-white cursor-pointer"
          >
            Register
          </button></a
        >
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoLight from "@/assets/images/logo-light.png";
import logoDark from "@/assets/images/logo-dark.png";
import { ref, defineEmits } from "vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const emit = defineEmits<{
  closeModal: (s: string) => void;
}>();
// const emit = ["close-modal"];

const closeNav = () => {
  emit("closeModal");
};

const active = computed(() => route.path);
</script>

<style scoped></style>
