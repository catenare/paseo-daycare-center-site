import $ from 'jquery'
import CookieLaw from 'vue-cookie-law'
import getCaptcha from '../ts/captcha'
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import VeeValidate from 'vee-validate'
import ContactForm from '../vue/components/ContactForm'
import whatInput from 'what-input'

import './lib/foundation-explicit-pieces'

let WebFont = require('webfontloader')

window.$ = $

const siteUrl = 'http://paseo.demo/wp-json/paseo/v1/contact-us'
const validateConfig = {
  classes: true
}

$(document).ready(function () {
  $(document).foundation()
  WebFont.load({
    google: {
      families: ['Assistant', 'Rubik Mono One', 'Short Stack']
    }
  })

  Vue.use(Vue2Filters)
  Vue.use(VeeValidate, validateConfig)

  /* eslint-disable no-new */
  new Vue({
    el: '#contact-us-form',
    render: (h) => h(ContactForm, {
      props: {
        captcha: getCaptcha,
        url: siteUrl
      }
    })
  })
  new Vue({
    el: '#cookie-law',
    render: (h) => h(CookieLaw, {
      props: {
        theme: 'royal',
        position: 'top',
        transitionName: 'slideFromTop',
      }
    })
  })
})
