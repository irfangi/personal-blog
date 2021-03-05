<template>
  <div>
    <div class="grid grid-cols-9 gap-4 border-b-2 mb-2 pt-2 pb-5">
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
          Website ini adalah catatan tentang hal yang saya pelajari atau tulisan
          tentang kegiatan telah saya lakukan. Semoga dapat bermanfaat 😁 .
          <br />Kritik dan saran, dapat dikirimkan lewat link di bawah:
        </p>
        <a href="" class="border-2 px-3 py-2 rounded my-5 text-gray-700"
          >Feedback 📄</a
        >
      </div>
    </div>

    <h3
      class="font-semibold text-2xl uppercase text-gray-800 border-b-4 inline-block mb-6"
    >
      Article
    </h3>
    <div class="grid grid-cols-3 gap-4 mb-4" v-for="article of articles" :key="article.slug">
      <div class="col-span-1">
        <img class="rounded-lg mt-2" :src="require(`~/assets/images/${article.img}`)" :alt="article.img" />
      </div>
      <div class="col-span-2">
        <h4 class="text-gray-800 text-xl font-semibold">
          <nuxt-link :to="article.path">
            {{article.title}}
          </nuxt-link>
        </h4>
        <p class="mb-2 text-sm text-gray-500">20 February 2020</p>
        <p class="text-gray-700">
          {{article.description}}
          <NuxtLink :to="article.path" class="text-blue-600">Read More</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, listPost }) {
    const articles = await $content("articles")
      .only(["title", "description", "img", "alt","createdAt"])
      .sortBy("createdAt", "asc")
      .fetch();
    console.log(articles);
    return {articles}
  },
  mounted(){
    // console.log(this.articles);
  }
};
</script>
