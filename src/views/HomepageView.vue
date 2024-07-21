<template>
  <section class="relative">
    <div>
      <!-- Navigation -->
      <Navbar
        :navDrawer="navDrawer"
        @close-modal="closeNav"
        @open-modal="openNav"
        @openPhoto="openModal"
        :btn-icon="DownloadCloudIcon"
      />

      <div v-if="navDrawer" class="">
        <SideNav @close-modal="closeNav" />
      </div>

      <div class="max-w-[100%]">
        <RouterView />
      </div>

      <!-- Footer -->
      <Footer />
      <BackToTop />
    </div>
  </section>
</template>

<script setup lang="ts">
import SideNav from "@/layout/partials/SideNav.vue";
import Navbar from "@/layout/partials/Navbar1.vue";
import Footer from "@/layout/partials/Footer.vue";
import { RouterView } from "vue-router";
import { ref, onUnmounted } from "vue";
// import type { NavbarLinkType } from "@/types/layout";
import BackToTop from "@/layout/partials/BackToTop.vue";

import { DownloadCloudIcon } from "lucide-vue-next";

const navDrawer = ref(false);
const modal = ref(false);
const loading = ref(false);

const openNav = () => {
  navDrawer.value = true;
};
const closeNav = () => {
  navDrawer.value = false;
};
const openModal = () => {
  modal.value = true;
};

const closeModal = () => {
  modal.value = false;
};
</script>
