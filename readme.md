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
    * Change vue alias in webpack config to *vue/dist/vue.min.js*
    * Change url of backend api service. - point to live api site
    * `npm build` - build production site
1. ~~Upload to amazon s3~~
    * ~~Sync via Transmit~~
    * ~~Bucket: paseo-daycare-center~~
### Hosting static files on firebase
* Moved hosting static files from Amazon Cloudfront to Google Firebase
  * Google has CDN endpoints in South Africa
  * Free 1gb of hosting provided
  * Free traffic provided
  * Command line tool to deploy site to firebase hosting
    * `firebase deploy`
1. Build static site - see above
1. Test static site - `firebase serve` - site on localhost:5000
1. Deploy site - `firebase deploy`
### Tag current master
1.  After deploying site
  * `git tag -a v0.0.0 -m 'tag for current release'`
  * `git tag` - list tags
  * `git push --tags` - push to repo
## Convert from foundation-cli to webpack/gulp site
1. Not ready to dig into creating a loader with panini
  * Using gulp to watch panini/html/hbs files
    * Edit gulp file to only watch and build the panini files
  * Using webpack to watch and process all other files.
  * Gets me the benefits of panini but using webpack for processing scss, typescript and  javascript files.
1. `npm-run-all` - run multiple npm scripts - [npm-run-all](https://github.com/mysticatea/npm-run-all)

   


