const { watch,series, src, dest, parallel } = require('gulp');
const netetjarCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var scss = require('gulp-sass');
var concat = require('gulp-concat');
const htmlValidator = require('gulp-w3c-html-validator');
//const babel = require('gulp-babel');
const workboxBuild = require('workbox-build');


function compilaSCSS() {
  return src("libs/bootstrap-4.5.3/scss/*.scss")
  .pipe(scss())
  .pipe(netetjarCSS())
  .pipe(dest("assets/css/bootstrap"))
  
}

function watchSCSS() {
  watch("**/*.scss",compilaSCSS)
  
}


function minifyJS(){
  return src('assets/js/*.js')
  .pipe(uglify())
  .pipe(dest('assets/js/'))
}

function mergeJS(){
  return src('assets/js/*.js')
  .pipe(concat('all.js'))
  .pipe(dest('assets/js/'));
}

function validHTML(){
  return src('./*.html')
         .pipe(htmlValidator())
         .pipe(htmlValidator.reporter());
}


/* No funciona de el tot be he acabat utilitzant el cli.

function babelfun(){
  return src("assets/js/all.js")
  .pipe(babel({
    presets: ["@babel/preset-env"]
    // libs/bootstrap-4.5.3/.babelrc.js
  }))
  .pipe(dest("dist"));
}
*/
function workbox(){
  return workboxBuild.generateSW({
    globDirectory: 'assets',
    globPatterns: [
      '**/*.{html,json,js,css}',
    ],
    swDest: 'sw.js',
  });
};

exports.compilaSCSS = compilaSCSS;
exports.watchSCSS=watchSCSS;
exports.mergeJS=mergeJS;
exports.minifyJS=minifyJS;
exports.validHTML=validHTML;
//exports.babelfun=babelfun;
exports.workbox=workbox;
