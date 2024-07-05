<template>
  <section>
    <header
      :class="{ scrolled: isScrolled }"
      ref="header"
      class="py-5 md:py-10 fixed top-0 right-0 left-0 z-50 bg-[#111927] animate__animated animate__fadeInDown shadow-sm shadow-neutral-800"
    >
      <div
        class="w-[80%] flex justify-between items-center max-w-[100%] mx-auto"
      >
        <div>
          <div><img src="" alt="" /></div>
          <h2 class="font-bold text-3xl md:text-5xl text-accent">
            <span class="inline-block h-3 w-3 border bg-accent-shades"></span>FD
          </h2>
        </div>

        <nav class="flex items-center md:gap-20">
          <ul class="hidden md:flex gap-10 font-light uppercase items-center">
            <a href="#"
              ><li
                @click="activeLink('home')"
                class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent"
                :class="active === 'home' ? 'text-accent' : ''"
              >
                Home
              </li></a
            >
            <a href="#about"
              ><li
                @click="activeLink('about')"
                class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent"
                :class="active === 'about' ? 'text-accent' : ''"
              >
                About
              </li></a
            >
            <a href="#works"
              ><li
                @click="activeLink('works')"
                class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent"
                :class="active === 'works' ? 'text-accent' : ''"
              >
                Works
              </li></a
            >
            <a href="#awards"
              ><li
                @click="activeLink('awards')"
                class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent"
                :class="active === 'awards' ? 'text-accent' : ''"
              >
                Awards
              </li></a
            >
            <a href="#contact"
              ><li
                @click="activeLink('contact')"
                class="sm:text-sm lg:text-lg cursor-pointer hover:text-accent"
                :class="active === 'contact' ? 'text-accent' : ''"
              >
                Contact
              </li></a
            >
          </ul>
          <div class="flex gap-2 items-center">
            <div>
              <a
                href="https://www.foladavid.com/unityindiversity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  class="sm:text-sm lg:text-lg font-light uppercase cursor-pointer hover:text-accent border rounded-md px-2 py-1 hover:bg-accent/10"
                >
                  project
                </button></a
              >
            </div>
            <div v-if="modal !== true" @click="openNav" class="md:hidden">
              <img src="/icons/menu.svg" alt="" />
            </div>
            <div v-else @click="closeNav" class="md:hidden">
              <img src="/icons/close.svg" alt="" />
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div v-if="modal">
      <SideNav @close-modal="closeNav" />
    </div>

    <section ref="spacer" class="spacer">
      <router-view />
    </section>

    <div
      class="hidden fixed md:flex flex-col gap-5 items-center left-4 bottom-0"
    >
      <a
        href="https://www.instagram.com/foladavid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class="cursor-pointer animate__animated animate__fadeInUp animate__faster animate__delay-4s"
        >
          <img
            src="/icons/instagram.svg"
            alt="instagram"
            title="Instagram"
          /></div
      ></a>
      <a
        href="https://x.com/foladavidart"
        target="_blank"
        rel="noopener noreferrer"
        ><div
          class="cursor-pointer animate__animated animate__fadeInUp animate__faster animate__delay-3s"
        >
          <img src="/icons/twitter.svg" alt="twitter" title="Twitter" /></div
      ></a>
      <a
        href="https://www.linkedin.com/in/dradefemifoladavid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class="cursor-pointer animate__animated animate__fadeInUp animate__faster animate__delay-2s"
        >
          <img src="/icons/linkedin.svg" alt="linkedin" title="Linkedin" /></div
      ></a>
      <a
        href="https://www.facebook.com/profile.php?id=1378806367&mibextid=LQQJ4d"
      >
        <div
          class="cursor-pointer animate__animated animate__fadeInUp animate__faster"
        >
          <img src="/icons/facebook.svg" alt="facebook" title="Facebook" /></div
      ></a>
      <div class="border-l-[0.5px] h-[30px]"></div>
    </div>

    <!-- Back to top button -->
    <div class="fixed bottom-5 end-5 z-40 flex flex-col items-center gap-1">
      <!-- Back to Top -->
      <button
        class="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-warning/20 text-warning shadow-[inset_0px_0px_12px_0px] shadow-warning/40 backdrop-blur-3xl transition-all duration-500"
        :class="{ 'translate-x-16': !isButtonVisible }"
        @click="backToTop"
      >
        <div class="border border-accent inline-block ease-in-out rounded-full">
          <img src="/icons/arrow-up.svg" alt="" />
        </div>
      </button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import SideNav from "@/components/SideNav.vue";

export default {
  components: { SideNav },
  setup() {
    let isButtonVisible = ref(false);
    const header = ref(null);
    const spacer = ref(null);
    const isScrolled = ref(false);
    const modal = ref(false);
    const active = ref("");
    let observer = null;

    const activeLink = (item) => {
      active.value = item;
    };

    const options = {
      root: null,
      rootMargin: "-100px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        isScrolled.value = !entry.isIntersecting;
      });
    };

    const backToTop = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
          isButtonVisible.value = true;
        } else {
          isButtonVisible.value = false;
        }
      });

      observer = new IntersectionObserver(handleIntersect, options);
      if (spacer.value) {
        observer.observe(spacer.value);
      }
    });

    const openNav = () => {
      modal.value = true;
    };
    const closeNav = () => {
      modal.value = false;
    };

    onUnmounted(() => {
      if (observer && spacer.value) {
        observer.unobserve(spacer.value);
      }
    });

    return {
      header,
      spacer,
      isScrolled,
      active,
      activeLink,
      backToTop,
      modal,
      isButtonVisible,
      openNav,
      closeNav,
    };
  },
};
</script>

<style>
header {
  display: none;
}

header.scrolled {
  display: flex;
}

.spacer {
  height: 50vh;
}
</style>
