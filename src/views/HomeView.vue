<template>
  <div>
    <!-- Hero -->
    <div class="mt-10 md:mt-20">
      <HeroPage />
    </div>
    <!-- media -->
    <div class="">
      <MediaView />
    </div>

    <!-- About -->
    <div class="py-20">
      <AboutView />
    </div>

    <div>
      <VideoComp />
    </div>

    <!-- Project -->
    <div class="py-10">
      <ProjectView />
    </div>

    <!-- Join hands -->
    <section class="">
      <JoinHands />
    </section>

    <!--partners  -->
    <section>
      <SponsorView />
      <MarqueeGroup />
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroPage from "@/components/homes/HeroPage.vue";
import MarqueeGroup from "@/components/MarqueeGroup.vue";
import VideoComp from "@/components/VideoComp.vue";
import AboutView from "@/components/homes/AboutView.vue";
import SponsorView from "@/components/homes/SponsorView.vue";
import JoinHands from "@/components/homes/JoinHands.vue";
import ProjectView from "@/components/homes/ProjectView.vue";
import MediaView from "@/components/homes/MediaView.vue";
</script>
