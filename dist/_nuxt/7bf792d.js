(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(t,e,n){t.exports=n.p+"img/irfangi.6b1cc7d.jpg"},196:function(t,e,n){var map={"./article/001-create-blog-with-nuxt/home.png":197,"./irfangi.jpg":195,"./nuxtjs.jpg":198};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=196},197:function(t,e,n){t.exports=n.p+"img/home.5422361.png"},198:function(t,e,n){t.exports=n.p+"img/nuxtjs.5d0548f.jpg"},201:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("61bfbc3f",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";n(201)},207:function(t,e,n){var r=n(53)(!1);r.push([t.i,".avatar-img[data-v-fad05a6a]{border-radius:94px;max-width:200px;margin:0 auto}.article-desc[data-v-fad05a6a]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}",""]),t.exports=r},222:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 py-4"},[r("div",{staticClass:"col-span-1 md:col-span-1 md:mt-4 relative"},[r("img",{staticClass:"avatar-img",attrs:{src:n(195),alt:"Irfangi Image"}})]),t._v(" "),r("div",{staticClass:"col-span-1 md:col-span-2"},[r("h3",{staticClass:"font-bold text-2xl mt-3 text-gray-700"},[t._v("\n        Hai Selamat Datang, Salam Kenal Semua 👋\n      ")]),t._v(" "),r("p",{staticClass:"my-5 text-gray-500"},[t._v("\n        Website ini adalah catatan tentang hal yang saya pelajari atau tulisan\n        tentang kegiatan telah saya lakukan. Semoga dapat bermanfaat 😁 .\n        "),r("br"),t._v("Kritik dan saran, dapat dikirimkan lewat link di bawah:\n      ")]),t._v(" "),r("a",{staticClass:"border-2 px-3 py-2 rounded my-5 text-gray-700",attrs:{href:""}},[t._v("Feedback 📄")])])])}],c=(n(34),n(2)),l={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.listPost,e.next=3,n("articles").only(["title","description","img","alt","createdAt"]).sortBy("createdAt","asc").fetch();case 3:return r=e.sent,console.log(r),e.abrupt("return",{articles:r});case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){}},o=(n(206),n(41)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"py-4"},[r("h3",{staticClass:"font-semibold text-2xl uppercase text-gray-800 border-b-4 inline-block mb-4"},[t._v("\n      Article\n    ")]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"grid grid-cols-3 gap-4 mb-6"},[r("div",{staticClass:"col-span-3 md:col-span-1"},[r("img",{staticClass:"rounded-lg mt-2",attrs:{src:n(196)("./"+article.img),alt:article.img}})]),t._v(" "),r("div",{staticClass:"col-span-3 md:col-span-2"},[r("h4",{staticClass:"text-gray-800 text-xl font-semibold"},[r("nuxt-link",{attrs:{to:""+(void 0===article.path?"/":article.path)}},[t._v("\n            "+t._s(article.title)+"\n          ")])],1),t._v(" "),r("p",{staticClass:"mb-2 text-sm text-gray-500"},[t._v("20 February 2020")]),t._v(" "),r("p",{staticClass:"text-gray-700 article-desc"},[t._v("\n          "+t._s(article.description)+"\n        ")]),t._v("\n        "+t._s(article.path)+"\n        "),r("p",[r("NuxtLink",{staticClass:"text-blue-600",attrs:{to:"/articles/"+article.title.toLowerCase().replace(/\s/g,"-")}},[t._v("Read More")])],1)])])}))],2)])}),r,!1,null,"fad05a6a",null);e.default=component.exports}}]);