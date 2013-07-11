/**
 * Loads images, scripts, styles, iframes, videos and audios asynchronously.
 * @param {NodeList} [nodes] - A NodeList of elements. By default, it is the result of `querySelectorAll('[data-async]'.
 * @returns {NodeList}
 */
module = module.exports = function (nodes) {

    nodes = nodes || window.document.querySelectorAll('[data-async]');

    if (nodes.length === undefined) {
         nodes = [nodes];
    }

    var i = 0,
        len = nodes.length,
        src,
        node;

    for (i; i < len; i += 1) {
        node = nodes[i];
        src = (node.tagName) !== 'LINK' ? 'src' : 'href';
        node[src] = node.getAttribute('data-async');
        node.removeAttribute('data-async');
    }

    return nodes;
};