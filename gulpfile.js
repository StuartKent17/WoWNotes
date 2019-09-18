const gulp  = require('gulp');
var replace = require('gulp-replace');
var concat = require('gulp-concat');
var html2txt = require('gulp-html2txt');

var html2TextOpts = {
    ignoreHref :true,
    ignoreImage  :true,
}

gulp.task('default', function() {
  return gulp.src('./source/*.html')
    .pipe(concat('merged.html'))
    .pipe(html2txt(html2TextOpts))
    .pipe(replace(/\](.{1})/g, '] $1'))
    .pipe(gulp.dest('./concat/'));
});
