/**
 * aload - v1.2.2
 *
 * Copyright (c) 2016, @pazguille <guille87paz@gmail.com>
 * Released under the MIT license.
 */
/**
 * Loads images, scripts, styles, iframes, videos and audios asynchronously.
 * @param {NodeList} [nodes] - A NodeList of elements. By default, it is the result of `querySelectorAll('[data-aload]')`.
 * @returns {NodeList}
 */
function aload(nodes) {
  'use strict';

  var attribute = 'data-aload';

  nodes = nodes || window.document.querySelectorAll('[' + attribute + ']');

  if (nodes.length === undefined) {
    nodes = [nodes];
  }

  [].forEach.call(nodes, function (node) {
    node[ node.tagName !== 'LINK' ? 'src' : 'href' ] = node.getAttribute(attribute);
    node.removeAttribute(attribute);
  });

  return nodes;
}
