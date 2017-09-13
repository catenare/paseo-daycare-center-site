import $ from 'jquery'
import Vue from 'vue'
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
})
