# [HTMLElement: contentEditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable)

## Possible values
* `true`
  * Double click in the element and edit it
    * If formatting (bold, italic, ..) -> enabled
    * If you past paste richer text formatting -- _Example:_ excell sheet -- -> enabled
    * Inherited by their children elements!!
* `false`
  * Although you double click, you can NOT edit it
  * Default one
  * Inherited by their children elements!!
* `plaintext-only`
  * Double click in the element and edit it
    * If formatting (bold, italic, ..)
      * edit the existing one -> enabled
      * paste it -> disabled
    * If you past paste richer text formatting -- _Example:_ excell sheet -- -> disabled
    * Inherited by their children elements!!
* `inherit`
  * Inherits parent's editable status
  * It's redundant since ALL REST by default are inheir by their children
    * Check https://github.com/mdn/content/issues/22048

## How to run locally?
* Open 'index.html' in your browser 
