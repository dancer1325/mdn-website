---
title: var()
slug: Web/CSS/var
page-type: css-function
browser-compat: css.properties.custom-property.var
---

{{CSSRef}}

* **`var()`** [CSS](/en-US/docs/Web/CSS)
  * == [function](/en-US/docs/Web/CSS/CSS_Functions) /
    * insert the [custom property](/en-US/docs/Web/CSS/--*)'s value
  * uses
    * ALLOWED |
      * property values
    * ❌NOT ALLOWED | 
      * property names,
      * selectors ❌

## Syntax

```css
/* 1. Simple usage */
var(--custom-prop);
/* --custom-prop                
    ==   name of the custom property / it's going to be substituted   
    ONLY MANDATORY argument*/

/* 2. With fallback */
var(--custom-prop,);  /* empty value as fallback */
var(--custom-prop, initial); /* initial value of the property as fallback */
/* if   --custom-prop   is invalid  -> fallback value is used  */
var(--custom-prop, #FF0000);

/* ALL arguments / AFTER FIRST `,`    ==.   fallback values */
var(--custom-prop, #FF0000, #FF0001, #FF0003);   /*  ==    #FF0000, #FF0001, #FF0003   are fallback values       */
var(--custom-prop, var(--default-value));
var(--custom-prop, var(--default-value, red));
```

### Values

* `<custom-property-name>`
  * == identifier / starts with `##`
* `<declaration-value>`
  * == custom property's fallback value /
    * uses
      * | used context, custom property is invalid  
  * accepts 
    * ANY character
      * ⚠️EXCEPT SOME characters / SPECIAL meaning (newlines, unmatched closing brackets, i.e. `)`, `]`, or `}`, top-level semicolons, or exclamation marks) ⚠️
    * custom property -- via -- `var()`

### Formal syntax

{{CSSSyntax}}

## Examples

* {{EmbedInteractiveExample("pages/css/var.html")}}
* [index.html](index.html)
* [anotherIndex.html](anotherIndex.html)
* [indexThree.html](indexThree.html)
* [indexFour.html](indexFour.html)
* [indexFive.html](indexFive.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("env","env(…)")}} – read‑only environment variables controlled by the user‑agent.
- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- {{cssxref("@property")}} at-rule
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module
