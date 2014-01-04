# Async Load

Loads images, scripts, styles, iframes, videos and audios asynchronously.

## How-to

You should use the following HTML code (an image for example):

```html
<img data-async="http://foobar.com/foo.png" width="400" height="300">
```

- `data-async` - URL of the source.

Now, you can start to load your image asynchronously!

```js
// Onload
window.onload = function () {
    aload();
};
```

### You can load images, scripts, styles, iframes, videos and audio.

#### SCRIPT
```html
<script data-async="http://foobar.com/foo.js"></script>
```

#### LINK (styles)
```html
<link data-async="http://foobar.com/foo.js" rel="stylesheet">
```

#### IFRAME
```html
<iframe data-async="http://foobar.com" src="javascript:false"></iframe>
```

#### VIDEO
```html
<video data-async="http://foobar.com/bar.mp4" controls></video>
```

#### AUDIO
```html
<audio data-async="http://foobar.com/foo.mp3" controls></audio>
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
Licensed under the MIT license.

Copyright (c) 2013 [@pazguille](http://twitter.com/pazguille).
