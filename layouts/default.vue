<template>
  <div>
    <div class="shadow-sm">
      <div class="container mx-auto p-4 flex justify-between items-center">
        <nuxt-link to="/" class="text-xl text-gray-700 items-center"
          >イルファ</nuxt-link
        >
        <NuxtLink to="/about-me" class="border-2 px-3 py-2 rounded text-gray-700"
          >About Me</NuxtLink
        >
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-span-10">
          <Nuxt />
        </div>
      </div>
    </div>
    <footer class="mt-3 p-4 text-center font-normal text-sm text-gray-500">
      © copyright 2021
    </footer>
  </div>
</template>
