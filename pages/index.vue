<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 py-4">
      <div class="col-span-1 md:col-span-1 md:mt-4 relative">
        <img
          class="avatar-img"
          src="~/assets/images/irfangi.jpg"
          alt="Irfangi Image"
        />
      </div>
      <div class="col-span-1 md:col-span-2">
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
    <div class="py-4">
      <h3
        class="font-semibold text-2xl uppercase text-gray-800 border-b-4 inline-block mb-4"
      >
        Article
      </h3>
      <div
        class="grid grid-cols-3 gap-4 mb-6"
        v-for="article of articles"
        :key="article.slug"
      >
        <div class="col-span-3 md:col-span-1">
          <img
            class="rounded-lg mt-2"
            :src="require(`~/assets/images/${article.img}`)"
            :alt="article.img"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <h4 class="text-gray-800 text-xl font-semibold">
            <nuxt-link :to="article.path">
              {{ article.title }}
            </nuxt-link>
          </h4>
          <p class="mb-2 text-sm text-gray-500">20 February 2020</p>
          <p class="text-gray-700 article-desc">
            {{ article.description }}
          </p>
          <p>
            <NuxtLink :to="article.path" class="text-blue-600"
              >Read More</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, listPost }) {
    const articles = await $content("articles")
      .only(["title", "description", "img", "alt", "createdAt"])
      .sortBy("createdAt", "asc")
      .fetch();
    console.log(articles);
    return { articles };
  },
  mounted() {
    // console.log(this.articles);
  },
};
</script>

<style scoped lang="scss">
.avatar-img {
  border-radius: 94px;
  max-width: 200px;
  margin: 0 auto;
}
.article-desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
</style>
