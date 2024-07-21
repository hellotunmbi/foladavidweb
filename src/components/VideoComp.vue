<template>
  <section class="relative">
    <div class="mx-auto h-[400px] md:h-[800px] w-full shadow-lg">
      <img
        src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809961/img-6_fjfccz.jpg"
        class="h-full w-full bg-cover bg-center object-cover"
        alt=""
      />
    </div>
    <div
      class="absolute top-0 right-0 left-0 flex justify-center flex-col gap-5 md:gap-8 items-center h-full bg-[#333] inset-0 bg-opacity-70"
    >
      <div
        @click="openModal"
        class="w-[120px] h-[120px] text-white text-2xl font-extrabold cursor-pointer bg-white rounded-full flex justify-center items-center"
      >
        <p class="p-5 text-center capitalize text-primary relative inline-flex">
          ▶️
        </p>
      </div>
    </div>
    <div class="space-y-3 absolute bottom-4 right-4">
      <p class="font-medium text-xs md:text-base">
        Join Dr. Foladavid <br />
        On Social Media
      </p>
      <img
        src="@/assets/images/qr.svg"
        class="h-[100px] md:h-[150px] bg-white w-[100px] md:w-[150px]"
        alt=""
      />
    </div>
  </section>
  <div
    v-if="show"
    className="z-50 h-full pt-28 fixed card w-full bg-[#000] bg-opacity-95 overflow-y-auto inset-0 outline-none focus:outline-none"
  >
    <div class="flex justify-end items-center m-4">
      <p
        @click="closeModal"
        class="px-4 py-2 bg-default-400 text-lg hover:bg-primary rounded-full cursor-pointer"
      >
        x
      </p>
    </div>
    <div class="max-w-[90%] max-h-[40vh] px-3 mx-auto">
      <video
        width="100%"
        height="400px"
        class="max-h-[600px] max-w-full"
        controls
        autoplay
      >
        <source
          src="https://res.cloudinary.com/dtkbcuiit/video/upload/v1718813098/vid_cl6qjr.mp4"
        />
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const openModal = () => {
  show.value = true;
};
const closeModal = () => {
  show.value = false;
};
</script>

<style scoped></style>
