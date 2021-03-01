<template>
  <div class="container mx-auto py-5">
    <div class="grid grid-cols-10 gap-4">
      <div class="col-start-2 col-span-8 border-b-2 mb-2">
        <div class="grid grid-cols-9 gap-4 mb-3">
          <div class="col-span-2 p-4">
            <img
              class="rounded-full"
              src="~/assets/images/irfangi.jpg"
              alt="Irfangi Image"
            />
          </div>
          <div class="col-span-7">
            <h3 class="font-bold text-2xl mt-3 text-gray-700">
              Hai Selamat Datang, Salam Kenal Semua 👋
            </h3>
            <p class="my-5 text-gray-500">
              Website ini adalah catatan tentang hal yang saya pelajari atau
              tulisan tentang kegiatan telah saya lakukan. Semoga dapat
              bermanfaat 😁 . <br />Kritik dan saran, dapat dikirimkan lewat
              link di bawah:
            </p>
            <a href="" class="border-2 px-3 py-2 rounded my-5 text-gray-700"
              >Feedback 📄</a
            >
          </div>
        </div>
      </div>
      <div class="col-start-2 col-span-8 mb-2">
        <h3
          class="font-semibold text-2xl uppercase text-gray-800 border-b-4 inline-block mb-6"
        >
          Article
        </h3>
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="col-span-1">
            <img
              class="rounded-lg mt-1"
              src="~/assets/images/nuxtjs.jpg"
              alt=""
            />
          </div>
          <div class="col-span-2">
            <h4 class="text-gray-800 text-xl font-semibold">
              <nuxt-link to="">
                Membuat Website Blog Dengan NUXTJS
              </nuxt-link>
            </h4>
            <p class="mb-2 text-sm text-gray-500">20 February 2020</p>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              necessitatibus nisi consectetur doloribus ullam tenetur
              exercitationem totam quae natus velit assumenda architecto
              eligendi ratione quo enim nemo alias optio inventore, dignissimos
              dolore numquam? Dolores voluptate ratione quam dignissimos
              consequuntur harum?...
              <NuxtLink to="" class="text-blue-600">Read More</NuxtLink>
            </p>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="col-span-1">
            <img
              class="rounded-lg mt-1"
              src="~/assets/images/nuxtjs.jpg"
              alt=""
            />
          </div>
          <div class="col-span-2">
            <h4 class="text-gray-800 text-xl font-semibold">
              <nuxt-link to="">
                Membuat Website Blog Dengan NUXTJS
              </nuxt-link>
            </h4>
            <p class="mb-2 text-sm text-gray-500">20 February 2020</p>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              necessitatibus nisi consectetur doloribus ullam tenetur
              exercitationem totam quae natus velit assumenda architecto
              eligendi ratione quo enim nemo alias optio inventore, dignissimos
              dolore numquam? Dolores voluptate ratione quam dignissimos
              consequuntur harum?...
              <NuxtLink to="" class="text-blue-600">Read More</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
