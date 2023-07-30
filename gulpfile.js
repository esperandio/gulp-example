const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function transpile() {
  return babel({
    presets: ['@babel/preset-env']
  });
}

function minify() {
  return uglify();
}

// Task to transpile and minify JavaScript
gulp.task('build', function () {
  return gulp.src('js/src/**/*.js')
    .pipe(transpile())
    .pipe(minify())
    .pipe(gulp.dest('js/dist'));
});

// Watch task to automatically run the 'build' task when changes are detected
gulp.task('dev', function () {
  gulp.watch('js/src/**/*.js', gulp.series('build'));
});
