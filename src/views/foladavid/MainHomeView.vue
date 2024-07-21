<template>
  <div class="home">
    <HeroPage />
    <AboutPage />
    <FolaFoundation />
    <AwardsPage />
    <WorksPage />
    <TalksPage />
    <FooterPage />
  </div>
</template>

<script setup lang="ts">
import HeroPage from "@/componentss/HeroPage.vue";
import AboutPage from "@/componentss/AboutPage.vue";
import WorksPage from "@/componentss/WorksPage.vue";
import FolaFoundation from "@/componentss/FolaFoundation.vue";
import AwardsPage from "@/componentss/AwardsPage.vue";
import TalksPage from "@/componentss/TalksPage.vue";
import FooterPage from "@/componentss/FooterPage.vue";
</script>

<style scoped>
.home {
  font-size: 18px;
  background-color: #0f1827;
  color: #fff;
  scroll-behavior: smooth;
}
</style>
