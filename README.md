# aload.js [![Build Status](https://secure.travis-ci.org/pazguille/aload.png)](http://travis-ci.org/pazguille/aload) [![devDependency Status](https://david-dm.org/pazguille/aload/dev-status.png)](https://david-dm.org/pazguille/aload#info=devDependencies)

> Loads images, background images, scripts, styles, iframes, videos and audios asynchronously (just 260 bytes).

## API

### aload([nodeList])
Loads images, background images, scripts, styles, iframes, videos and audios asynchronously.
- `nodeList` {NodeList} [optional] - A NodeList of elements. By default, it is the result of `querySelectorAll('[data-aload]')`.

```js
aload();
```

## Installation

    $ npm install aload

As standalone just include `aload` function (just 260 bytes) inline into your HTML file:

```html
<script>
  function aload(t){"use strict";t=t||window.document.querySelectorAll("[data-aload]"),void 0===t.length&&(t=[t]);var a,e=0,r=t.length;for(e;r>e;e+=1)a=t[e],a["LINK"!==a.tagName?"src":"href"]=a.getAttribute("data-aload"),a.removeAttribute("data-aload");return t}
</script>
```

## Usage

1. You should use `data-aload` attributes instead of `src` or `href` in your HTML tags (an image for example):

  ```html
  <img data-aload="http://foobar.com/foo.png" width="400" height="300">
  ```
  - `data-aload` - URL of the source.

2. Now, you can start to load your images asynchronously!

  ```js
  // Onload
  window.onload = function () {
    aload();
  };
  ```

### You can load everything asynchronously.

- images
- background images
- scripts
- styles
- iframes
- videos
- audios

#### IMG

```html
<img data-aload="http://foobar.com/foo.png" width="400" height="300">
```

### Backgrounds

1. You must add the following CSS snippet.

  ```css
  [data-aload] { background-image: none !important; }
  ```

2. Your own CSS.

  ```css
  .foo {
    background: url('http://foobar.com/foobar.png');
  }
  ```

3. In your HTML.

  ```html
  <div data-aload class="foo"></div>
  ```

#### SCRIPT

  ```html
  <script data-aload="http://foobar.com/foo.js"></script>
  ```

#### LINK (styles)

  ```html
  <link data-aload="http://foobar.com/foo.css" rel="stylesheet">
  ```

#### IFRAME

  ```html
  <iframe data-aload="http://foobar.com" src="javascript:false"></iframe>
  ```

#### VIDEO

  ```html
  <video data-aload="http://foobar.com/bar.mp4" controls></video>
  ```

#### AUDIO

  ```html
  <audio data-aload="http://foobar.com/foo.mp3" controls></audio>
  ```

### Progressive Enhancement

If you are a front-end developer you must know about [Progressive enhancement]('http://alistapart.com/article/understandingprogressiveenhancement').
Progressive enhancement focuses on the content and it must be showed without JavaScript.

For example, to show images when JavaScript is not enabled you should include the images inside `<noscript>` tag.

  ```html
  <img data-aload="http://foobar.com/foo.png"
       src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
       width="400"
       height="300">
  <noscript>
      <img src="http://foobar.com/foo.png" width="400" height="300">
  </noscript>
  ```

## Development

1. Install [Git](http://git-scm.com/) and [NodeJS](http://nodejs.org/).

2. Install `gulp`:

        $ npm install gulp -g

3. Open your terminal and clone `aload` by running:

        $ git clone git@github.com:pazguille/aload.git

4. Go to aload's folder:

        $ cd aload

5. Move to develop branch:

        $ git checkout develop

6. Install its dependencies:

        $ npm install

7. Code, code code!

8. Send pull requests.

### NPM tasks

- `npm run dist`: Creates a distrubution version of `aload`. You should find two files: `./dist/aload.js` and `./dist/aload.min.js`.
- `npm test`: Runs mocha tests.

## Made with ❤ by

- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License

MIT license. Copyright © 2015.
