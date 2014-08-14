var gulp = require('gulp'),
  fs = require('fs'),
  jshint = require("gulp-jshint"),
  uglify = require("gulp-uglify"),
  watch = require("gulp-watch"),
  rename = require('gulp-rename'),
  clean = require('gulp-clean'),
  pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Default task
gulp.task('default', function() {
  gulp.watch('mainLoop.js', ['lint']);
});

// Lint JavaScript
gulp.task('lint', function() {
  gulp.src('mainLoop.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Build script
gulp.task('build', ['lint','clean'], function() {
  gulp.start('minify');
});

// Minify JavaScript
gulp.task('minify', ['rename'],function() {
  gulp.src('mainLoop.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

// Rename minify file
gulp.task('rename', function() {
  return gulp.src('mainLoop.js')
    .pipe(rename('mainLoop.min.js'))
    .pipe(gulp.dest('./'));
});

// Clean files
gulp.task('clean', function() {
  return gulp.src('mainLoop.min.js', {read: false})
     .pipe(clean());
});

// Travis CI
gulp.task('test-travis', ['build']);
