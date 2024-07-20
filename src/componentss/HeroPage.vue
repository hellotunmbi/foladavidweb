<template>
  <div id="home">
    <div class="relative">
      <div
        class="absolute flex top-[80px] left-[20px] sm:top-[100px] lg:top-[200px] md:left-[50px]"
      >
        <div class="max-w-full z-30">
          <h1
            class="text-[40px] font-bold md:font-medium md:text-[80px] flex-col md:flex-row flex md:gap-10 lg:text-[150px] animate__animated animate__zoomIn animate__faster"
          >
            <span>FOLA</span> <span>DAVID</span>
          </h1>

          <div class="flex gap-4 flex-wrap mt-5 lg:mt-10 md:justify-center">
            <div
              class="text-lg md:text-xl lg:text-2xl flex items-center gap-1 animate__animated animate__zoomIn animate__faster"
            >
              <p class="w-3 h-3 bg-accent"></p>
              <span>Medical Doctor</span>
            </div>
            <div
              class="text-lg md:text-xl lg:text-2xl flex items-center gap-1 animate__animated animate__zoomIn animate__faster animate__delay-2s"
            >
              <p class="w-3 h-3 bg-accent"></p>
              <span>Visual Artist</span>
            </div>
            <div
              class="text-lg md:text-xl lg:text-2xl flex items-center gap-1 animate__animated animate__zoomIn animate__faster animate__delay-3s"
            >
              <p class="w-3 h-3 bg-accent"></p>
              <span>Humanitarian</span>
            </div>
          </div>

          <!--  -->

          <div class="flex justify-center mt-20 md:mt-40">
            <a href="#works"
              ><div
                class="border border-accent inline-block animate-bounce ease-in-out rounded-full bg-warning/20 text-warning shadow-[inset_0px_0px_12px_0px] shadow-warning/40 backdrop-blur-3xl transition-all duration-500"
              >
                <img src="/icons/arrow-down.svg" alt="" /></div
            ></a>
          </div>
        </div>
      </div>

      <div
        class="max-w-full max-h-full md:min-w-[50%] -z-10 mt-10 md:min-h-[40%] flex justify-end animate__animated animate__zoomIn animate__faster"
      >
        <img
          src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1720002576/fola_zddrau.png"
          class="h-[60%] w-[70%] md:h-[40%] md:w-[45%] object-top"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
