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
  return src('css/*.css')
  .pipe(netetjarCSS())
  .pipe(dest('dist/css/'))
}

function minimitzaJS(){
  return src('js/*.js')
  .pipe(uglify())
  .pipe(dest('dist/js/'))
}


function sass() {
  return src("sass/*.scss")
  .pipe(scss())
  .pipe(dest("css/"))
  
}

function sasswatch() {
  watch("sass/*.scss",sass)
  
}

exports.build = build;
exports.default = series(clean, build);
//exports.cleanifyCSS = minimitzaCSS;
exports.minimitzaJS = minimitzaJS;
exports.minify = parallel(minimitzaJS,minimitzaCSS);
exports.sass = sass;
exports.minimitzaCSS=minimitzaCSS;
exports.sasswatch=sasswatch;