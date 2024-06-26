<template>
  <!-- Mobile Menu (Sidebar Menu) -->
  <div class="bg-white fixed top-0 pt-20 z-50 w-[250px] h-full">
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
          class="menu w-full sm:flex items-center space-y-7 justify-end relative mx-auto grow"
        >
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-primary [&.active]:text-primary"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('/') ? 'text-primary' : ''"
              to="/"
              >Home</router-link
            >
          </li>
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-primary [&.active]:text-primary"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('about') ? 'text-primary' : ''"
              to="/about"
              >About</router-link
            >
          </li>
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-primary [&.active]:text-primary"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('project') ? 'text-primary' : ''"
              to="/project"
              >Project</router-link
            >
          </li>
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-primary [&.active]:text-primary"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('media') ? 'text-primary' : ''"
              to="/media"
              >Media</router-link
            >
          </li>
          <li
            @click="closeNav"
            class="menu-item text-default-600 mx-2 transition-all duration-300 hover:text-primary [&.active]:text-primary"
          >
            <router-link
              class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
              :class="active.includes('contact') ? 'text-primary' : ''"
              to="/contact"
              >Contact Us</router-link
            >
          </li>
        </ul>
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
