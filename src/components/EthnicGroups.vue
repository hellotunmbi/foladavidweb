<template>
  <section>
    <section class="h-full max-w-[100%] w-[90%] mx-auto py-20 md:py-40">
      <div class="mt-10">
        <h3 class="text-center text-2xl uppercase">
          different tribes, traditions, histories and states
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div
            v-for="card in tribes"
            :key="card?.id"
            class="border border-primary-200 rounded-lg mt-10 p-5 hover:shadow-2xl hover:bg-[#1a1c2092] cursor-pointer"
          >
            <div>
              <p
                class="text-center text-warning uppercase md: text-lg md:text-xl"
              >
                {{ card.language }}
              </p>

              <p class="mt-5">
                <span class="text-sm font-bold text-primary-300"
                  >Culture:
                </span>
                <span class="text-sm">{{ card.culture }}</span>
              </p>
              <p>
                <span class="text-sm font-bold text-primary-300"
                  >Traditions:
                </span>
                <span class="text-sm">{{ card.traditions }}</span>
              </p>
              <p>
                <span class="text-sm font-bold text-primary-300">
                  History:
                </span>
                <span class="text-sm">{{ card.history }}</span>
              </p>
              <p>
                <span class="text-sm font-bold text-primary-300"
                  >Similarities and Neighboring Tribes:
                </span>
                <span class="text-sm">{{ card.similarities }}</span>
              </p>
              <p>
                <span class="text-sm font-bold text-primary-300">
                  States/Regions:</span
                >
                <span class="text-sm">{{ card.statesRegions }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { tribes } from "@/utilities/tribes";

const details: any = ref();
</script>

<style scoped>
.card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: #1a1c2092;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
