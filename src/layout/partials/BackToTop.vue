<template>
  <div class="fixed bottom-5 end-5 z-40 flex flex-col items-center gap-1">
    <!-- Back to Top -->
    <button
      class="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-warning/20 text-warning shadow-[inset_0px_0px_12px_0px] shadow-warning/40 backdrop-blur-3xl transition-all duration-500"
      :class="{ 'translate-x-16': !isButtonVisible }"
      @click="backToTop"
    >
      <ChevronUpIcon class="h-4 w-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon, ChevronUpIcon } from "lucide-vue-next";
import { onMounted, ref } from "vue";

const backToTop = (e: any) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

let isButtonVisible = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 72) {
      isButtonVisible.value = true;
    } else {
      isButtonVisible.value = false;
    }
  });
});
</script>
