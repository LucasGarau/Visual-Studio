const { watch,series, src, dest, parallel } = require('gulp');
const netetjarCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var scss = require('gulp-sass');
var concat = require('gulp-concat');
const babel = require('gulp-babel');

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

function concatjs(){
  return src('dist/js/*.js')
  .pipe(concat('all.js'))
  .pipe(dest('dist/js/'));
}

function concatcss(){
  return src('dist/css/*.css')
  .pipe(concat('all.css'))
  .pipe(dest('dist/css/'));
}



function babel(){
  return src("dist/js/all.js")
  .pipe(babel({
    presets: ["@babel/preset-env"]
  }))
  .pipe(dest("dist/js/allbabel.js"));
}

function sasswatch() {
  watch("sass/*.scss",sass)
  
}

exports.kittens = series(sass,minimitzaCSS, minimitzaJS,concatjs,concatcss,babel);
//exports.cleanifyCSS = minimitzaCSS;
exports.minimitzaJS = minimitzaJS;
exports.minify = parallel(minimitzaJS,minimitzaCSS);
exports.sass = sass;
exports.minimitzaCSS=minimitzaCSS;
exports.sasswatch=sasswatch;