var $             = require('gulp-load-plugins')();
var config        = require('../util/loadConfig').images;
var gulp          = require('gulp');
var cache         = require('gulp-cached');
var changed 	  = require('gulp-changed');

// BUILD SHOPIFY TEMPLATE FILES
gulp.task('images', function(){
  return gulp.src(config.src)
  	.pipe(changed(config.dest))
    //.pipe(cache())
    .pipe(gulp.dest(config.dest));
});
