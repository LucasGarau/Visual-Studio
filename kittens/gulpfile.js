const { watch,series, src, dest, parallel } = require('gulp');
const netetjarCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var scss = require('gulp-sass');

function clean(cb) {
  cb();
}


function build(cb) {
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
  .pipe(dest("css/"))
  
}

function watcher() {
  watch("sass/*.scss",compilaSCSS)
  
}

exports.build = build;
exports.default = series(clean, build);
//exports.cleanifyCSS = minimitzaCSS;
//exports.uglijss = minimitzaJS;
exports.minify = parallel(minimitzaJS,minimitzaCSS);
exports.compilaSCSS = compilaSCSS;
exports.watcher=watcher;