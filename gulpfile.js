var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('default', ['dev'], function () {});

gulp.task('dev', function () {
    gulp.src(['aload.js'])
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {});

gulp.task('dist', ['dev', 'test'], function () {
    gulp.src(['aload.js'])
        .pipe(uglify())
        .pipe(rename('aload.min.js'))
        .pipe(gulp.dest('dist'));
});