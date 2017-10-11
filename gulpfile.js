// We have to require our dependencies
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var sourcemaps = require('gulp-sourcemaps');

// create a TASK to compile Sass into CSS using gulp-sass
gulp.task('css', function() {
   gulp.src(['./app/scss/styles.scss'])
   .pipe($.sass({outputStyle: 'compressed'}))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./public/css'));
});

// create a TASK to WATCH for changes in your files
// this will "watch" for any changes in your files and rerun gulp if necessary
gulp.task('watch', function() {
   gulp.watch(['./app/**/*.scss'], ['css']);
});

// finally, create a TASK that will run all commands when typing "gulp"
// in Terminal
gulp.task('default', ['css', 'watch'], function() {});
