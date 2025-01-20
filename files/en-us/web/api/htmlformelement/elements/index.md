---
title: "HTMLFormElement: elements property"
short-title: elements
slug: Web/API/HTMLFormElement/elements
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.elements
---

{{APIRef("HTML DOM")}}

* {{domxref("HTMLFormElement")}}'s **`elements`**
  * == property / 
    * returns an
      * | HTML v5-,
        * {{domxref("HTMLCollection")}}
      * | HTML v5+,
        * {{domxref("HTMLFormControlsCollection")}} == 💡ALL the {{HTMLElement("form")}} element's  form controls 💡 
          * -- following the -- tree order
          * 👀if you want to access a CONCRETE form control -> ways 👀
            * `elements[concreteIndex]`
            * `elements[concreteElementName]`
            * `elements[concreteElementId]`

* {{domxref("HTMLFormElement.length", "length")}}
  * == property /
    * return the number of form controls

* {{domxref("Document.forms", "forms")}}
  * == property /
    * 💡return ALL document's forms 💡

## Value

* 💡ALLOWED returned form controls 💡
  * {{HTMLElement("button")}}
  * {{HTMLElement("fieldset")}}
  * {{HTMLElement("input")}}
    * if [`type="image"`](/en-US/docs/Web/HTML/Element/input#type) -> omitted
  * {{HTMLElement("object")}}
  * {{HTMLElement("output")}}
  * {{HTMLElement("select")}}
  * {{HTMLElement("textarea")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
