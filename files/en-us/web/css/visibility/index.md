---
title: visibility
slug: Web/CSS/visibility
page-type: css-property
browser-compat: css.properties.visibility
---

{{CSSRef}}

* := CSS property / ⚠️WITHOUT changing the document's layout ⚠️
  * shows OR hides 
    * element
    * {{HTMLElement("table")}}'s rows OR columns 

{{EmbedInteractiveExample("pages/css/visibility.html")}}

* ⚠️if you want hide an element & remove it | document layout -> use {{cssxref("display")}} == `none`⚠️

## Syntax

```css
/* Keyword values */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Global values */
visibility: inherit;
visibility: initial;
visibility: revert;
visibility: revert-layer;
visibility: unset;
```

### Values

- `visible`
  - element box is visible
- `hidden`
  - element box is invisible (== NOT drawn),
    - layout -- as -- normal 
    - if you set `visibility=visible` | 's descendants -> visible the descendants  
    - -> NOT ALLOWED focus | element
      - _Example:_ navigate -- through -- [tab indexes](/en-US/docs/Web/HTML/Global_attributes/tabindex)
- `collapse`
  - -- based on the -- element
    - | {{HTMLElement("table")}} rows, columns, column groups, and row groups
      - TODO: the row(s) or column(s) are hidden and the space they would have occupied is removed (as if `{{Cssxref("display")}}: none` were applied to the column/row of the table). However, the size of other rows and columns is still calculated as though the cells in the collapsed row(s) or column(s) are present. This value allows for the fast removal of a row or column from a table without forcing the recalculation of widths and heights for the entire table.
    - Collapsed flex items and ruby annotations are hidden, and the space they would have occupied is removed.
    - For other elements, `collapse` is treated the same as `hidden`.

## Accessibility concerns

Using a `visibility` value of `hidden` on an element will remove it from the [accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). This will cause the element and all its descendant elements to no longer be announced by screen reading technology.

## Interpolation

When animated, visibility values are interpolated between _visible_ and _not-visible_. One of the start or ending values must therefore be `visible` or no {{Glossary("interpolation")}} can happen. The value is interpolated as a discrete step, where values of the easing function between `0` and `1` map to `visible` and other values of the easing function (which occur only at the start/end of the transition or as a result of `cubic-bezier()` functions with y values outside of \[0, 1]) map to the closer endpoint.

## Notes

- Support for `visibility: collapse` is missing or partially incorrect in some modern browsers. 
  - It may not be correctly treated like `visibility: hidden` on elements other than table rows and columns.
- `visibility: collapse` may change the layout of a table if the table has nested tables within the cells that are collapsed, unless `visibility: visible` is specified explicitly on nested tables.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic example

#### HTML

```html
<p class="visible">The first paragraph is visible.</p>
<p class="not-visible">The second paragraph is NOT visible.</p>
<p class="visible">
  The third paragraph is visible. Notice the second paragraph is still occupying
  space.
</p>
```

#### CSS

```css
.visible {
  visibility: visible;
}

.not-visible {
  visibility: hidden;
}
```

{{EmbedLiveSample('Basic_example')}}

### Table example

#### HTML

```html
<table>
  <tr>
    <td>1.1</td>
    <td class="collapse">1.2</td>
    <td>1.3</td>
  </tr>
  <tr class="collapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tr>
</table>
```

#### CSS

```css
.collapse {
  visibility: collapse;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid gray;
}
```

{{EmbedLiveSample('Table_example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("display")}}
