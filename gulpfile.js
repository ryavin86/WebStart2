var gulp = require('gulp');
var browserSync = require('browser-sync').create();

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