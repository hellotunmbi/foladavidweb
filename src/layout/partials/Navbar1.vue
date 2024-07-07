<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Main Navigation Menu -->
  <header
    class="inset-x-0 top-0 left-0 right-0 z-50 py-3 shadow-2xl bg-gradient-to-r from-[#181630] via-[#032136] to-[#181630] fixed"
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
              :class="active.includes('ethnics') ? 'text-warning' : ''"
              :to="{ name: 'ethnics' }"
              >Tribes</router-link
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

      <div class="flex gap-3 items-center">
        <popper hover>
          <button
            class="rounded-xl inline-flex text-xs border border-default-400 px-3 py-2 text-default-950 md:text-sm transition-all duration-300 bg-primary-900 hover:bg-warning-600 hover:text-white cursor-pointer"
          >
            Register
          </button>
          <template #content>
            <div class="bg-primary border p-2 rounded-md space-y-2 text-white">
              <div class="hover:text-warning-600 py-2 border-b-[0.5px] text-sm">
                <a
                  href="https://forms.gle/qk396PCqh9RTKDvS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Register to volunteer</a
                >
              </div>
              <div class="hover:text-warning-600 py-2 text-sm">
                <a
                  href="https://forms.gle/g6BeVsuJWQ6ZPQVHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Register to attend for free</a
                >
              </div>
            </div>
          </template>
        </popper>

        <div>
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
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
import logoLight from "@/assets/images/logo-light.png";
import logoDark from "@/assets/images/logo-dark.png";
import Popper from "vue3-popper";
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
