import $ from 'jquery'
import getCaptcha from '../ts/captcha'
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import VeeValidate from 'vee-validate'
import ContactForm from '../vue/components/ContactForm'
import whatInput from 'what-input'

import './lib/foundation-explicit-pieces'

let WebFont = require('webfontloader')

window.$ = $

$(document).ready(function () {
  $(document).foundation()
  WebFont.load({
    google: {
      families: ['Assistant', 'Rubik Mono One', 'Short Stack']
    }
  })

  Vue.use(Vue2Filters)
  Vue.use(VeeValidate)

  /* eslint-disable no-new */
  new Vue({
    el: '#contact-us-form',
    render: (h) => h(ContactForm, {
      props: {captcha: getCaptcha}
    })
  })
})
