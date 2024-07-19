<template>
  <div>
    <!-- Hero -->
    <div class="mt-10 md:mt-20">
      <HeroPage />
    </div>

    <div>
      <div class="py-10 md:py-20 flex justify-center">
        <!-- <h3 class="pb-2">Finish Time</h3> -->
        <CountDown />
      </div>
      <!-- <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/DVoKWWfymYk?si=am_cLjcxQdx7kmPs&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      > -->

      <iframe
        width="100%"
        height="600"
        src="https://www.youtube-nocookie.com/embed/DVoKWWfymYk?rel=0&modestbranding=0&showinfo=0&disablekb=1&si=am_cLjcxQdx7kmPs&amp;controls=0&rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <!-- media -->
    <div class="mt-10">
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

    <SponsorView />

    <!-- Join hands -->
    <section class="">
      <JoinHands />
    </section>

    <!--partners  -->
    <section>
      <MarqueeGroup />
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroPage from "@/components/homes/HeroPage.vue";
import CountDown from "@/components/CountDown.vue";
import MarqueeGroup from "@/components/MarqueeGroup.vue";
import VideoComp from "@/components/VideoComp.vue";
import AboutView from "@/components/homes/AboutView.vue";
import SponsorView from "@/components/homes/SponsorView.vue";
import JoinHands from "@/components/homes/JoinHands.vue";
import ProjectView from "@/components/homes/ProjectView.vue";
import MediaView from "@/components/homes/MediaView.vue";
</script>
