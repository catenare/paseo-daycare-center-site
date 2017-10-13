# Paseo Daycare and Preschool Site
* Using VueJs for components
* Foundation for sites as the css framework

## Libraries
* Vue - [Vuejs](https://vuejs.org/)
* fingerprint2 - used for browser fingerprinting - [Fingerprint2js](https://github.com/Valve/fingerprintjs2)
* TypeScript - vue components - [Vue Class Component](https://github.com/vuejs/vue-class-component)
* Form validator - vee-validate - [Vee-Validate](http://vee-validate.logaretm.com/)
* Vue The Mask - [Vue The Mask](https://github.com/vuejs-tips/vue-the-mask)
* Cookie Law - [Vue Cookie Law](https://apertureless.github.io/vue-cookie-law/)
* Vue2Filters - [Vue2Filters](https://github.com/freearhey/vue2-filters) - Vuejs 1 filters for Vuejs 2
* Webfontloader- [Webfontloader](https://github.com/typekit/webfontloader)

## Other
* Google Captcha - [Docs](https://developers.google.com/recaptcha/intro)

## Deploying static site
1. Make sure current production version has been tagged.
1. Merge development branch into master.
    * `git merge dev`
1. Update urls to production site
1. Build production site
    * `npm build` - build production site
1. Upload to amazon s3
    * Sync via Transmit
    * Bucket: paseo-daycare-center
    


