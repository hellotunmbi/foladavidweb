<template>
  <div class="py-20 container2">
    <div>
      <h3
        class="py-10 pb-5 md:pt-20 text-2xl md:text-3xl text-center uppercase text-warning"
      >
        media and Gallery
      </h3>
    </div>

    <div class="flex items-center gap-5 py-5 md:py-10 w-full">
      <div class="">
        <button
          @click="tabs(1)"
          class="capitalize px-5 py-1.5 rounded-xl hover:bg-warning hover:text-white"
          :class="
            active == 1 ? 'bg-warning text-primary' : 'text-primary bg-white'
          "
        >
          ojude oba festival in Ijebuland
        </button>
      </div>
      <div class="">
        <button
          @click="tabs(2)"
          class="px-5 py-1.5 rounded-xl hover:bg-warning hover:text-white"
          :class="
            active == 2 ? 'bg-warning text-primary' : 'text-primary bg-white'
          "
        >
          The Journey
        </button>
      </div>
      <!-- <div class="">
        <button
          @click="tabs(3)"
          class="text-primary bg-white px-5 py-1.5 rounded-xl hover:bg-warning hover:text-white"
          :class="active === 3 ? 'bg-warning text-primary' : ''"
        >
          Tab 3
        </button>
      </div>
      <div class="">
        <button
          @click="tabs(4)"
          class="text-primary bg-white px-5 py-1.5 rounded-xl hover:bg-warning hover:text-white"
          :class="active == 4 ? 'bg-warning text-primary' : ''"
        >
          Tab 4
        </button>
      </div>
      <div class="">
        <button
          @click="tabs(5)"
          class="text-primary bg-white px-5 py-1.5 rounded-xl hover:bg-warning hover:text-white"
          :class="active == 5 ? 'bg-warning text-primary' : ''"
        >
          Tab 5
        </button>
      </div> -->
    </div>

    <div v-if="tab === 1">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div v-for="(img, idx) in ojudeImages" :key="idx" class="relative">
          <div v-if="loading">
            <SkeletonCard />

            loading
          </div>

          <div
            v-else
            class="w-full md:h-[300px] relative animate__animated animate__zoomIn"
          >
            <img
              :src="img"
              alt=""
              class="w-full md:h-[300px] object-cover bg-cover rounded-lg"
            />

            <div
              class="absolute z-50 inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
            >
              <button
                @click="() => showImg(index)"
                class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="ojudeImages"
        :index="indexRef"
        @hide="onHide"
      ></vue-easy-lightbox>
    </div>

    <div v-if="tab === 2">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div v-for="(img2, idx) in images" :key="idx" class="relative">
          <div v-if="loading">
            <SkeletonCard />

            loading
          </div>

          <div
            v-else
            class="w-full md:h-[300px] relative animate__animated animate__zoomIn"
          >
            <img
              :src="img2"
              alt=""
              class="w-full md:h-[300px] object-cover bg-cover rounded-lg"
            />

            <div
              class="absolute z-50 inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
            >
              <button
                @click="() => showImg(index)"
                class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="images"
        :index="indexRef"
        @hide="onHide"
      ></vue-easy-lightbox>
    </div>

    <!--  -->
    <div v-if="tab === 3">tab-3</div>
    <div v-if="tab === 4">tab-4</div>
    <div v-if="tab === 5">tab-5</div>
  </div>
</template>

<script setup lang="ts">
import SkeletonCard from "@/layout/partials/SkeletonCard.vue";
import { ref, onMounted } from "vue";
import { medias, ojude } from "@/utilities/medias";

const visibleRef = ref(false);
const indexRef = ref(0);
const meds = ref(medias);
const ojudes = ref(ojude);
const loading = ref(false);
const images = ref();
const ojudeImages = ref();
const tab = ref(1);
const active = ref(1);

const getAllOjudes = () => {
  let imgs;

  loading.value = true;
  imgs = ojudes.value.map((img) => img.url);
  ojudeImages.value = imgs;

  loading.value = false;
};

const getAllImages = () => {
  let imgs;

  loading.value = true;
  imgs = meds.value.map((img) => img.url);
  images.value = imgs;

  loading.value = false;
};

const tabs = (picTab: any) => {
  tab.value = picTab;
  active.value = picTab;
};

const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

onMounted(() => {
  getAllOjudes();
  getAllImages();
});
</script>
