---
title: fill
slug: Web/SVG/Attribute/fill
page-type: svg-attribute
browser-compat: svg.attributes.presentation.fill
---

{{SVGRef}}

* **`fill`** attribute
  * | shapes and text,
    * == color (_or any SVG paint servers like gradients or patterns_) -- used to paint the -- element
  * | animation,
    * == final state of the animation
  * VALID | the SVG elements
    * {{SVGElement('circle')}}
    * {{SVGElement('ellipse')}}
    * {{SVGElement('path')}}
    * {{SVGElement('polygon')}}
    * {{SVGElement('polyline')}}
    * {{SVGElement('rect')}}
    * {{SVGElement('text')}}
    * {{SVGElement('textPath')}}
    * {{SVGElement('tref')}}
    * {{SVGElement('tspan')}}

## animate

* | {{SVGElement('animate')}},
  * `fill` == final state of the animation

* TODO:
<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## animateMotion

For {{SVGElement('animateMotion')}}, `fill` defines the final state of the animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## animateTransform

For {{SVGElement('animateTransform')}}, `fill` defines the final state of the animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## circle

For {{SVGElement('circle')}}, `fill` is a presentation attribute that defines the color of the circle.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## ellipse

For {{SVGElement('ellipse')}}, `fill` is a presentation attribute that defines the color of the ellipse.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## path

For {{SVGElement('path')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_Interior is define by the {{SVGAttr('fill-rule')}} attribute_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## polygon

For {{SVGElement('polygon')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_Interior is define by the {{SVGAttr('fill-rule')}} attribute_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## polyline

For {{SVGElement('polyline')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_Interior is define by the {{SVGAttr('fill-rule')}} attribute_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## rect

For {{SVGElement('rect')}}, `fill` is a presentation attribute that defines the color of the rectangle.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## set

For {{SVGElement('set')}}, `fill` defines the final state of the animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## text

For {{SVGElement('text')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## textPath

For {{SVGElement('textPath')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## tref

> **Warning:** As of SVG2 {{SVGElement('tref')}} is deprecated and shouldn't be used.

For {{SVGElement('tref')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## tspan

For {{SVGElement('tspan')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
