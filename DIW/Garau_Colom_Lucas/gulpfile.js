const { watch,series, src, dest, parallel } = require('gulp');
const netetjarCSS = require('gulp-clean-css');
var pipeline = require('readable-stream').pipeline;
var scss = require('gulp-sass');

function sass() {
  return src("sass/**/*.scss")
  .pipe(scss({outputStyle: "expanded"}))
  .pipe(dest("dist/"))
  
}

function sasswatch() {
  watch("sass/*.scss",sass)
  
}




exports.sass = sass;
exports.sasswatch=sasswatch;