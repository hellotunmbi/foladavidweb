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
          <option value="https://getdp.co/Xyi">Fulani</option>
          <option value="https://getdp.co/XyV">Hausa</option>
          <option value="https://getdp.co/Xyq">Yoruba</option>
          <option value="https://getdp.co/Xyo">Igbo</option>
          <option value="https://getdp.co/Xyj">Ibibio</option>
          <option value="https://getdp.co/XyX">Ijaw</option>
          <option value="https://getdp.co/Xyp">kanuri</option>
          <option value="https://getdp.co/XyL">Tiv</option>
          <option value="https://getdp.co/XCR">Nupe</option>
          <option value="https://getdp.co/XD0">Efik</option>
          <option value="https://getdp.co/XDa">Annang</option>
          <option value="https://getdp.co/XDu">Igala</option>
          <option value="https://getdp.co/XD1">Gwari</option>
          <option value="https://getdp.co/XDS">Jakun</option>
          <option value="https://getdp.co/XDM">Edo</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Popper from "vue3-popper";
import type { PropType, defineEmits } from "vue";
import { ref } from "vue";

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
