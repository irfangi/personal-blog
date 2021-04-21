<template>
  <div class="grid grid-cols-12">
    <div class="col-span-2 flex justify-center">
      Share
    </div>
    <div class="col-span-10">
      <article>
        <img
          class="w-full my-5"
          :src="require(`~/assets/images/${article.img}`)"
          :alt="article.alt"
        />
        <h1 class="font-bold text-2xl mb-1 text-gray-800">
          {{ article.title }}
        </h1>
        <p class="text-sm text-gray-600 mb-3">
          <span class="mr-3">🗓</span>{{ formatDate(article.updatedAt) }}
        </p>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style lang="scss">
.nuxt-content {
  h1 {
    @apply font-bold;
    @apply text-2xl;
    @apply text-gray-700;
    @apply mb-1;
  }
  h2 {
    @apply font-bold;
    @apply text-xl;
    @apply text-gray-700;
    @apply mb-1;
  }
  h3 {
    @apply font-bold;
    @apply text-lg;
    @apply text-gray-700;
    @apply mb-1;
  }
  h4 {
    @apply font-bold;
    @apply text-base;
    @apply text-gray-700;
    @apply mb-1;
  }
  h5 {
    @apply font-bold;
    @apply text-sm;
    @apply text-gray-700;
    @apply mb-1;
  }
  p {
    @apply mb-2;
    @apply text-gray-700;
  }
  img {
    margin: 16px auto;
    @apply border;
  }
  code {
    @apply p-2;
    @apply font-light;
    @apply text-gray-700;
    @apply bg-gray-200;
    @apply text-sm;
    @apply rounded-sm;
    @apply mb-2;
  }
}
</style>
