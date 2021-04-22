<template>
  <div>
    <div class="shadow-sm fixed w-full bg-white z-10">
      <div class="container mx-auto p-4">
        <div class="grid grid-cols-10 gap-4">
          <div
            class="col-span-10 lg:col-span-8 lg:col-start-2 xl:col-start-3 xl:col-span-6 flex justify-between items-center"
          >
            <nuxt-link to="/" class="text-xl text-gray-700 items-center"
              >イルファ</nuxt-link
            >
            <NuxtLink
              to="/about-me"
              class="border-2 px-3 py-2 rounded text-gray-700"
              >About Me</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 pt-24">
      <div class="grid grid-cols-10 gap-4">
        <div
          class="col-span-10 lg:col-span-8 lg:col-start-2 xl:col-start-3 xl:col-span-6"
        >
          <Nuxt />
        </div>
      </div>
    </div>
    <footer class="mt-3 p-4 text-center font-normal text-sm text-gray-500">
      © copyright 2021
    </footer>
  </div>
</template>
