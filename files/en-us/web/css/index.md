---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
page-type: landing-page
---

{{CSSRef}}

* **Cascading Style Sheets** (**CSS**)
  * := [stylesheet](/en-US/docs/Web/API/StyleSheet) language 
    * allows
      * describing the document's presentation
        * == HOW elements are rendered |
          * screen
          * paper
          * speech
          * OTHER media
    * uses
      * | documents / written in 
        * [HTML](/en-US/docs/Web/HTML) or 
        * [XML](/en-US/docs/Web/XML/XML_introduction)
        * XML dialects -- _Example:_ [SVG](/en-US/docs/Web/SVG), [MathML](/en-US/docs/Web/MathML) or {{Glossary("XHTML")}}
  * standardized -- , via [W3C specifications](https://www.w3.org/Style/CSS/#specs), by -- Web browsers
  * versioning
    * | BEFORE,
      * versioning (CSS1, CSS2.1, or even CSS3)
        * Reason: 🧠development synchronously🧠
    * | NOWADAYS,
      * 💡ONLY CSS 💡
        * == ❌NO version number❌ 
        * steps
          * [develop & release recommendations / module](https://www.w3.org/Style/CSS/current-work)
          * W3C periodically -- takes a -- snapshot of
            * [CSS specification's latest stable state](https://www.w3.org/TR/css/) &
            * individual modules progress 
        * Reason: 🧠| CSS 2.1+,
          * specification's scope increased significantly
          * DIFFERENT CSS modules' progress -- started to -- differ so MUCH 🧠  
        * == ⚠️CSS modules⚠️ /
          * have levels
            * _Example:_ [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/)

## Key resources

- [CSS basics](/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [CSS learning area](/en-US/docs/Learn/CSS)
- [CSS reference](/en-US/docs/Web/CSS/Reference)
  - exhaustive

## Tutorials

* TODO:
Our [CSS Learning Area](/en-US/docs/Learn/CSS) features multiple modules that teach CSS from the ground up — no previous knowledge required.

- [CSS first steps](/en-US/docs/Learn/CSS/First_steps)
  - : CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. 
  - This module provides a gentle beginning to your path towards CSS mastery with the basics of how it works, what the syntax looks like, and how you can start using it to add styling to HTML.
- [CSS building blocks](/en-US/docs/Learn/CSS/Building_blocks)

  - : This module carries on where [CSS first steps](/en-US/docs/Learn/CSS/First_steps) left off — now you've gained familiarity with the language and its syntax, and got some basic experience with using it, it's time to dive a bit deeper. 
    - This module looks at the cascade and inheritance, all the selector types we have available, units, sizing, styling backgrounds and borders, debugging, and lots more.
    - The aim here is to provide you with a toolkit for writing competent CSS and help you understand all the essential theory, before moving on to more specific disciplines like [text styling](/en-US/docs/Learn/CSS/Styling_text) and [CSS layout](/en-US/docs/Learn/CSS/CSS_layout).

- [CSS styling text](/en-US/docs/Learn/CSS/Styling_text)
  - : With the basics of the CSS language covered, the next CSS topic for you to concentrate on is styling text — one of the most common things you'll do with CSS. Here we look at text styling fundamentals, including setting font, boldness, italics, line and letter spacing, drop shadows, and other text features. We round off the module by looking at applying custom fonts to your page, and styling lists and links.
- [CSS layout](/en-US/docs/Learn/CSS/CSS_layout)
  - : At this point we've already looked at CSS fundamentals, how to style text, and how to style and manipulate the boxes that your content sits inside. Now it's time to look at how to place your boxes in the right place in relation to the viewport, and to each other. We have covered the necessary prerequisites so we can now dive deep into CSS layout, looking at different display settings, modern layout tools like flexbox, CSS grid, and positioning, and some of the legacy techniques you might still want to know about.
- [Use CSS to solve common problems](/en-US/docs/Learn/CSS/Howto)
  - : This module provides links to sections of content explaining how to use CSS to solve common problems when creating a web page.

## Reference

- [CSS reference](/en-US/docs/Web/CSS/Reference): This exhaustive reference for seasoned Web developers describes every property and concept of CSS.
- CSS key concepts:

  - The [syntax and forms of the language](/en-US/docs/Web/CSS/Syntax)
  - [Specificity](/en-US/docs/Web/CSS/Specificity), [inheritance](/en-US/docs/Web/CSS/Inheritance), and [the Cascade](/en-US/docs/Web/CSS/Cascade)
  - [CSS units and values](/en-US/docs/Web/CSS/CSS_Values_and_Units) and [functional notations](/en-US/docs/Web/CSS/CSS_Functions)
  - [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) and [margin collapse](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - The [containing block](/en-US/docs/Web/CSS/Containing_block)
  - [Stacking](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) and [block-formatting](/en-US/docs/Web/Guide/CSS/Block_formatting_context) contexts
  - [Initial](/en-US/docs/Web/CSS/initial_value), [computed](/en-US/docs/Web/CSS/computed_value), [used](/en-US/docs/Web/CSS/used_value), and [actual](/en-US/docs/Web/CSS/actual_value) values
  - [CSS shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [CSS Flexible Box Layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout)
  - [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout)
  - [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors)
  - [Media queries](/en-US/docs/Web/CSS/CSS_media_queries)
  - [Animation](/en-US/docs/Web/CSS/animation)

## Cookbook

The [CSS layout cookbook](/en-US/docs/Web/CSS/Layout_cookbook) aims to bring together recipes for common layout patterns, things you might need to implement in your sites.
In addition to providing code you can use as a starting point in your projects, these recipes highlight the different ways layout specifications can be used and the choices you can make as a developer.

## Tools for CSS development

- You can use the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to check if your CSS is valid. This is an invaluable debugging tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) lets you view and edit a page's live CSS via the [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) and [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) tools.
- The [Web Developer extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) for Firefox lets you track and edit live CSS on watched sites.

## Meta bugs

- Firefox: [Firefox bug 1323667](https://bugzil.la/1323667)

## See also

- [CSS demos](/en-US/docs/Web/Demos#css): Get a creative boost by exploring examples of the latest CSS technologies in action.
- Web languages to which CSS is often applied: [HTML](/en-US/docs/Web/HTML), [SVG](/en-US/docs/Web/SVG), [MathML](/en-US/docs/Web/MathML), {{Glossary("XHTML")}}, and [XML](/en-US/docs/Web/XML/XML_introduction).
