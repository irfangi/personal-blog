exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("966fd3a0", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_me_vue_vue_type_style_index_0_id_73b2a2b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_me_vue_vue_type_style_index_0_id_73b2a2b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_me_vue_vue_type_style_index_0_id_73b2a2b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_me_vue_vue_type_style_index_0_id_73b2a2b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_me_vue_vue_type_style_index_0_id_73b2a2b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".timeline[data-v-73b2a2b2]{border-left:1px solid #e5e7eb;margin-left:70px;margin-top:14px}.timeline li[data-v-73b2a2b2]{padding:0 0 16px 32px;position:relative}.timeline li span[data-v-73b2a2b2]{position:absolute;transform:translate(-100px,-8px)}.timeline li p[data-v-73b2a2b2]{transform:translateY(-8px)}.timeline li[data-v-73b2a2b2]:after{content:\"\";width:14px;height:14px;position:absolute;transform:translateX(-7px);left:0;top:-1px;border-radius:100%;--tw-bg-opacity:1;background-color:rgba(209,213,219,var(--tw-bg-opacity))}.follow li[data-v-73b2a2b2]{padding-top:.5rem;padding-bottom:.5rem}.follow li a[data-v-73b2a2b2]{margin-left:.75rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-me.vue?vue&type=template&id=73b2a2b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mx-auto py-5"},[_vm._ssrNode("<div class=\"border-b-2 border-gray-200 mb-5 pb-4\" data-v-73b2a2b2><h1 class=\"text-2xl text-gray-700 font-bold border-b-4 inline-block mb-3\" data-v-73b2a2b2>\n      About Me\n    </h1> <p class=\"mb-4\" data-v-73b2a2b2>\n      Hai, perkenalkan saya Irfangi, biasa dipanggil &quot;Fang&quot; atau &quot;Fangi&quot;.\n      Sekarang saya bekerja di (<a href=\"https://www.biznetnetworks.com/\" data-v-73b2a2b2>BIZNET</a>) sebagai Frontend Web Developer.\n    </p> <p data-v-73b2a2b2>\n      Tulisan ini catatan tentang beberapa hal yang baru saya lakukan sebagai\n      sarana sharing dan catatan pribadi. semoga temen temen dapat manfaat\n      dari beberapa catatan yang saya buat.\n    </p></div> <div class=\"mb-5\" data-v-73b2a2b2><h2 class=\"text-xl text-gray-700 font-bold border-b-4 inline-block mb-3\" data-v-73b2a2b2>\n      Timeline\n    </h2> <ul class=\"timeline\" data-v-73b2a2b2><li data-v-73b2a2b2><span data-v-73b2a2b2>1997</span> <p data-v-73b2a2b2>\n          Lahir di Kebumen, Jawa Tengah. Anak ke tiga dari empat bersodara.\n        </p></li> <li data-v-73b2a2b2><span data-v-73b2a2b2>2012</span> <p data-v-73b2a2b2>\n          Masuk salah satu SMK Swasta di KEBUMEN. Kala itu saya memilih\n          jurusan Teknik Kendaraan Ringan (TKR) jurusan ini yang sering di\n          lirik karena jurusan ini sering menghasilkan lulusan yang langsung\n          masuk perusahaan besar seperti ASTRA dll.\n        </p></li> <li data-v-73b2a2b2><span data-v-73b2a2b2>2015</span> <p data-v-73b2a2b2>\n          2015 adalah tahun kelulusan, Tidak sesuai ekspetasi ketika teman\n          sekelas mulai mendaftar kerja, saya tidak bisa ikut karena terhalang\n          masalah umur. Kala itu pendafar minimal berusia 18 tahun, sedangkan\n          umur saya baru 17 tahun.\n        </p> <p data-v-73b2a2b2>\n          Sampai Agustus akhir, dengan segala pertimbangan akhirnya saya\n          memutuskan untuk kuliah jurusan Teknik Informatika di Yogyakarta.\n          Saat itu juga pertama kali saya mempunyai laptop pribadi.\n        </p></li> <li data-v-73b2a2b2><span data-v-73b2a2b2>2018</span> <p data-v-73b2a2b2>\n          Iseng ikut workshop big data di kampus. akhirnya saya dan beberapa\n          teman saya yang lolos workshop ditawari untuk internship selama 3\n          bulan di perusaan\n          <a href=\"http://www.indonesiaindicator.com/\" data-v-73b2a2b2>Indonesia Indicator</a>\n          yang berada di Tangerang Selatan.\n        </p> <p data-v-73b2a2b2>\n          Beberapa bulan setelah internship tersebut saya di tawari bekerja\n          sebagai Backend Web Developer di\n          <a href=\"https://www.tsmid.com/\" data-v-73b2a2b2>Tata Sarana Mandiri (TSM)</a> yang\n          saat itu terdapat cabang di Yogyakarta. Mulai dari saat itu saya\n          mulai kuliah sambil bekerja.\n        </p></li> <li data-v-73b2a2b2><span data-v-73b2a2b2>2019</span> <p data-v-73b2a2b2>\n          Maret, Akhirnya diwisuda. walaupun harus drop selama seminggu karena\n          kecapean setelah wisuda.\n        </p></li> <li data-v-73b2a2b2><span data-v-73b2a2b2>2021</span> <p data-v-73b2a2b2>\n          2019 Akhir, saya mencoba pindah haluan dari Backend ke Frontend web\n          dan bekerja di\n          <a href=\"https://www.biznetnetworks.com/\" data-v-73b2a2b2>BIZNET</a> sampai\n          sekarang.\n        </p></li></ul></div> <div class=\"border-t-2 border-gray-200 mb-5 pt-4\" data-v-73b2a2b2><ul class=\"follow\" data-v-73b2a2b2><li data-v-73b2a2b2>\n        📭\n        <a href=\"mailto:irfangi564@gmail.com\" data-v-73b2a2b2>irfangi564@gmail.com</a></li> <li data-v-73b2a2b2>\n        🎑\n        <a href=\"https://www.instagram.com/irfngi/\" data-v-73b2a2b2>@irfngi</a></li> <li data-v-73b2a2b2>\n        🐙\n        <a href=\"https://github.com/irfangi\" data-v-73b2a2b2>@irfangi</a></li> <li data-v-73b2a2b2>\n        🔗\n        <a href=\"https://irfangi-portofolio.herokuapp.com/\" data-v-73b2a2b2>https://irfangi-portofolio.herokuapp.com/</a></li></ul></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about-me.vue?vue&type=template&id=73b2a2b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-me.vue?vue&type=script&lang=js&
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
/* harmony default export */ var about_mevue_type_script_lang_js_ = ({
  head() {
    return {
      title: "About Me | Irfangi"
    };
  }

});
// CONCATENATED MODULE: ./pages/about-me.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_about_mevue_type_script_lang_js_ = (about_mevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about-me.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_about_mevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "73b2a2b2",
  "1fb4695c"
  
)

/* harmony default export */ var about_me = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-me.js.map