# CSS declaration
* ``CSSSelector {
    CSSProperty: PropertyValue;
    OtherDeclarations
    }``
  * Syntax
  * `CSSProperty`
    * case-insensitive
    * if you declare a NON existing one -> user agent’s CSS engine processes it as invalid
      * Check in the browser's devtools how it appears as invalid
  * `PropertyValue`
    * case-insensitive
    * if you declare a NON existing one -> user agent’s CSS engine processes it as invalid
      * Check in the browser's devtools how it appears as invalid
    * available types
      * keywords
      * numeric values
      * functions

# CSS Selector lists
* ``CSSSelector1, 
  CSSSelector2,
  ... {
  CSSProperty: PropertyValue;
  OtherDeclarations
  }``
  * 1! CSS ruleset applied to multiple CSSSelectors

# CSSSelector types
* Element / Tag / Type selector
* ID selector
* Class selector
* Attribute selector
* Pseudo-class selector
  * Based on the state
* Combinators
  * Descendant combinator selector
    * Unnecessary to be direct descendants
  * Direct descendants `>` 
  * Adjacent sibling combinator `+`
    * applied just to the second element of the filter
    * independently if some of them have got children
* Pseudo-element selector
## Different `CSSSelector` types can be combined!!!
* CSSSelector must be read from right -> left

# Styles
* `<link href="style.css" rel="stylesheet" />`
  * can be added to be applied in different parts
    * `<head>`
    * `<body>`
    * `<footer>`

# How to run locally?
* Open 'index.html' in your browser 
