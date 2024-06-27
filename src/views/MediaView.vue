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
      <div v-for="(img, idx) in images" :key="idx">
        <div v-if="loading">
          <SkeletonCard />
        </div>

        <div class="h-full w-full">
          <img :src="img" alt="" class="h-full w-full bg-cover rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SkeletonCard from "@/layout/partials/SkeletonCard.vue";
import { ref, onMounted } from "vue";

const medias = ref([
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809950/img-1_ga1hfy.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809953/img-3_ehucvz.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809950/img-2_ov4sro.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809960/img-4_ak3jdt.jpg",
  },
]);
const loading = ref(false);
const images = ref();

const getAllImages = () => {
  let imgs;
  loading.value = true;
  imgs = medias.value.map((img) => img.url);
  images.value = imgs;
  loading.value = false;
};

onMounted(() => {
  getAllImages();
});
</script>
