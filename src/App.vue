<template>
  <section class="relative">
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

    <RouterView />

    <!-- Footer -->
    <Footer />
    <BackToTop />
  </section>

  <div v-if="modal">
    <GeneratePhoto @close-modal="closeModal" />
  </div>
</template>

<script setup lang="ts">
import SideNav from "@/layout/partials/SideNav.vue";
import Navbar from "@/layout/partials/Navbar1.vue";
import { RouterView } from "vue-router";
import { ref } from "vue";
// import type { NavbarLinkType } from "@/types/layout";
import BackToTop from "@/layout/partials/BackToTop.vue";
import Footer from "@/layout/partials/Footer.vue";
import GeneratePhoto from "@/components/GeneratePhoto.vue";

import { DownloadCloudIcon } from "lucide-vue-next";

const navDrawer = ref(false);
const modal = ref(false);

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
