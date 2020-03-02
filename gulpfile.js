var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('hello', function(done) {
  console.log('Привет, мир');
  done();
})

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./WebStart2/index.html").on('change', browserSync.reload);
});

gulp.task('default', function () {
  gulp.src('./WebStart2/style.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'));
});