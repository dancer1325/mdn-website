---
title: "<base>: The Document Base URL element"
slug: Web/HTML/Element/base
page-type: html-element
browser-compat: html.elements.base
---

{{HTMLSidebar}}

* **`<base>`** 
  * == [HTML](/en-US/docs/Web/HTML) element / specifies the
    * 👀base URL | ALL document's _relative_ URLs 👀 
  * ⚠️ALLOWED ONLY 1! | document ⚠️
  * if you want to access document's used base URL -> {{domxref('Node.baseURI')}}
    * & it's NOT specified -> == {{domxref("location.href")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>Metadata content.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>There must be no closing tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("head")}} that doesn't contain another {{HTMLElement("base")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

* [global attributes](/en-US/docs/Web/HTML/Global_attributes) / 
  * ⚠️REQUIRED to be specified ⚠️
    * `href` or
    * `target` or
    * `href` & `target`

* `href`
  * == base URL / 
    * used -- throughout the -- document
    * ALLOWED 
      * absolute URLs
      * relative URLs
    * ❌NOT ALLOWED ❌
      * [`data:`](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) URLs
      * `javascript:` URLs
* `target`
  * == 👀**keyword** or **author-defined name** of the default {{Glossary("browsing context")}} 👀
    * -- to show the -- results of navigation / WITHOUT explicit `target` attributes from 
      * {{HTMLElement("a")}},
      * {{HTMLElement("area")}}, or
      * {{HTMLElement("form")}} 
    * keywords / have SPECIAL meanings
      * `_self` (default)
        * == show the result | CURRENT browsing context
      * `_blank`
        * == show the result | NEW, unnamed browsing context
      * `_parent`
        * == show the result &
          * current page | frame -> current one's parent browsing context 
          * there is NO parent -> == `_self`
      * `_top`
        * == show the result 
          * | topmost browsing context  
          * & there is NO parent -> == `_self`

* 👀if `<base>` appears -> place BEFORE OTHER elements / have URLs attribute (_Example:_ {{HTMLElement("link")}} ) 👀

## Usage notes

* 👀if SEVERAL `<base>` elements are used -> ONLY it's used, 👀
  * first `href`
  * first `target` 

* 👀links -- to a -- document's fragment -> are resolved with the `<base>` 👀

* [Open Graph](https://ogp.me/) tags
  * do NOT acknowledge `<base>`
  * recommendations
    * ALWAYS have FULL absolute URLs

## Examples

* [index.html](index.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
