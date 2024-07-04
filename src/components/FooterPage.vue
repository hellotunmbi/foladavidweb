<template>
  <section id="contact" class="mt-[]80px md:mt-[150px]">
    <div class="max-w-[100%] mx-auto w-[80%]">
      <h3 class="text-[40px] md:text-[100px] font-bold text-center">
        Get In Touch
      </h3>
      <div
        class="flex flex-col gap-10 items-center my-[40px] md:my-[60px] lg:my-[100px] text-center"
      >
        <p>Lagos, Nigeria</p>
        <p class="text-xl font-medium">
          <a href="mailto:">contact@foladavid.com</a>
        </p>
        <div class="flex gap-5">
          <div class="cursor-pointer">
            <img src="/icons/instagram.svg" alt="instagram" title="Instagram" />
          </div>
          <div class="cursor-pointer">
            <img src="/icons/twitter.svg" alt="twitter" title="Twitter" />
          </div>
          <div class="cursor-pointer">
            <img src="/icons/linkedin.svg" alt="linkedin" title="Linkedin" />
          </div>
          <div class="cursor-pointer">
            <img src="/icons/facebook.svg" alt="facebook" title="Facebook" />
          </div>
        </div>
      </div>
      <div
        class="flex py-5 w-full pb-10 justify-between items-center border-t-[0.1px] border-grey"
      >
        <div>
          <div><img src="" alt="" /></div>
          <h2 class="font-bold text-xl md:text-4xl text-accent">
            <span class="inline-block h-3 w-3 border bg-accent-shades"></span>FD
          </h2>
        </div>

        <!-- <div>
          <ul class="hidden md:flex gap-10 font-light uppercase items-center">
            <a href="#"
              ><li class="text-lg cursor-pointer hover:text-accent">Home</li></a
            >
            <a href="#about"
              ><li class="text-lg cursor-pointer hover:text-accent">
                About
              </li></a
            >
            <a href="#works"
              ><li class="text-lg cursor-pointer hover:text-accent">
                Works
              </li></a
            >
            <a href="#awards"
              ><li class="text-lg cursor-pointer hover:text-accent">
                Awards
              </li></a
            >
            <a href="#contact"
              ><li class="text-lg cursor-pointer hover:text-accent">
                Contact
              </li></a
            >
          </ul>
        </div> -->

        <div>
          <p class="text-xs md:text-base">
            &copy; {{ new Date().getFullYear() }} Fola David. All right reserved
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
