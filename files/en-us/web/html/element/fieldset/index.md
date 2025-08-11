---
title: "<fieldset>: The Field Set element"
slug: Web/HTML/Element/fieldset
page-type: html-element
browser-compat: html.elements.fieldset
---

* `<fieldset>`
  * uses
    * | web form, 
      * 👀group SEVERAL controls & labels (`<label>`) 👀 /
        * FIRST `<legend>` provide a caption -- for the -- `<fieldset>` 
          * if you provide OTHER `<legend>` != caption
  * _Examples:_
    * [mdn-interactive-examples](https://github.com/dancer1325/mdn-interactive-examples/blob/main/live-examples/html-examples/forms/fieldset.html)

## Attributes

* [global attributes](/en-US/docs/Web/HTML/Global_attributes)
- `disabled`
  - if `true` ->
    - ALL form controls / descendants of the `<fieldset>`: disabled
      - == 
        - NOT editable
        - NOT submitted -- along with the -- `<form>`
        - NOT receive any browsing events
          - _Example:_ mouse clicks or focus-related events
      - browsers display those controls
        - by default, grayed out
    - form elements | `<legend>`: NOT disabled
- `form`
  - == `<form>`'s [`id`](/en-US/docs/Web/HTML/Global_attributes#id) / 
    - `<form>` -- related to -- `<fieldset>`
    - allows
      - ALTHOUGH `<fieldset>` is NOT nested | `<form>`, make `<fieldset>` -- part of -- that `<form>`
  - if you want to check the elements / associated with a form -> use
    ```javascript
    HTMLFormElement.elements
    ```
- `name`
  - associated -- with the -- group

## Styling with CSS

* TODO: There are several special styling considerations for `<fieldset>`.

Its {{cssxref("display")}} value is `block` by default, and it establishes a [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context)
* If the `<fieldset>` is styled with an inline-level `display` value, it will behave as `inline-block`, otherwise it will behave as `block`
* By default there is a `2px` `groove` border surrounding the contents, and a small amount of default padding
* The element has {{cssxref("min-inline-size", "min-inline-size: min-content")}} by default.

If a {{htmlelement("legend")}} is present, it is placed over the `block-start` border
* The `<legend>` shrink-wraps, and also establishes a formatting context
* The `display` value is blockified
* (For example, `display: inline` behaves as `block`.)

There will be an anonymous box holding the contents of the `<fieldset>`, which inherits certain properties from the `<fieldset>`
* If the `<fieldset>` is styled with `display: grid` or `display: inline-grid`, then the anonymous box will be a grid formatting context
* If the `<fieldset>` is styled with `display: flex` or `display: inline-flex`, then the anonymous box will be a flex formatting context
* Otherwise, it establishes a block formatting context.

You can feel free to style the `<fieldset>` and `<legend>` in any way you want to suit your page design.


## See also

- The {{HTMLElement("legend")}} element
- The {{HTMLElement("input")}} element
- The {{HTMLElement("label")}} element
- The {{HTMLElement("form")}} element
