<template>
  <div
    className="z-60 fixed rounded-0 w-full bg-[#000] bg-opacity-80 overflow-y-auto inset-0 outline-none focus:outline-none"
  >
    <div class="flex justify-end m-3">
      <span
        @click="closeModal"
        class="px-3.5 py-1.5 bg-primary hover:bg-primary-600 hover:bg-success-shades rounded-full cursor-pointer"
      >
        x
      </span>
    </div>
    <!-- Donate to us -->
    <section
      class="md:w-[80%] card mx-auto border shadow-lg shadow-default-300 rounded-2xl p-10 mt-10 md:mt-20"
    >
      <div class="text-center">
        <h3 class="text-3xl md:text-4xl font-bold">
          DONATE TO FOLADAVID CARE FOUNDATION
        </h3>
        <p class="text-sm sm:text-base pt-3">
          Read more about FolaDavid Care Foundation
          <a
            href="http://www.foladavidfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <span
            class="underline underline-offset-4 text-warning-200 hover:text-primary-300 cursor-pointer font-bold"
          >
            READ MORE
          </span>
        </p>
      </div>
      <section
        class="flex flex-col md:flex-row gap-10 md:gap-20 items-center py-5 md:py-20"
      >
        <div class="w-full">
          <div class="mt-10 mx-auto">
            <div class="mt-5 md:mt-10 space-y-1 text-center">
              <p class="text-warning">Account Name</p>
              <p class="text-xl md:text-3xl font-medium">
                FOLADAVID CARE FOUNDATION
              </p>
            </div>

            <div class="mt-5 md:mt-10 space-y-1 text-center">
              <p class="text-warning">Bank Account Name</p>
              <p class="text-xl md:text-3xl font-medium">PROVIDUS BANK</p>
            </div>
            <div class="mt-5 md:mt-10 space-y-1 text-center">
              <p class="text-warning">Account Number</p>
              <p class="text-xl md:text-3xl font-medium">1300861948</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { defineEmits } from "vue";
const emit = defineEmits<{
  closeModall: (s: string) => void;
}>();

const closeModal = () => {
  emit("closeModall");
};
</script>

<style scoped>
.card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(26, 28, 32, 0.572);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
