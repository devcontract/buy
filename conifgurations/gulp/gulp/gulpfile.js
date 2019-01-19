// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  htmlclean = require('gulp-htmlclean'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;

// HTML processing
gulp.task('html', function() {
  var
    out = folder.build + 'html/',
    page = gulp.src(folder.src + 'html/**/*');

  // minify production code
  if (!devBuild) {
    page = page.pipe(htmlclean());
  }

  return page.pipe(gulp.dest(out));
});

// JavaScript processing
gulp.task('js', function() {

  var jsbuild = gulp.src(folder.src + 'js/**/*')
  
    .pipe(concat('main.js'));

  if (!devBuild) {
    jsbuild = jsbuild

      .pipe(uglify());
  }

  return jsbuild.pipe(gulp.dest(folder.build + 'js/'));

});
