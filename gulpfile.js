var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var path = require('path');

gulp.task('sass', function () {
  gulp.src(['./node_modules/open-iconic/font/css/open-iconic-bootstrap.scss', './node_modules/bootstrap/scss/bootstrap.scss', './src/scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function () {
  return gulp.src(['./node_modules/open-iconic/font/fonts/**.*', './src/fonts/**/*.*'])
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('img', function () {
  return gulp.src(['./src/img/**/*.*', '!./src/img/**/*.svg'])
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
});

gulp.task('svg', function () {
  return gulp.src('./src/img/*.svg')
    .pipe(gulp.dest('./dist/img'))
});

gulp.task('build', function () {
  gulp.start('sass', 'fonts', 'svg', 'img');
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('default', ['watch'], function () {
  gulp.start('sass');
});