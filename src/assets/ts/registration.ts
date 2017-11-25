import $ from "jquery";
import VeeValidate from "vee-validate";
import Vue from "vue";
import CookieLaw from "vue-cookie-law";
import VueRouter from "vue-router";
import Vue2Filters from "vue2-filters";
import Router from "./router";

import whatInput from "what-input"; // eslint-disable-line
import "../js/lib/foundation-explicit-pieces";

import "../scss/app.scss";
import "../scss/registration.scss";

import WebFont from "webfontloader";

// window.$ = $;

const validateConfig = {
  classes: true,
};

$(document).ready( () => {
  $(document).foundation();
  WebFont.load({
    google: {
      families: ["Assistant", "Rubik Mono One", "Short Stack"],
    },
  });

  Vue.use(Vue2Filters);
  Vue.use(VueRouter);
  Vue.use(VeeValidate, validateConfig);

  const v = new Vue(
    {
    data: {
        message: "This is a test",
      },
    el: "#registration-form",
    template:
    `<div>
      <div>Hello {{message}}</div>
      Name: <input v-model="name" type="text">
    </div>`,
    });  // eslint-disable-line

});
