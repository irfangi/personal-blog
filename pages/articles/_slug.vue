<template>
  <div class="grid grid-cols-12">
    <div class="col-span-10 md:col-span-11">
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
    <div class="col-span-2 flex justify-center py-5 md:col-span-1">
      <div class="share" :class="{ sticky: !stickyShare }">
        <svg class="svg-icon mb-3" viewBox="0 0 20 20" width="32" height="32">
          <path
            d="M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"
          ></path>
        </svg>
        <svg viewBox="0 0 64 64" width="32" height="32" class="mb-2">
          <circle cx="32" cy="32" r="31" fill="#3b5998"></circle>
          <path
            d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
            fill="white"
          ></path>
        </svg>
        <svg viewBox="0 0 64 64" width="32" height="32" class="mb-2">
          <circle cx="32" cy="32" r="31" fill="#00aced"></circle>
          <path
            d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
            fill="white"
          ></path>
        </svg>
        <svg viewBox="0 0 64 64" width="32" height="32" class="mb-2">
          <circle cx="32" cy="32" r="31" fill="#007fb1"></circle>
          <path
            d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  },
  data() {
    return {
      stickyShare: true,
      lastScrollPosition: 0,
    };
  },
  head() {
    return {
      title: `${this.article.title} Irfangi`,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      this.stickyShare = 170 > this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
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
.share {
  @apply flex;
  @apply flex-col;
  &.sticky {
    position: fixed;
  }
}
</style>
