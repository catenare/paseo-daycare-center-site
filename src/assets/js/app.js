import $ from 'jquery'
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import Hello from '../vue/components/Hello'
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

  /* eslint-disable no-new */
  new Vue({
    el: '#contact-us-form',
    template: '<ContactForm/>',
    components: { ContactForm}
  })

})
