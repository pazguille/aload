/**
 * aload - v1.2.1
 *
 * Copyright (c) 2015, @pazguille <guille87paz@gmail.com>
 * Released under the MIT license.
 */
/**
 * Loads images, scripts, styles, iframes, videos and audios asynchronously.
 * @param {NodeList} [nodes] - A NodeList of elements. By default, it is the result of `querySelectorAll('[data-aload]')`.
 * @returns {NodeList}
 */
function aload(nodes) {
  'use strict';

  nodes = nodes || window.document.querySelectorAll('[data-aload]');

  if (nodes.length === undefined) {
    nodes = [nodes];
  }

  var i = 0,
      len = nodes.length,
      node;

  for (i; i < len; i += 1) {
    node = nodes[i];
    node[ node.tagName !== 'LINK' ? 'src' : 'href' ] = node.getAttribute('data-aload');
    node.removeAttribute('data-aload');
  }

  return nodes;
}