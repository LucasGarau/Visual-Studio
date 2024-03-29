const { watch,series, src, dest, parallel } = require('gulp');
const netetjarCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var scss = require('gulp-sass');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

function minimitzaCSS(){
  return src('src/css/*.css')
  .pipe(netetjarCSS())
  .pipe(dest('dist/'))
}

function minimitzaJS(){
  return src('src/js/*.js')
  .pipe(uglify())
  .pipe(dest('dist/js/'))
}

function compilaSCSS() {
  return src("src/scss/*.scss")
  .pipe(scss())
  .pipe(dest("src/css"))
  
}

function watcher() {
  watch("src/scss/*.scss",compilaSCSS)
  
}

exports.build = build;
exports.default = series(clean, build);
//exports.cleanifyCSS = minimitzaCSS;
//exports.uglijss = minimitzaJS;
exports.minify = parallel(minimitzaJS,minimitzaCSS);
//exports.compilaSCSS = compilaSCSS;
exports.watcher=watcher;