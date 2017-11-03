'use strict'

// import plugins from 'gulp-load-plugins'
// import yargs from 'yargs'
import gulp from 'gulp'
import panini from 'panini'
import yaml from 'js-yaml'
import fs from 'fs'

// Load all Gulp plugins into one variable
// const $ = plugins()

// Check for --production flag
// const PRODUCTION = !!(yargs.argv.production)

// Load settings from settings.yml
const {PATHS} = loadConfig()

function loadConfig () {
  let ymlFile = fs.readFileSync('config.yml', 'utf8')
  return yaml.load(ymlFile)
}

// Build the "dist" folder by running all of the below tasks
gulp.task('build',
  gulp.series(pages))

// Build the site, run the server, and watch for file changes
gulp.task('default',
  gulp.series('build', watch))

// Copy page templates into finished HTML files
function pages () {
  return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/helpers/'
    }))
    .pipe(gulp.dest(PATHS.dist))
}

// Load updated HTML templates and partials into Panini
function resetPages (done) {
  panini.refresh()
  done()
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch () {
  gulp.watch('src/pages/**/*.html').on('all', gulp.series(pages))
  gulp.watch('src/{layouts,partials}/**/*.html').on('all', gulp.series(resetPages, pages))
}
