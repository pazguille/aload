'use strict';

/**
 * Module Dependencies.
 */
var mkdirp = require('mkdirp');
var gulp = require('gulp');
var header = require('gulp-header');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var ugifyjs = require('gulp-uglify');

/**
 * Package
 */
var pkg = require('./package.json');

/**
 * Prefix
 */
var prefix = ['/**',
  ' * <%= pkg.name %> - v<%= pkg.version %>',
  ' *',
  ' * Copyright (c) ' + new Date().getFullYear() + ', <%= pkg.author %>',
  ' * Released under the MIT license.',
  ' */',
  ''].join('\n');

/**
 * Create directory
 */
mkdirp('./dist');

/**
 * Build task
 */
gulp.task('build', function() {
  mkdirp('./dist');
  gulp.src('./index.js')
    .pipe(header(prefix, { 'pkg' : pkg }))
    .pipe(replace('module.exports = ', ''))
    .pipe(rename(pkg.name + '.js'))
    .pipe(gulp.dest('./dist/'))

    /**
     * Min task
     */
    .pipe(ugifyjs())
    .pipe(rename(pkg.name + '.min.js'))
    .pipe(gulp.dest('./dist/'))
});

/**
 * Register tasks
 */
gulp.task('default', ['build']);
