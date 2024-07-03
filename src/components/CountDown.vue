<template>
  <div class="flex flex-col md:flex-row gap-5 sm:items-center">
    <div>
      <p class="text-sm md:text-base">Event Days:</p>
    </div>
    <div class="flex items-center gap-5">
      <div class="border rounded-lg bg-default-500 py-2 w-[70px] md:w-[100px]">
        <p class="text-2xl sm:text-4xl text-center">{{ days }}</p>
        <p class="text-center text-sm md:text-base">Days</p>
      </div>
      <div class="border rounded-lg bg-default-500 py-2 w-[70px] md:w-[100px]">
        <p class="text-2xl sm:text-4xl text-center">{{ hours }}</p>
        <p class="text-center text-sm md:text-base">Hours</p>
      </div>
      <div class="border rounded-lg bg-default-500 py-2 w-[70px] md:w-[100px]">
        <p class="text-2xl sm:text-4xl text-center">{{ minutes }}</p>
        <p class="text-center text-sm md:text-base">Minutes</p>
      </div>
      <div class="border rounded-lg bg-default-500 py-2 w-[70px] md:w-[100px]">
        <p class="text-2xl sm:text-4xl text-center">{{ seconds }}</p>
        <p class="text-center text-sm md:text-base">Seconds</p>
      </div>
    </div>
  </div>

  <div class="flex flex-col md:flex-row gap-5 mt-5">
    <p class="text-sm md:text-base">Venue:</p>
    <p class="text-base sm:text-xl text-warning">
      Mobolaji Johnson Arena (ONIKAN STADIUM), LAGOS ISLAND, LAGOS.
    </p>
  </div>
  <div class="flex flex-col md:flex-row gap-5 mt-5">
    <p class="text-sm md:text-base">Time:</p>
    <p class="text-base sm:text-xl text-warning">10.00 AM</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "CountDown",
  setup() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours.value = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
    };

    let interval: number;

    onMounted(() => {
      updateCountdown();
      interval = window.setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
