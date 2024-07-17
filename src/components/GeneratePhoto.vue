<template>
  <div
    className="z-60 fixed rounded-0 w-full bg-[#000] bg-opacity-90 overflow-y-auto inset-0 outline-none focus:outline-none"
  >
    <div class="flex justify-end m-3">
      <span
        @click="closeModalPhoto"
        class="px-3.5 py-1.5 bg-primary hover:bg-primary-600 hover:bg-success-shades rounded-full cursor-pointer"
      >
        x
      </span>
    </div>

    <div class="md:w-[80%] card mx-auto rounded-2xl p-10 mt-10 md:mt-20">
      <div class="py-10">
        <select
          v-model="selectedLink"
          @change="navigate"
          name="tribe"
          id="tribe"
          class="mx-auto bg-transparent w-[700px] border hover:text-primary-300 border-primary-50 py-2 md:py-3 rounded-md flex justify-between items-center px-3 over:cursor-pointer"
        >
          <option value="" disabled selected>
            Select your tribe, Generate free custom DP
          </option>
          <option
            class="capitalize"
            v-for="(dp, index) in getDps"
            :key="index"
            :value="dp?.link"
          >
            {{ dp?.tribe }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Popper from "vue3-popper";
import type { PropType, defineEmits } from "vue";
import { ref } from "vue";
import { getDps } from "@/utilities/dps";

const selectedLink = ref("");

const navigate = () => {
  if (selectedLink.value) {
    window.open(selectedLink.value, "_blank");
  }
  selectedLink.value = "";
};

const emit = defineEmits<{
  closeModal: (s: string) => void;
}>();

const closeModalPhoto = () => {
  emit("closeModal");
};
</script>

<style scoped></style>
