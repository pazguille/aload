/*!
 * aload.js v1.2.0
 *
 * Copyright (c) 2014, @pazguille
 * Released under the MIT license.
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