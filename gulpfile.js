var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var pathToSass = 'source/scss/*.scss';
var pathToCss  = 'dist/css';
var pathToHtml = 'dist/*.html';
var pathToRootFolder = './dist';

gulp.task('sass', function(){
  return gulp.src(pathToSass)
          .pipe(sass())
          .pipe(gulp.dest(pathToCss))
          .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: pathToRootFolder
  });
  gulp.watch([pathToSass], ['sass']);
  gulp.watch([pathToHtml]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
