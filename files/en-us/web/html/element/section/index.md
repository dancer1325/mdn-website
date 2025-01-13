---
title: "<section>: The Generic Section element"
slug: Web/HTML/Element/section
page-type: html-element
browser-compat: html.elements.section
---

{{HTMLSidebar}}

* `<section>`
  * := element / 
    * == 👀GENERIC 👀 standalone section of a document / NO visual DIFFERENCE 
    * 👀NORMALLY, has a heading ({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}} element) 👀
      * useful / good for
        * ALL readers,
        * screen readers,
        * SEO

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## Attributes

* ONLY [global attributes](/en-US/docs/Web/HTML/Global_attributes)

## Usage notes

* uses
  * 👀there is NOT a MORE specific element / represent it 👀
    * if the contents == 
      * standalone, atomic unit of content / makes sense as a standalone piece (_Example:_ blog post or blog comment, or a newspaper article) -> use {{HTMLElement("article")}} 
      * tangential information / works alongside the main content, BUT NOT directly part of it (_Example:_ links, or author bio) -> use {{HTMLElement("aside")}}
      * main content area of a document -> use {{HTMLElement("main")}}
    * if element's goal is as a styling wrapper -> use {{HTMLElement("div")}}
    * _Example:_
      * navigation menu -- should be wrapped in a -- {{htmlelement("nav")}} element
      * list of search results OR a map display + its controls do NOT have specific elements -> it could be wrapped by `<section>`

## Examples

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a
          href="/en-US/docs/Web/HTML/Content_categories#sectioning_content"
          >Sectioning content</a
        >, <a href="/en-US/docs/Web/HTML/Content_categories#palpable_content">palpable content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        ANY element / accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        > <br> <code>&#x3C;section></code> element must NOT be a
        descendant of an {{HTMLElement("address")}} element
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/region_role"
            >region</a
          ></code
        >
        if the element has an
        <a
          href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/"
          >accessible name</a
        >, otherwise
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role"><code>alert</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role"><code>banner</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role"><code>complementary</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role"><code>contentinfo</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role"><code>dialog</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/log_role"><code>log</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role"><code>marquee</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role"><code>navigation</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role"><code>tabpanel</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Region role](/en-US/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Why You Should Choose HTML5 article Over section](https://www.smashingmagazine.com/2020/01/html5-article-section/), by Bruce Lawson
