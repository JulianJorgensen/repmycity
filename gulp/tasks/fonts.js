var $             = require('gulp-load-plugins')();
var config        = require('../util/loadConfig').fonts;
var gulp          = require('gulp');
var cache         = require('gulp-cached');
var changed 	  = require('gulp-changed');

// BUILD SHOPIFY TEMPLATE FILES
gulp.task('fonts', function(){
  return gulp.src(config.src)
    .pipe(cache())
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest));
});
