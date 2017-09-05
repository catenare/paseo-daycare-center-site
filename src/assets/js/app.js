import $ from 'jquery';
import whatInput from 'what-input';

let WebFont  = require('webfontloader');

window.$ = $;

// import Foundation from 'foundation-sites';

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();
WebFont.load({
  google: {
    families: ['Assistant', 'Rubik Mono One', 'Short Stack']
  }
});
