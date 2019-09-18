const { src, dest, series, parallel } = require('gulp');
const debug = require('gulp-debug');
const cache = require('gulp-cache');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');

function images() {
  return src('src/*.jpg')
    .pipe(newer('dist/'))
    .pipe(debug())
    .pipe(imagemin())
    .pipe(dest('dist/'));
}

function concatJS() {
  return src('src/*.js')
      .pipe(newer('dist/all.js'))
      .pipe(debug())
      .pipe(concat('all.js'))
      .pipe(dest('dist'));
}

exports.default = series([concatJS,images]);
exports.concatJS = concatJS;
exports.images = images;
