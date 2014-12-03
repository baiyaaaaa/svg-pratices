var gulp = require('gulp');

var svgSymbols = require('gulp-svg-symbols');
var connect = require('gulp-connect');

gulp.task('webserver', function(){
  connect.server();
})

gulp.task('sprite', function(){
  return gulp.src('src/svg/*.svg')
  .pipe(svgSymbols())
  .pipe(gulp.dest('assets'));
});

gulp.task('default', function(){
    gulp.run('sprite', 'webserver');
});