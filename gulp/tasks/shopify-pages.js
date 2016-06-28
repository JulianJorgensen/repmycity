var $             = require('gulp-load-plugins')();
var browserSync = false;
var config        = require('../util/loadConfig').shopify;
var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var sequence      = require('run-sequence');
var cache         = require('gulp-cached');

// BUILD SHOPIFY PAGES (USED FOR ANGULAR TEMPLATES)
gulp.task('shopify-pages', function(){
  return gulp.src(config.pagesSrc)
    .pipe(cache())
    .pipe(gulp.dest(config.pagesDest));
});
