
const { src, dest} = require('gulp');
var scss = require('gulp-sass');
var concat = require('gulp-concat');

function compilaSCSS() {
    return src("node_modules/bootstrap/scss/**/*.scss")
    .pipe(scss())
    .pipe(dest("assets/css/"))
    
  }

  function minimitzaJS(){
    return src('node_modules/bootstrap/js/*.js')
    .pipe(concat("all.js"))
    .pipe(dest('assets/js/'))
  }
  exports.minimitzaJS = minimitzaJS;
  exports.compilaSCSS = compilaSCSS;