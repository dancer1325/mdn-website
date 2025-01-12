---
title: Quirks Mode
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
page-type: guide
---

{{HTMLSidebar}}

* History of web pages
  * | old days, web pages versions built
    * Netscape Navigator version
    * Microsoft IE version
  * | W3C, made the web standards
    * ALL browsers introduced 2 modes (but ≠ previous one’s)
      * Reason: 🧠NOT break MOST EXISTING sites 🧠
  * | right now
    * 👀3 modes used | web browser’s layout engines 👀
      * quirks mode
        * := mode / layout engines -- emulates -- behavior |
          * Navigator 4
          * IE5
        * allows
          * rendering web sites / build | old days
      * limited quirks mode / “almost-standards" mode
        * FEW EXIST
      * no-quirks mode / "full standards" mode
        * := mode / layout engines -- emulates -- behavior | modern specifications of
          * HTML &
          * CSS
        * used by ALL EXISTING browsers

## How do browsers determine which mode to use?

* | [HTML](/en-US/docs/Web/HTML) documents,
  * -- via -- `DOCTYPE` | beginning of the document
    * `<!DOCTYPE html>`
      * the simplest 
      * the recommended 
    * if you do use ANOTHER -> it could trigger
      * ALMOST standards mode or
      * quirks mode
    * if you write SOMETHING BEFORE the DOCTYPE -> trigger quirks mode | Internet Explorer 9 and older

* see [if DIFFERENT browsers choose various modes](https://hsivonen.fi/doctype/)

### XHTML

* TODO:
If you serve your page as [XHTML](/en-US/docs/Glossary/XHTML) using the `application/xhtml+xml` MIME type in the `Content-Type` HTTP header, you do not need a DOCTYPE to enable standards mode, as such documents always use 'full standards mode'. 
Note however that serving your pages as `application/xhtml+xml` will cause Internet Explorer 8 to show a download dialog box for an unknown format instead of displaying your page, as the first version of Internet Explorer with support for XHTML is Internet Explorer 9.

If you serve XHTML-like content using the `text/html` MIME type, browsers will read it as HTML, and you will need the DOCTYPE to use standards mode.

## How do I see which mode is used?

* | Firefox,
  * if page is rendered | quirks or limited-quirks mode -> log a warning | console

* `document.compatMode`
  * if `= "BackCompat”` → quirks mode or limited-quirks mode
  * if `= "CSS1Compat”` → no-quirks mode
