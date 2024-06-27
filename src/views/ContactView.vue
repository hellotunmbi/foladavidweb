<template>
  <div
    class="relative isolate py-10 md:py-40 bg-cover bg-no-repeat bg-[url('../images/other/bg-lines-1.svg')]"
  >
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div
        class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32"
      >
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-white">
            Contact Us
          </h2>
          <p class="mt-6 text-lg leading-8 text-default-800">
            Feel free to reach out to us for any inquiries or assistance. We're
            here to help!
          </p>
          <dl class="mt-10 space-y-8 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-7 w-6 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>
              </dt>
              <dd>
                <a
                  class="hover:text-gray-400 text-default-800"
                  href="mailto:unityindiversity@foladavid.com"
                  >unityindiversity@foladavid.com</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">phone</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-7 w-6 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  ></path>
                </svg>
              </dt>
              <a href="tel:+234 813 190 6738"></a>
              <dd class="text-default-800">08131906738,</dd>
              <a href="tel:+234 701 374 9934">
                <dd class="text-default-800">07013749934</dd></a
              >
            </div>
            <div class="flex items-center gap-5">
              <div class="cursor-pointer max-h-[52px] max-w-[52px]">
                <a
                  href="https://x.com/foladavidart"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="@/assets/icons/twitter.png"
                    class="object-cover hover:scale-125 transition ease-in-out"
                    alt="twitter"
                /></a>
              </div>

              <div class="cursor-pointer max-h-[45px] max-w-[45px]">
                <a
                  href="https://www.facebook.com/profile.php?id=1378806367&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="@/assets/icons/facebook.svg"
                    class="object-cover hover:scale-125 transition ease-in-out"
                    alt="facebook"
                /></a>
              </div>

              <div class="cursor-pointer max-h-[40px] max-w-[40px]">
                <a
                  href="https://www.linkedin.com/in/dradefemifoladavid"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="@/assets/icons/linkedin.svg"
                    class="object-cover hover:scale-125 transition ease-in-out"
                    alt="linkedin"
                /></a>
              </div>
              <div class="cursor-pointer max-h-[55px] max-w-[55px]">
                <a
                  href="https://www.instagram.com/foladavid"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="@/assets/icons/instagram.png"
                    class="object-cover hover:scale-125 transition ease-in-out"
                    alt="instagram"
                /></a>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <form class="px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-32 card">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <h3 class="text-warning text-2xl font-bold">
            We welcome your feedback
          </h3>
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-default-600"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full bg-transparent rounded-full border focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  name="firstName"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-default-600"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full bg-transparent rounded-full border focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  name="lastName"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-default-600"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  type="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full bg-transparent rounded-full border focus:outline-none text-default-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  name="email"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-default-600"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  id="message"
                  rows="4"
                  class="block w-full bg-transparent rounded-md border focus:outline-none text-default-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="mt-8 md:mt-10 flex justify-end">
            <button
              type="submit"
              class="flex items-center rounded-md hover:text-warning bg-primary/90 px-6 py-2 text-white transition-all hover:bg-primary"
            >
              Send Messages
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-send-icon ms-2 h-5 w-5 rotate-45"
              >
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(26, 28, 32, 0.572);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
