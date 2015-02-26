'use strict';

/**
 * Module Dependencies.
 */
var fs = require('fs');
var jsdom = require('jsdom');
var assert = require('better-assert');

/**
 * Load test html
 */
var html = fs.readFileSync('./test/index.html', 'utf-8');

/**
 * Define window and document.
 */
var window = jsdom.jsdom(html).parentWindow;
var document = window.document;

/**
 * aload
 */
var aload = require('../');

/**
 * Tests
 */
describe('aload', function () {

  it('should be defined.', function () {
    assert(aload !== undefined);
  });

  it('should be a function.', function () {
    assert(typeof aload === 'function');
  });
});

describe('An image', function () {
  var img = document.querySelector('img');
  var loaded = false;

  it('shouldn\'t have "src" attibute', function () {
    assert(img.src === '');
  });

  it('should have "data-aload" attibute', function () {
    assert(img.getAttribute('data-aload') !== '');
  });

  it('should set "src" attibute', function (done) {
    var src = img.getAttribute('data-aload');
    img.onload = function () {
      if (!loaded) { done(); }
      loaded = true;
    };
    aload(img);
    assert(img.src !== '');
    assert(img.src === src);
  });

  it('should remove "data-aload" attibute', function () {
    assert(img.getAttribute('data-aload') === null);
  });
});
