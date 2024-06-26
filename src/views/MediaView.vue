<template>
  <div class="py-20 container2">
    <div>
      <h3
        class="py-10 md:py-20 text-2xl md:text-3xl text-center uppercase text-warning"
      >
        media and Gallery
      </h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div><SkeletonCard /></div>
      <div><SkeletonCard /></div>
      <div><SkeletonCard /></div>
      <div><SkeletonCard /></div>
      <div><SkeletonCard /></div>
      <div><SkeletonCard /></div>
      <div><SkeletonCard /></div>
      <div><SkeletonCard /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SkeletonCard from "@/layout/partials/SkeletonCard.vue";
</script>

<style lang="sass" scoped></style>
