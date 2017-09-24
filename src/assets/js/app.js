import $ from 'jquery'
// import axios from 'axios'
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
// import Hello from '../vue/components/Hello'
import ContactForm from '../vue/components/ContactForm'
// import MarvelProto from '../vue/components/MarvelProto/MarvelProto.vue'
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
  // Vue.component('hello', Hello)
  // Vue.component('marvelproto', MarvelProto)

  // Vue.prototype.$http = axios

  /* eslint-disable no-new */
  new Vue({
    el: '#contact-us-form',
    template: '<contact-form/>',
    components: {
      'contact-form': ContactForm
    }
  })
})
