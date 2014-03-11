# Scratch: Offline Markdown Notepad

Today we're going to build a simple tool that will give users a
"scratch pad" for taking Markdown notes such as blog post drafts.
These notes will be kept in `localStorage` and should be able to
be edited, created, deleted, and viewed.

**Estimated Time:** 1 hour

## Requirements

**Note:** This is a pretty big project and may take longer than the
time you have allotted. Take this as an opportunity to explore and get
as far as you can.

1. Create a `<scratch-notes>` element that displays a list of existing
   notes in `localStorage`. Each note should be a simple JSON object
   with a `title` and `content` attribute.
2. Add a `create(title)` method to the `<scratch-notes>` element such that
   when it is run a new note with the given title (or a default generated
   title if none is provided) is added to the list of notes **and immediately
   saved to localStorage**.
3. Create a button that, when clicked, triggers the `create()` method on
   a `<scratch-notes>` element.
4. Create a `<scratch-editor>` element that has a `key` attribute. The `key`
   attribute should correspond to the array index of a note and should load
   that note into the `note` attribute.
5. If there is no `key` (and therefore no `note`) on the editor, display a message
   about selecting a note to get started.
6. With a note, display its `title` in a text field and `content` in a textarea. When
   either of these are modified, the changed should immediately be persisted
   to `localStorage`.
7. Using the `<markdown-content>` element you created in exercise two, render
   the Markdown content inside the `<scratch-editor>` with live-updating preview.
8. Show a "Delete" button inside the editor which, when clicked, asks for user
   confirmation and then removes the note from the UI and `localStorage`.
   
## Hints

* Remember that you need to individually import any polymer elements you want to use. For example,
  `<link rel="import" href="/bower_components/polymer-localstorage/polymer-localstorage.html">`
  will import `<polymer-localstorage>`.
* Each of your elements should get its own file and be imported using HTML Imports.
* The `polymer-localstorage` element can be a bit finicky. If necessary, you can use
  `load()` to reload it manually and `save()` to save manually.
* There are a [few different ways](http://www.polymer-project.org/articles/communication.html) to communicate between Polymer elements. In my solution
  I used custom events, but whatever works!
* It may be helpful to manually populate some seed data while you're still working on the
  early mechanics. If you're storing your notes in the `notes` key on `localStorage` you
  could do that by running something like this in the console:

  ```js
  localStorage["notes"] = JSON.stringify([{title: "First Note", content: "Hello **world**"}, {title: "Second Note", content: "Goodbye *world*"}]);
  ```

## Resources

* [Polymer Elements](http://www.polymer-project.org/docs/elements/polymer-elements.html) in particular, take a look at `polymer-localstorage`
* [Polymer Databinding](http://www.polymer-project.org/docs/polymer/databinding.html) will also come in useful