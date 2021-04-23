exports.ids = [3];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/irfangi.6b1cc7d.jpg";

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./article/001-create-blog-with-nuxt/home.png": 26,
	"./irfangi.jpg": 24,
	"./nuxtjs.jpg": 27
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 25;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home.5422361.png";

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nuxtjs.5d0548f.jpg";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("efac361a", content, true, context)
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23f4f5e1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23f4f5e1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23f4f5e1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23f4f5e1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23f4f5e1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".avatar-img[data-v-23f4f5e1]{border-radius:94px;max-width:200px;margin:0 auto}.article-desc[data-v-23f4f5e1]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=23f4f5e1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 py-4\" data-v-23f4f5e1><div class=\"col-span-1 md:col-span-1 md:mt-4 relative\" data-v-23f4f5e1><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt=\"Irfangi Image\" class=\"avatar-img\" data-v-23f4f5e1></div> <div class=\"col-span-1 md:col-span-2\" data-v-23f4f5e1><h3 class=\"font-bold text-2xl mt-3 text-gray-700\" data-v-23f4f5e1>\n        Hai Selamat Datang, Salam Kenal Semua 👋\n      </h3> <p class=\"my-5 text-gray-500\" data-v-23f4f5e1>\n        Website ini adalah catatan tentang hal yang saya pelajari atau tulisan\n        tentang kegiatan telah saya lakukan. Semoga dapat bermanfaat 😁 .\n        <br data-v-23f4f5e1>Kritik dan saran, dapat dikirimkan lewat link di bawah:\n      </p> <a href class=\"border-2 px-3 py-2 rounded my-5 text-gray-700\" data-v-23f4f5e1>Feedback 📄</a></div></div> "),_vm._ssrNode("<div class=\"py-4\" data-v-23f4f5e1>","</div>",[_vm._ssrNode("<h3 class=\"font-semibold text-2xl uppercase text-gray-800 border-b-4 inline-block mb-4\" data-v-23f4f5e1>\n      Article\n    </h3> "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"grid grid-cols-3 gap-4 mb-6\" data-v-23f4f5e1>","</div>",[_vm._ssrNode("<div class=\"col-span-3 md:col-span-1\" data-v-23f4f5e1><img"+(_vm._ssrAttr("src",__webpack_require__(25)("./" + (article.img))))+(_vm._ssrAttr("alt",article.img))+" class=\"rounded-lg mt-2\" data-v-23f4f5e1></div> "),_vm._ssrNode("<div class=\"col-span-3 md:col-span-2\" data-v-23f4f5e1>","</div>",[_vm._ssrNode("<h4 class=\"text-gray-800 text-xl font-semibold\" data-v-23f4f5e1>","</h4>",[_c('nuxt-link',{attrs:{"to":("/" + (article.path===undefined?'':article.path))}},[_vm._v("\n            "+_vm._s(article.title)+"\n          ")])],1),_vm._ssrNode(" <p class=\"mb-2 text-sm text-gray-500\" data-v-23f4f5e1>20 February 2020</p> <p class=\"text-gray-700 article-desc\" data-v-23f4f5e1>"+_vm._ssrEscape("\n          "+_vm._s(article.description)+"\n        ")+"</p> "),_vm._ssrNode("<p data-v-23f4f5e1>","</p>",[_c('NuxtLink',{staticClass:"text-blue-600",attrs:{"to":("/" + (article.path===undefined?'':article.path))}},[_vm._v("Read More")])],1)],2)],2)})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=23f4f5e1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    listPost
  }) {
    const articles = await $content("articles").only(["title", "description", "img", "alt", "createdAt"]).sortBy("createdAt", "asc").fetch();
    console.log(articles);
    return {
      articles
    };
  },

  mounted() {// console.log(this.articles);
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23f4f5e1",
  "4a3fd2fe"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map