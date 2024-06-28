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

          loading
        </div>

        <div v-else class="w-full md:h-[300px] relative hover:cursor-pointer">
          <img
            :src="img"
            alt=""
            class="w-full md:h-[300px] object-cover bg-cover rounded-lg"
          />
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
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594104/imgg_2_aoexjg.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594104/IMG_7633_ofg3yx.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594104/IMG_7632_btg6ry.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594103/IMG_7630_wvr7xw.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594102/IMG_7629_rxnymo.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594096/IMG_7628_xcaf6a.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594095/IMG_7626_x8xsl1.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594045/IMG_7624_e51rv8.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594120/imm_2_mpujdp.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594044/IMG_7616_gwlepf.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594044/IMG_7619_wytpbn.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594044/IMG_7617_zrbqdm.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594044/IMG_7615_wabgox.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594044/IMG_7614_yd3l69.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594044/IMG_7618_v7kzbb.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594045/IMG_7621_dshijf.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594045/IMG_7622_wgeey6.jpg",
  },
  {
    url: "https://res.cloudinary.com/dtkbcuiit/image/upload/v1719594045/IMG_7620_gygkxz.jpg",
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
