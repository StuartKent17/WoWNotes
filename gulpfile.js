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
    .pipe(replace("&nbsp;", " "))
    .pipe(replace("<p>", "<br/><p>"))
    .pipe(replace("<ul>", "<br/><ul>"))
    .pipe(html2txt(html2TextOpts))
    .pipe(replace(/\]([a-zA-Z0-9]{1})/g, '] $1'))
    .pipe(replace(/([a-zA-Z0-9]{1})\[/g, '$1 ['))
    .pipe(gulp.dest('./concat/'));
});


// add a function that combines the files but prefaces it with Patch [Filename], I hope I don't have to go back through and add patch names