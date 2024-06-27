<template>
  <div>
    <!-- Hero -->
    <div class="mt-20 section1">
      <HeroPage />
    </div>
    <!-- media -->
    <div class="section1">
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
    <section class="section1">
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

const sectionOne = document.querySelector(".section1");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-150px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
}, options);
observer.observe(sectionOne);
</script>
