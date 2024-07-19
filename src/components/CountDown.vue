<template>
  <div></div>
  <div class="flex flex-col md:flex-row gap-5 sm:items-center">
    <div class="flex items-center gap-5">
      <div class="border rounded-lg bg-default-500 py-2 w-[70px] md:w-[150px]">
        <p class="text-4xl sm:text-7xl text-center">{{ days }}</p>
        <p class="text-center text-sm md:text-base">Days</p>
      </div>
      <div class="border rounded-lg bg-default-500 py-2 w-[70px] md:w-[150px]">
        <p class="text-4xl sm:text-7xl text-center">{{ hours }}</p>
        <p class="text-center text-sm md:text-base">Hours</p>
      </div>
      <div class="border rounded-lg bg-default-500 py-2 w-[70px] md:w-[150px]">
        <p class="text-4xl sm:text-7xl text-center">{{ minutes }}</p>
        <p class="text-center text-sm md:text-base">Minutes</p>
      </div>
      <div class="border rounded-lg bg-default-500 py-2 w-[70px] md:w-[150px]">
        <p class="text-4xl sm:text-7xl text-center">{{ seconds }}</p>
        <p class="text-center text-sm md:text-base">Seconds</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "CountDown",
  setup() {
    const targetDate = ref(new Date("Jul 21, 2024").getTime());
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    onMounted(() => {
      updateCountdown();
      setInterval(updateCountdown, 1000);
    });

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.value - now;

      if (distance > 0) {
        days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours.value = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        days.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
      }
    };

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
