<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Main Navigation Menu -->
  <header
    class="inset-x-0 top-0 z-60 transition-all duration-500 py-3 shadow-2xl bg-gradient-to-r from-[#181630] via-[#032136] to-[#181630] fixed"
  >
    <section class="container2 flex items-center justify-between gap-4">
      <div class="">
        <div class="flex gap-2 items-center">
          <!-- Navbar Brand Logo -->
          <router-link :to="{ name: 'home' }">
            <img :src="logoLight" alt="logo" class="h-12 md:h-24 dark:flex" />
          </router-link>
        </div>
      </div>

      <!-- Navigation Menu -->
      <div>
        <ul
          class="menu sm:flex items-center justify-end hidden relative mx-auto grow"
        >
          <li
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-warning [&.active]:text-warning"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('home') ? 'text-warning' : ''"
              :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li
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
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-warning [&.active]:text-warning"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('contact') ? 'text-warning' : ''"
              :to="{ name: 'contact' }"
              >Contact Us</router-link
            >
          </li>
        </ul>
      </div>

      <div>
        <div
          :class="active.includes('photo')"
          @click="openPhotoModal"
          class="group hidden md:inline-flex items-center justify-center gap-2 rounded-full border border-default-400 px-1 py-1 pe-4 text-default-950 transition-all duration-300 hover:bg-warning-600 hover:text-white cursor-pointer"
        >
          <span
            class="me-2 flex h-11 w-11 items-center justify-center text-xs rounded-full bg-warning/20 text-warning transition-all duration-300 group-hover:bg-white group-hover:text-black"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-image-icon h-5 w-5"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg
          ></span>
          <span class="text-xs sm:text-sm"
            >Generate your custom dp for free</span
          >
        </div>
        <MenuIcon
          v-if="!navDrawer"
          @click="openNav"
          class="w-7 h-7 text-default-600 hover:text-default-900 sm:hidden"
        />

        <X
          v-else
          @click="closeNav"
          class="w-7 h-7 text-default-600 hover:text-default-900 sm:hidden"
        />
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
import logoLight from "@/assets/images/logo-light.png";
import logoDark from "@/assets/images/logo-dark.png";

import { MenuIcon, X, ChevronDownIcon } from "lucide-vue-next";

import { ref } from "vue";
import type { PropType, defineEmits } from "vue";
import type { NavbarLinkType } from "@/types/layout";

import { navbarLinkData } from "@/utilities/layout";

import { type FunctionalComponent, onMounted, computed } from "vue";
import gumshoeMin from "gumshoejs";
import { useRoute } from "vue-router";

// eslint-disable-next-line no-undef
defineProps({
  btnIcon: {
    type: Function as PropType<FunctionalComponent>,
  },
  navDrawer: {
    type: Boolean,
  },
  menuPosition: {
    type: String,
    default: "sticky",
  },
});
const emit = defineEmits<{
  openModal: (s: string) => void;
  openPhoto: (s: string) => void;
  closeModal: (s: string) => void;
}>();

const route = useRoute();

const active = computed(() => route.path);

const openNav = () => {
  emit("openModal");
};
const openPhotoModal = () => {
  emit("openPhoto");
};
const closeNav = () => {
  emit("closeModal");
};

// const initStickyNav = () => {
//   const windowScroll = () => {
//     const navbar = document.getElementById("navbar");
//     if (navbar) {
//       if (
//         document.body.scrollTop >= 75 ||
//         document.documentElement.scrollTop >= 75
//       ) {
//         navbar.classList.add("nav-sticky");
//       } else {
//         navbar.classList.remove("nav-sticky");
//       }
//     }
//   };

//   window.addEventListener("scroll", (ev) => {
//     ev.preventDefault();
//     windowScroll();
//   });
// };
</script>
