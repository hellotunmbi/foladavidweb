<template>
  <section class="h-full max-w-screen py-20 md:py-32 w-[90%] mx-auto">
    <div class="mt-5 md:mt-20">
      <h3 class="text-2xl md:text-3xl lg:text-5xl">The Projects</h3>
      <p class="mt-5">
        Welcome to the Unity in Diversity Project, an inspiring initiative led
        by Dr. Foladavid in collaboration with Tolaram Group. Our mission is to
        celebrate and promote the rich cultural diversity of Nigeria, fostering
        unity and understanding through artistic expression, cultural
        exploration, and communal festivities.
      </p>
      <p class="mt-5">
        <span class="font-bold text-xl text-warning"> Unity in diversity </span
        >in Nigeria is a concept that highlights the strength and potential of
        the country's multicultural and multiethnic composition. Nigeria, with
        its over 250 ethnic groups and more than 500 languages, presents a rich
        tapestry of cultures, traditions, and religions. This diversity is both
        a source of vibrancy and a challenge, necessitating efforts to foster
        unity among its people.
      </p>
    </div>

    <section class="pt-10">
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div class="relative h-full w-full">
          <img
            src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809977/map_ybak4n.png"
            alt=""
          />
        </div>
        <div class="mt-5 md:mt-24 2xl:mt-40">
          <h2 class="mt-5 text-4xl font-medium text-default-950">
            Historical Context
          </h2>
          <p class="mt-5">
            Nigeria's history has been shaped by its diverse ethnic groups long
            before colonial times. The amalgamation of Northern and Southern
            Nigeria in 1914 by the British colonial administration brought
            together different regions with distinct cultural and administrative
            systems. Post-independence, the challenge has been to create a sense
            of national identity that transcends ethnic and regional loyalties.
          </p>

          <router-link :to="{ name: 'ethnics' }">
            <button
              class="capitalize hover:text-warning bg-primary px-5 mt-5 md:mt-10 md:px-10 hover:bg-primary/80 text-xs sm:text-sm 2xl:text-lg cursor-pointer text-white py-2.5 rounded-md"
            >
              Tribes
            </button></router-link
          >
        </div>
      </div>
    </section>

    <section class="mt-20 md:mt-40">
      <div class="flex flex-col md:flex-row justify-center items-center gap-10">
        <div class="h-[50%] w-full">
          <img
            src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718809944/draw-2_nsceuj.png"
            class="object-cover rounded-lg"
            alt=""
          />
        </div>
        <div class="w-full">
          <h3 class="text-2xl text-warning uppercase">World record attempt</h3>
          <p class="pt-4">
            <span class="font-bold text-xl"> A Canvas of Diversity</span>
            Witness history in the making as Dr. Foladavid attempts to create
            the world's largest drawing by an individual. This monumental
            artwork, spanning 850m², will depict Nigeria's myriad tribes in
            vibrant detail, showcasing their traditions, attire, and essence.
          </p>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="mt-10 md:mt-20">
      <div class="flex flex-col md:flex-row justify-center items-center gap-10">
        <div class="w-full order-2 md:order-1">
          <h3 class="text-2xl text-warning uppercase">Road to Record</h3>
          <p class="pt-4">
            <span class="font-bold text-xl"> A Cultural Odyssey </span>
            Embark on a mesmerizing journey across Nigeria in the documentary
            "Road to Record," capturing the essence of our diverse
            ethnic-nationalities and tribes.
          </p>
        </div>
        <div class="h-[50%] w-full order-1 md:order-2">
          <img
            src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718810353/unity-lg_s3ueoz.png"
            class="object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="mt-10 md:mt-20">
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-10 mt-5"
      >
        <div class="h-[50%] w-full">
          <img
            src="https://res.cloudinary.com/dtkbcuiit/image/upload/v1718810323/rep-2_l10itn.png"
            class="object-cover rounded-lg"
            alt=""
          />
        </div>
        <div class="w-full">
          <h3 class="text-2xl text-warning uppercase">
            Rep Your Tribe Carnival
          </h3>
          <p class="pt-4">
            <span class="font-bold text-xl">Celebrating Cultural Harmony </span>
            Join the nationwide celebration with the #UnityInDiversity,
            #RepYourTribe Carnival, a digital and physical extravaganza honoring
            Nigeria's cultural tapestry. From tantalizing cuisines to
            mesmerizing dances, immerse yourself in the beauty and diversity of
            Nigerian tribes.
          </p>

          <div
            @click="openModal"
            class="group hidden md:inline-flex mt-5 md:mt-10 items-center justify-center gap-2 rounded-full border border-default-400 px-1 py-1 pe-4 text-default-950 transition-all duration-300 hover:bg-warning-600 hover:text-white cursor-pointer"
          >
            <span
              class="me-2 flex h-11 w-11 items-center justify-center text-xs rounded-full bg-warning/20 text-warning transition-all duration-300 group-hover:bg-white group-hover:text-black"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-image-icon h-5 w-5"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg
            ></span>
            <span class="text-xs sm:text-sm">Generate photo</span>
          </div>
        </div>
      </div>
    </section>

    <div v-if="modal">
      <GeneratePhoto @close-modal="closeModal" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GeneratePhoto from "@/components/GeneratePhoto.vue";
import type { ServiceType } from "@/types/landing";
const serviceData: ServiceType[] = [
  {
    title: "Road to Record:",
    description: `Join us on an epic road trip across Nigeria as we explore the diverse ethnic-nationalities and tribes that make our nation unique. This journey will be documented in "Road to Record," capturing the essence of Nigeria's cultural mosaic.`,
  },
  {
    title: "World Record Attempt:",
    description: `Witness history in the making as Dr. Foladavid attempts to create the world's largest drawing by an individual. This artwork will span 850m² and depict the diverse tribes of Nigeria, showcasing their traditional attire, festivals, and daily life.`,
  },
  {
    title: "The #RepYourTribe Campaign:",
    description:
      "Celebrate with us during the #RepYourTribe Carnival, a vibrant festival where Nigerians showcase their cultural heritage through music, dance, food, and fashion. Participate online using the hashtag #RepYourTribe and join the nationwide celebration.",
  },
];

const modal = ref(false);

const openModal = () => {
  modal.value = true;
};

const closeModal = () => {
  modal.value = false;
};
</script>

<style scoped></style>
