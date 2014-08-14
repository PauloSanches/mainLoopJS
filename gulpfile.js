var gulp = require('gulp'),
  fs = require('fs'),
  jshint = require("gulp-jshint"),
  uglify = require("gulp-uglify"),
  watch = require("gulp-watch"),
  rename = require('gulp-rename'),
  pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Build script
gulp.task('build', ['rename'], function(){
    gulp.start('minify');
});

// Minify JavaScript
gulp.task('minify', function() {
  gulp.src('mainLoop.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

// Rename minify file
gulp.task('rename', function(){
  gulp.src('mainLoop.js')
  .pipe(rename('mainLoop.min.js'))
  .pipe(gulp.dest('./'))
});

// Lint JavaScript
gulp.task('lint', function() {
  gulp.src('mainLoop.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test-travis', ['build']);


gulp.task('default', function() {
  gulp.watch('mainLoop.js', ['lint']);
});
