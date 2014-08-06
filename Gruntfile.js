module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'banner': {
      'full': [
        '/*!',
        ' * aload.js v<%= pkg.version %>',
        ' *',
        ' * Copyright (c) <%= grunt.template.today("yyyy") %>, @pazguille',
        ' * Released under the MIT license.',
        ' */\n'
      ].join('\n'),
      'min': '/*! aload.js v<%= pkg.version %> Released under the MIT license. */'
    },

    'concat': {
      'options': {
        'stripBanners': {
          'options': {
            'block': true,
            'line': true
          }
        }
      },

      'js': {
        'options': {
          'banner': '<%= banner.full %>'
        },
        'src': ['./aload.js'],
        'dest': './dist/aload.js'
      }
    },

    'uglify': {
      'options': {
        'mangle': true,
        'banner': '<%= banner.min %>'
      },

      'js': {
        'src': ['<%= concat.js.dest %>'],
        'dest': './dist/aload.min.js'
      }
    },

    'jslint': { // configure the task
      'files': ['<%= concat.js.dest %>'],
      'directives': {
        'browser': true,
        'node': true,
        'nomen': true,
        'todo': true,
        'white': true,
        'indent': 2,
        'regexp': true,
        'ass': true
      },
      'options': {
        'errorsOnly': true, // only display errors
        'failOnError': false, // defaults to true
        'shebang': true // ignore shebang lines
      }
    },

    'jasmine': {
      'src': ['dist/aload.js'],
      'options': {
        'specs': ['test/spec.js'],
        'version': '1.3.1'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Resgister task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('test', ['concat', 'jasmine']);
  grunt.registerTask('lint', ['concat', 'jslint']);
  grunt.registerTask('dist', ['concat', 'uglify']);
};