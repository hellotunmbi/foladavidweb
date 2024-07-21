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
          <a
            href="https://www.instagram.com/foladavid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="cursor-pointer">
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
            ><div class="cursor-pointer">
              <img
                src="/icons/twitter.svg"
                alt="twitter"
                title="Twitter"
              /></div
          ></a>
          <a
            href="https://www.linkedin.com/in/dradefemifoladavid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="cursor-pointer">
              <img
                src="/icons/linkedin.svg"
                alt="linkedin"
                title="Linkedin"
              /></div
          ></a>
          <a
            href="https://www.facebook.com/profile.php?id=1378806367&mibextid=LQQJ4d"
          >
            <div class="cursor-pointer">
              <img
                src="/icons/facebook.svg"
                alt="facebook"
                title="Facebook"
              /></div
          ></a>
        </div>
      </div>
      <div
        class="flex py-5 w-full pb-10 justify-between items-center border-t-[0.1px] border-grey"
      >
        <div>
          <div><img src="" alt="" /></div>
          <h2 class="font-bold text-xl md:text-4xl text-accent">
            <span
              class="inline-block w-2 h-2 md:h-3 md:w-3 border bg-accent-shades"
            ></span
            >FD
          </h2>
        </div>

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
