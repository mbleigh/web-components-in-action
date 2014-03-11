# Markdown Element

Now we are going to create our own Polymer custom element that
a user can fill with Markdown code and it will be rendered.

**Estimated Time:** 25 minutes

## Requirements

1. Create a `markdown-content` element that will render its content
   into HTML and display it using the `marked.js` library.
2. Add a `source` attribute to the element that, if `true`, will render
   a `<pre>` tag with the markdown source instead of the rendered content.
   This should default to `false`.
3. The markdown content should be automatically re-rendered whenever
   the HTML content of the element is changed.
   
## Optional Bonus Requirements

1. Create a checkbox to toggle the "source" attribute on and off.
2. When reading the content of the element, remove extraneous indentation before
   the lines to prevent excessive code rendering.
3. Use the hat (`^`) selector in `index.html` to give the first `<h1>` tag a special style.

## Hints

* Implement your element in the provided `markdown-content.html` import file.
* The `marked.js` library is already installed via Bower and is available
  at `/bower_components/markedlib/marked.js`. You can include external scripts
  in imported HTML files.
* To detect and re-render on content changes, you will need to use a
  [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
  that is initialized when the element is attached to the page.
* You can't use `{{ propertyName }}` to render HTML, you have to set `innerHTML` yourself.

## Resources

* [Polymer Data-Binding](http://www.polymer-project.org/docs/polymer/databinding.html)
* [Shadow DOM 201](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201/) (see "The ^ and ^^ combinators")
* [Marked.js](https://github.com/chjj/marked) reference for how to render the markdown