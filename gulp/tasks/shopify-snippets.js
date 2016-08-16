var $             = require('gulp-load-plugins')();
var browserSync = false;
var config        = require('../util/loadConfig').shopify;
var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var cache         = require('gulp-cached');

var changed 	  = require('gulp-changed');

const DEST = config.snippetsDest;
const SRC = config.snippetsSrc;

// BUILD SHOPIFY SNIPPETS FILES
gulp.task('shopify-snippets', function(){
  return gulp.src(SRC)
  	.pipe(changed(DEST))
    //.pipe(cache())
    .pipe(gulp.dest(DEST));
});