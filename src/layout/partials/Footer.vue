<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="bg-primaryy">
    <footer>
      <div class="border-y border-default-300">
        <div class="container py-10 md:py-20">
          <div
            class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-16"
          >
            <div>
              <div>
                <div class="flex gap-2 items-center">
                  <!-- Navbar Brand Logo -->
                  <router-link :to="{ name: 'home' }">
                    <img :src="logoLight" alt="logo" class="h-12 md:h-24" />
                  </router-link>
                </div>
                <p class="text-default-800 mt-4">
                  <span class="text-sm md:text-base">
                    Celebrating Nigeria's rich cultural heritage and fostering
                    unity through art, travel, and cultural festivities.
                  </span>
                </p>
              </div>
            </div>

            <div class="">
              <h5
                class="xl:text-xl lg:text-lg font-medium text-grey-shades mb-4"
              >
                Company
              </h5>
              <ul class="flex flex-col gap-3">
                <li>
                  <router-link
                    :to="{ name: 'home' }"
                    class="text-xs md:text-base hover:text-warning-300 text-default-700 transition-all"
                    >Home</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'about' }"
                    class="text-xs md:text-base hover:text-warning-300 text-default-700 transition-all"
                    >About</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'project' }"
                    class="text-xs md:text-base hover:text-warning-300 text-default-700 transition-all"
                    >Projects</router-link
                  >
                </li>

                <li>
                  <router-link
                    :to="{ name: 'media' }"
                    class="text-xs md:text-base hover:text-warning-300 text-default-700 transition-all"
                    >Media</router-link
                  >
                </li>
                <!-- <li>
                  <a
                    href="https://blog.foladavid.com"
                    target="_blank"
                    class="text-xs md:text-base text-primary-400 hover:text-warning-300 transition-all"
                    >Blog</a
                  >
                </li> -->
                <li>
                  <router-link
                    :to="{ name: 'contact' }"
                    class="text-xs md:text-base hover:text-warning-300 text-default-700 transition-all"
                    >Contact</router-link
                  >
                </li>
              </ul>
            </div>

            <div class="">
              <ul class="flex flex-col gap-3">
                <h5
                  class="xl:text-xl lg:text-lg font-medium text-grey-shades mb-4"
                >
                  Social Media
                </h5>
                <div class="space-y-3">
                  <a
                    href="https://www.instagram.com/foladavid"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-5 group"
                  >
                    <div
                      class="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary-300"
                    >
                      <InstagramIcon class="h-5 w-5" />
                    </div>
                    <h5
                      class="text-xs md:text-base hover:text-warning-300 font-medium text-default-800"
                    >
                      Instagram
                    </h5>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=1378806367&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-5 group"
                  >
                    <div
                      class="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary-300"
                    >
                      <FacebookIcon class="h-5 w-5" />
                    </div>
                    <h5
                      class="text-xs md:text-base hover:text-warning-300 font-medium text-default-800"
                    >
                      Facebook
                    </h5>
                  </a>

                  <a
                    href="https://x.com/foladavidart"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-5 group"
                  >
                    <div
                      class="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary-300"
                    >
                      <TwitterIcon class="h-5 w-5" />
                    </div>
                    <h5
                      class="text-xs md:text-base hover:text-warning-300 font-medium text-default-800"
                    >
                      Twitter
                    </h5>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/dradefemifoladavid"
                    rel="noopener noreferrer"
                    class="flex items-center gap-5 group"
                  >
                    <div
                      class="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary-300"
                    >
                      <LinkedinIcon class="h-5 w-5" />
                    </div>
                    <h5
                      class="text-xs md:text-base hover:text-warning-300 font-medium text-default-800"
                    >
                      Linkedin
                    </h5>
                  </a>
                </div>
              </ul>
            </div>
            <!-- QR code -->

            <div class="space-y-3">
              <p class="font-medium text-sm md:text-base">
                Join Dr. Foladavid On Social Media
              </p>
              <img
                src="@/assets/images/qr.svg"
                class="h-[250px] bg-white w-[250px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="py-6">
        <p class="text-xs md:text-base text-default-900 text-center">
          {{ year }}
          © Unity in Diversity. All right Reversed. Designed by
          <a
            href="https://linktr.ee/cloudspheretech"
            target="_blank"
            rel="noopener noreferrer"
            ><span
              class="text-primary-200 hover:underline underline-offline-4 underline-primary-200"
            >
              Cloudsphere Technologies
            </span>
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import logoDark from "@/assets/images/logo-dark.png";
import logoLight from "@/assets/images/logo-light.png";

import {
  MoveRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  TiktokIcon,
} from "lucide-vue-next";

const year = new Date().getFullYear();
</script>
