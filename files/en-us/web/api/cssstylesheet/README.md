# [CSSStyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet)

# Interface which
* — represents — 1! CSS stylesheet
* allows
  * modifying the list of rules contained in the stylesheet
    * Check that second div has NOT custom color
* extends from `StyleSheet`
* == collection of `CSSRule` objects
* — is associated with — at most 1! Document
  * pass stylesheets via `<style>` & `<link>`
  * if you clone it -> you create another instance == NOT assigning the same one

# ways to associate with a document
* via `<style>` / `<link>` -- 'index.html' & 'index.html' --
* via `@import` from another style sheet
* via `<?xml-stylesheet ?>` in non-HTML documents -- _Example:_ SVG DOM --
* via `HTTP Link Header` -- TODO: Get an example --
* via user agent (browsers, ..) style sheets
  * Check in browser's devtools, styles, 'computed'

# How to run locally?
* Open in your browser 'index.html' and check the browser's devtools
