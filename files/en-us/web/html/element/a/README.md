# [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

# Create a hyperlink to
* web pages 
  * Open another window in that web page
* files
  * Open a file in the browser
* email addresses
  * Open email application with that address destination
* specific text portions
  * Focus on the other location
* phone 
  * Open plugin or app to make a phone call
* sms
  * Open plugin or app to send a SMS


# Attributes
* Check '../html/Global attributes'
* `href`
  * URL to which the hyperlink redirects -- Check first section --
  * if you are interacting via keyboard &  it’s present & focus on the <a> & press the enter key → activate the redirection
  * URL schemas supported
    * Check previous section
* `download`
  * linked url — is treated as — downloadable file
  * if there is no filename → browser suggests a 'filename.extension', based on 
    * Content Disposition
    * final segment in pathName
    * MIME type
  * if there is filename → `/` & `\` -> `_`
  * restrictions
    * same-origin policy
      * Check that it does NOT download!!, maybe navigate to
    * schemas
      * `blob:`
      * `data:`
  * vs `Content-Disposition` -- TODO: --
    * if Content-Disposition’s `filename` is specified → priority over `download ’s name` specified
    * if Content-Disposition’s `inline` is specified → `download` has priority
* `target`
  * where to display the linked URL
    * `_self`
      * default one
      * current browsing context
    * `_blank`
      * depends on browser’s configuration
        * new tab
        * new window
      * == `rel=”noopener”` & not set `window.opener`
        * Check the same behavior & in the browser's devtools console the value of window.opener
    * `_parent`
      * parent browsing context
    * `_top`
      * topmost browsing context
* TODO: 

# Accessibility


# Content categories which it belongs to


# How to run locally?
* Open 'index.html' in your browser 
