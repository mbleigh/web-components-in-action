// Screw hand-writing all that HTML, let's autogenerate this sucker.
var SECTION_DELIMITER = /^===$/m
var SUBSECTION_DELIMITER = /^---$/m

$.ajax({
  url: "slides.md",
  dataType: "text"
}).done(function(markdown) {
  var convert = function(text) {
    return marked(text, {sanitize: false});
  }
  var $container = $(".slides");
  
  window.slideMarkdown = markdown;
  var sections = markdown.split(SECTION_DELIMITER)
  
  for(i in sections) {
    sections[i] = sections[i].trim();
    if (sections[i].match(SUBSECTION_DELIMITER)) {
      sections[i] = sections[i].split(SUBSECTION_DELIMITER);
      for (j in sections[i]) {
        sections[i][j].trim();
      }
    }
  }
  
  sections.forEach(function(section) {
    if (typeof section === 'object') {
      var $section = $("<section>");
      section.forEach(function(subsection) {
        $section.append("<section>" + convert(subsection) + "</section>");
      });
      $container.append($section);
    } else {
      $container.append("<section>" + convert(section) + "</section>");
    }
  });
  
  // Full list of configuration options available here:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [
      { src: '/bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: '/bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '/bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '/bower_components/reveal.js/plugin/highlight/highlight.js', callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: '/bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
      { src: '/bower_components/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
  });
});