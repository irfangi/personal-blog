export default {
  head: {
    title: "Irfangi | Personal Blog",
    htmlAttrs: {
      lang: "id",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  },

  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxt/content"],
  content: {
    liveEdit: false,
  },
};