var {src, dest, watch} = require('gulp');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var sass = require('gulp-sass');

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./WebStart2/index.html").on('change', browserSync.reload);
  watch("./WebStart2/sass/**/*.sass").on('change', serveSass);
  watch("./WebStart2/js/*.js").on('change', browserSync.reload);
}

function serveSass() {
  return src("WebStart2/sass/*.sass")
      .pipe(sass())
      .pipe(dest("Webstart2/css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;