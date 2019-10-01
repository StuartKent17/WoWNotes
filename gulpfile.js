const gulp  = require('gulp');
var replace = require('gulp-replace');
var concat = require('gulp-concat');
var html2txt = require('gulp-html2txt');
var cheerio = require('gulp-cheerio');

var html2TextOpts = {
    ignoreHref :true,
    wordwrap :false,
    ignoreImage  :true,
}


var news_path = "source/fansites/news/*.html";
var news_path_txt = "source/fansites/news_txt/";

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
    // Yeah I could just move it, fite me
    everything: [
      "source/**/*.html", 
      "!" + news_path
    ]
    // idk maybe a speculation variant 
}

var defaultTasks = Object.keys(builds);
defaultTasks.forEach(function(taskName) {
   gulp.task(taskName, function() {
       return gulp.src(builds[taskName])
       .pipe(concat(taskName + '.html'))
       .pipe(replace("&nbsp;", " "))
       .pipe(replace("<p>", "<br/><p>"))
       .pipe(replace("<ul>", "<br/><ul>"))
       .pipe(html2txt(html2TextOpts))
       .pipe(replace(/\]([a-zA-Z0-9]{1})/g, '] $1'))
       .pipe(replace(/([a-zA-Z0-9]{1})\[/g, '$1 ['))
       .pipe(gulp.dest('./concat/'));
   });
});

gulp.task( 'default',
   gulp.parallel(
      defaultTasks.map(function(name) { return name; })
   )
);

gulp.task('news', function () {
  return gulp
    .src([news_path])
    .pipe(cheerio(function ($, file, done) {
      
      $(":root").replaceWith($('.post').eq(0))
      
      done();
    }))
    .pipe(gulp.dest(news_path_txt));
});


// add a function that combines the files but prefaces it with Patch [Filename], I hope I don't have to go back through and add patch names