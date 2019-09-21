const gulp  = require('gulp');
var replace = require('gulp-replace');
var concat = require('gulp-concat');
var html2txt = require('gulp-html2txt');

var html2TextOpts = {
    ignoreHref :true,
    ignoreImage  :true,
}

var builds = {
    patchOnly : ["source/official/patches/*.html"],
    aprilOnly : [
      "source/official/april_fools/*.html",
      "source/fansites/april_fools/*.html"
    ],
    mordern_speculation: [
      "source/official/patches/7*.html",
      "source/official/patches/8*.html",
    ],    
    mordern_speculation_funny: [
      "source/official/patches/7*.html",
      "source/official/patches/8*.html",
      "source/official/april_fools/*.html",
      "source/fansites/april_fools/*.html"
    ],
    everything: ["source/**/*.html"]
    // idk maybe a speculation variant 
}

var defaultTasks = Object.keys(builds);
defaultTasks.forEach(function(taskName) {
   gulp.task(taskName, function() {
       return gulp.src(jsFiles[taskName])
       .pipe(concat('merged.html'))
       .pipe(replace("&nbsp;", " "))
       .pipe(replace("<p>", "<br/><p>"))
       .pipe(replace("<ul>", "<br/><ul>"))
       .pipe(html2txt(html2TextOpts))
       .pipe(replace(/\]([a-zA-Z0-9]{1})/g, '] $1'))
       .pipe(replace(/([a-zA-Z0-9]{1})\[/g, '$1 ['))
       .pipe(gulp.dest('./concat/'));
   });
});


// add a function that combines the files but prefaces it with Patch [Filename], I hope I don't have to go back through and add patch names