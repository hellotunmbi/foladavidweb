<template>
  <!-- Mobile Menu (Sidebar Menu) -->
  <div
    class="bg-[#111927] fixed top-0 pt-20 z-50 w-[250px] h-full animate__animated animate__fadeInLeft"
  >
    <div class="h-full overflow-y-auto">
      <nav>
        <ul
          class="md:hidden flex flex-col justify-center h-full gap-10 font-light uppercase items-center"
        >
          <a href="#"
            ><li
              @click="closeNav('home')"
              class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent animate__animated animate__faster animate__lightSpeedInLeft"
              :class="active === 'home' ? 'text-accent' : ''"
            >
              Home
            </li></a
          >
          <a href="#about"
            ><li
              @click="closeNav('about')"
              class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent animate__animated animate__lightSpeedInLeft animate__faster animate__delay-2s"
              :class="active === 'about' ? 'text-accent' : ''"
            >
              About
            </li></a
          >
          <a href="#works"
            ><li
              @click="closeNav('works')"
              class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent animate__animated animate__lightSpeedInLeft animate__faster animate__delay-3s"
              :class="active === 'works' ? 'text-accent' : ''"
            >
              Works
            </li></a
          >
          <a href="#awards"
            ><li
              @click="closeNav('awards')"
              class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent animate__animated animate__lightSpeedInLeft animate__faster animate__delay-4s"
              :class="active === 'awards' ? 'text-accent' : ''"
            >
              Awards
            </li></a
          >
          <a href="#contact"
            ><li
              @click="closeNav('contact')"
              class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent animate__animated animate__lightSpeedInLeft animate__faster animate__delay-5s"
              :class="active === 'contact' ? 'text-accent' : ''"
            >
              Contact
            </li></a
          >
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const active = ref("");
const route = useRoute();

const emit = defineEmits<{
  closeModal: (s: string) => void;
}>();
// const emit = ["close-modal"];

const closeNav = (item) => {
  emit("closeModal");
  active.value = item;
};
</script>

<style scoped></style>
