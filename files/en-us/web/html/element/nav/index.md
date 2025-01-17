---
title: "<nav>: The Navigation Section element"
slug: Web/HTML/Element/nav
page-type: html-element
browser-compat: html.elements.nav
---

{{HTMLSidebar}}

* **`<nav>`** [HTML](/en-US/docs/Web/HTML)
  * == section of a page / 
    * 👀's goal == block of navigation links (inside OR outside the document)  👀
  * use cases
    * menus,
    * tables of contents,
    * indexes

{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}

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
          >sectioning content</a
        >, palpable content.
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
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
            >navigation</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

* ONLY [global attributes](/en-US/docs/Web/HTML/Global_attributes)

## Usage notes

* BIG block of navigation links
  * != 1! isolated link
  * {{HTMLElement("footer")}}, NORMALLY do NOT have a {{HTMLElement("nav")}} 
* can exist SEVERAL | 1 document
  * _Examples:_ |
    * site navigation
    * intra-page navigation
* \+ [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) -- to promote -- accessibility
* by user agents, to determine whether to omit it

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML document](/en-US/docs/Web/HTML/Element/Heading_Elements).
- [ARIA: Navigation role](/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role)
