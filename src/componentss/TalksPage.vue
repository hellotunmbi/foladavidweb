<template>
  <section id="talks" class="my-[70px] md:my-[140px]">
    <div class="max-w-[100%] mx-auto w-[80%]">
      <h3 class="text-4xl md:text-7xl opacity-20 font-bold border-b pb-10">
        Talks
      </h3>

      <div>
        <div
          v-for="(blog, idx) in blogs"
          :key="idx"
          class="py-5 md:py-10 border-b-[0.5px] border-grey"
        >
          <div class="flex flex-col md:flex-row gap-10 md:gap-20">
            <div class="max-w-40 max-h-[100px] self-start">
              <img
                :src="blog?.img"
                class="h-full w-full object-cover rounded-md"
                alt="..."
              />
            </div>
            <div>
              <div v-if="blog?.tag" class="flex gap-4">
                <p
                  class="border-[0.5px] py-1 mb-2 px-4 bg-accent/20 rounded capitalize text-sm border-grey"
                  v-for="(tag, id) in blog?.tag"
                  :key="id"
                >
                  {{ tag }}
                </p>
              </div>
              <a :href="blog.link" target="_blank" rel="noopener noreferrer"
                ><h3
                  class="text-lg sm:text-xl hover:text-neutral-400 text-grey-tint pt-2 md:text-2xl font-bold"
                >
                  {{ blog?.title }}
                </h3></a
              >
              <p class="pt-2 text-sm md:text-base">{{ blog?.text }}</p>
              <p class="pt-4 text-xs md:text-sm text-cyan-600">
                {{ blog?.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const blogs = ref([
  {
    img: "/images/bbc.jpg",
    title: "Doctor by Day, Artist by Night",
    text: "an exclusive BBC interview on his work",
    tag: ["health", "art"],
    date: "1 February 2020",
    link: "https://www.bbc.com/news/av/world-africa-51269506",
  },
  {
    img: "/images/ted.jpg",
    title: "IGNITE : Awaken inspire execute",
    text: "I love creating art and I feel each artwork is it's own entity. The journey from being just an idea to something that is real and almost alive and telling it's own tale is most amazing. ",
    tag: ["visual artist"],
    date: "May 12, 2018",
    link: "https://www.ted.com/tedx/events/28927",
  },
  {
    img: "/images/estroil.jpg",
    title:
      "Re-humanize Our Word at the NOVA School of Business and Economics in Portugal",
    text: "Creating a painting of one of the children met during his foundations’s visit to Ayanmelum, Anambra state.",
    tag: ["health"],
    date: "Nov 9, 2023",
    link: "https://www.youtube.com/watch?v=2cjVXapdpzg",
  },
]);
</script>

<style scoped></style>
