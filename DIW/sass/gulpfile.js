const { watch, src, dest } = require('gulp');
var scss = require('gulp-sass');

function sass() {
  return src("./src/scss/*.scss")
  .pipe(scss())
  .pipe(dest("./src/css"))
  
}

function sasswatch() {
  watch("./src/scss/**/*.scss",sass)
  
}

exports.sass = sass;
exports.sasswatch=sasswatch;