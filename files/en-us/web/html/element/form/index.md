---
title: "<form>: The Form element"
slug: Web/HTML/Element/form
page-type: html-element
browser-compat: html.elements.form
---

* `<form>`
  * := [HTML](../..) element / 
    * 👀== document section / with interactive controls -- for submitting -- information 👀
  * ways to style
    * based on whether `HTMLFormElement.elements` -> you can use the [CSS pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
      * `:valid`
      * `:invalid`

* _Example:_ [here](https://github.com/dancer1325/mdn-interactive-examples/blob/main/live-examples/html-examples/forms/form.html)

## Attributes

* allowed
  * ALL [global attributes](/en-US/docs/Web/HTML/Global_attributes)
  * `accept` {{deprecated_inline}}
    * == Comma-separated [content types](/en-US/docs/Web/SVG/Content_type) / server accepts
    * deprecated ->
      * ❌ NOT recommended to use ❌and should not be used
      * use, instead, [input's `accept` attribute ](/en-US/docs/Web/HTML/Element/input#accept) 
        * == `<input accept>` 
  * `accept-charset`
    * TODO: : Space-separated {{Glossary("character encoding", "character encodings")}} the server accepts. 
    * The browser uses them in the order in which they are listed. 
    * The default value means [the same encoding as the page](/en-US/docs/Web/HTTP/Headers/Content-Encoding).
    * (In previous versions of HTML, character encodings could also be delimited by commas.)

- `autocapitalize`

  - : Controls whether inputted text is automatically capitalized and, if so, in what manner. See the [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) global attribute page for more information.

- `autocomplete`

  - : Indicates whether input elements can by default have their values automatically completed by the browser. `autocomplete` attributes on form elements override it on `<form>`. Possible values:

    - `off`: The browser may not automatically complete entries. (Browsers tend to ignore this for suspected login forms; see [The autocomplete attribute and login fields](/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields).)
    - `on`: The browser may automatically complete entries.

- `name`

  - : The name of the form. The value must not be the empty string, and must be unique among the `form` elements in the forms collection that it is in, if any.

- `rel`
  - : Controls the annotations and what kinds of links the form creates. Annotations include [`external`](/en-US/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/en-US/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/en-US/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/en-US/docs/Web/HTML/Attributes/rel#noopener), and [`noreferrer`](/en-US/docs/Web/HTML/Attributes/rel#noreferrer). Link types include [`help`](/en-US/docs/Web/HTML/Attributes/rel#help), [`prev`](/en-US/docs/Web/HTML/Attributes/rel#prev), [`next`](/en-US/docs/Web/HTML/Attributes/rel#next), [`search`](/en-US/docs/Web/HTML/Attributes/rel#search), and [`license`](/en-US/docs/Web/HTML/Attributes/rel#license). The [`rel`](/en-US/docs/Web/HTML/Attributes/rel) value is a space-separated list of these enumerated values.

### Attributes -- for -- form submission

* == attributes / control behavior | form submission

* `action`
  * == 👀URL / processes the form submission 👀
  * ways to overridden it
    * [button's `formaction` attribute](/en-US/docs/Web/HTML/Element/button#formaction)
    * [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit),
    * [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image)
  * 👀if `method="dialog"` -> this attribute is ignored 👀 
* `enctype`
  * if `method=post` -> `enctype` == form submission's [MIME type](https://en.wikipedia.org/wiki/Mime_type) 
  * POSSIBLE values
    * `application/x-www-form-urlencoded`
      * default value
    * `multipart/form-data`
      * use cases
        * form contains {{HTMLElement("input")}} elements / `type=file`
    * `text/plain`
      * uses
        * debugging purposes
  * ways to overridden it
    * [button's `formenctype` attribute](/en-US/docs/Web/HTML/Element/button#formenctype),
    * [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit), 
    * [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image)
* `method`
  * == [HTTP](/en-US/docs/Web/HTTP) method / submit the form with
  * ALLOWED methods/values (⚠️case insensitive⚠️)
    * `post`
      * form data -- sent as the -- [request body](/en-US/docs/Web/API/Request/body)
    * `get`
      * default
      * form data -- appended, separated by `?`, to the -- `action` URL  
      * uses
        * form [has NO side effects](/en-US/docs/Glossary/Idempotent)
    * `dialog`
      * if form is | {{HTMLElement("dialog")}}, 
        * closes the dialog
        * | submit the form, 
          * fire a `submit` event / NO submit data or clear the form
  * ways to overridden it
    * [button's `formmethod` attribute](/en-US/docs/Web/HTML/Element/button#formmethod),
    * [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit),
    * [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image)
* `novalidate`
  * == Boolean attribute / form should NOT be validated | submitted
    * by default, `false` == form **_is_** validated
  * ways to overridden it
    * [button's `formnovalidate` attribute](/en-US/docs/Web/HTML/Element/button#formnovalidate),
    * [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit),
    * [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image)
* `target`
  * TODO:

    - : Indicates where to display the response after submitting the form. It is a name/keyword for a _browsing context_ (for example, tab, window, or iframe). The following keywords have special meanings:

      - `_self` (default): Load into the same browsing context as the current one.
      - `_blank`: Load into a new unnamed browsing context. This provides the same behavior as setting [`rel="noopener"`](#rel) which does not set [`window.opener`](/en-US/docs/Web/API/Window/opener).
      - `_parent`: Load into the parent browsing context of the current one. If no parent, behaves the same as `_self`.
      - `_top`: Load into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one and has no parent). If no parent, behaves the same as `_self`.

      This value can be overridden by a [`formtarget`](/en-US/docs/Web/HTML/Element/button#formtarget) attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) element.

## Examples

* [mdn interactive examples](https://github.com/dancer1325/mdn-interactive-examples/tree/main/live-examples/html-examples/forms)

```html
<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Do you agree to the terms?</legend>
    <label><input type="radio" name="radio" value="yes" /> Yes</label>
    <label><input type="radio" name="radio" value="no" /> No</label>
  </fieldset>
</form>
```

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/HTML/Content_categories#palpable_content">palpable content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>, but not containing <code>&#x3C;form></code> elements
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">flow content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
         or <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms guide](/en-US/docs/Learn/Forms)
- Other elements that are used when creating forms: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Getting a list of the elements in the form: {{domxref("HTMLFormElement.elements")}}
- [ARIA: Form role](/en-US/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: Search role](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role)
