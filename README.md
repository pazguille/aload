# Async Load

Loads images, scripts, styles, iframes, videos and audios asynchronously.

## Installation

    $ component install pazguille/aload

See: [https://github.com/component/component](https://github.com/component/component)

### Standalone
Also, you can use the standalone version:
```html
<script src="standalone/aload.js"></script>
```

## How-to

You should use the following HTML code:

#### IMG
```html
<ing data-async="http://foo.bar.com"
     src="http://foo.bar.com/foobar.png"
     width="400"
     height="300">
```

#### SCRIPT
```html
<script data-async="http://foobar.com/foo.js"></script>
```

#### LINK (styles)
```html
<link data-async="http://foobar.com/foo.js"
      href="about:blank"
      rel="stylesheet">
```

#### IFRAME
```html
<iframe data-async="http://foobar.com" src="about:blank"></iframe>
```

#### VIDEO
```html
<video data-async="http://foobar.com/bar.mp4" controls></video>
```

#### AUDIO
```html
<audio data-async="http://foobar.com/foo.mp3" controls></audio>
```

- `data-async` - URL of the source.

Then, require the `aload` component (avoid this step if you use the standalone version):
```js
var aload = require('aload');
```

Now, you can start to load your images, scripts, styles, iframes, videos and audios asynchronously!

```js
// Onload
window.onload = function () {
    aload();
};
```

### Progressive Enhancement
If you are a front-end developer you must know about [Progressive enhancement]('http://alistapart.com/article/understandingprogressiveenhancement').
Progressive enhancement focuses on the content and it must be showed without JavaScript.

The `.no-js` class should be removed by JavaScript, so you can display/hide things using CSS if JavaScript is disabled.

```css
.no-js [data-async] {
    display: none;
}
```

For example, to show images when JavaScript is not enabled you should include the images inside `<noscript>` tag.
```html
<img data-async="foo.jpg"
     src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
     width="400"
     height="300">
<noscript>
    <img src="foo.jpg" width="400" height="300">
</noscript>
```

## API
### aload([nodeList])
Loads images, scripts, styles, iframes, videos and audios asynchronously.
- `nodeList` {NodeList} [optional] - A NodeList of elements. By default, it is the result of `querySelectorAll('[data-async]')`.

```js
aload();
```

## Contact
- Guille Paz (Frontend developer - JavaScript developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
Copyright (c) 2013 [@pazguille](http://twitter.com/pazguille) Licensed under the MIT license.