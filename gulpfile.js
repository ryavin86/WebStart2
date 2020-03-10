var {src, dest, watch} = require('gulp');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("index.html").on('change', browserSync.reload);
  watch("sass/**/*.sass").on('change', serveSass);
  watch("sass/**/*.scss").on('change', serveSass);
  watch("js/*.js").on('change', browserSync.reload);
}

function serveSass() {
  return src("sass/**/*.sass", "sass/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false}))
      .pipe(dest("css"))
      .pipe(browserSync.stream())
};

exports.serve = bs;