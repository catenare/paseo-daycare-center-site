import $ from "jquery";
import VeeValidate from "vee-validate";
import Vue from "vue";
import CookieLaw from "vue-cookie-law";
import Vue2Filters from "vue2-filters";
import App from "../vue/components/Registration/app/index.vue";
import {router} from "./router";

import "../js/lib/foundation-explicit-pieces";

import "../scss/app.scss";
import "../scss/registration.scss";

import WebFont from "webfontloader";

const validateConfig = {
  classes: true,
};

$(document).ready(() => {
  $(document).foundation();
});

WebFont.load({
  google: {
    families: ["Assistant", "Rubik Mono One", "Short Stack"],
  },
});

Vue.use(Vue2Filters);
Vue.use(VeeValidate, validateConfig);

const v = new Vue({
  el: "#registration-form",
  render: (h) => h(App),
  router,
});  // eslint-disable-line
