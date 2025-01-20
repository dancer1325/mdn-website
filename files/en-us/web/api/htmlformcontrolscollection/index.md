---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
page-type: web-api-interface
browser-compat: api.HTMLFormControlsCollection
---

{{APIRef("HTML DOM")}}

* **`HTMLFormControlsCollection`**
  * == interface / 👀-- represents a -- _collection_ of HTML _form control elements_ 👀
  * uses
    * -- returned by the -- {{domxref("HTMLFormElement")}} interface's {{domxref("HTMLFormElement.elements", "elements")}} property
    * replaces one {{domxref("HTMLCollection")}}'s method
  * child of {{domxref("HTMLCollection")}}

* TODO: Where to find it?
{{InheritanceDiagram}}

## Instance properties

* == {{domxref("HTMLCollection")}}'s properties 

## Instance methods

* == {{domxref("HTMLCollection")}}'s methods
* {{domxref("HTMLFormControlsCollection.namedItem()")}}
  * TODO:
    - : Returns the {{domxref("RadioNodeList")}} or the {{domxref("Element")}} in the collection whose `name` or `id` matches the specified name, or `null` if no nodes match.
        - Note that this version of `namedItem()` hides the one inherited from {{domxref("HTMLCollection")}}.
        - Like that method, using the JavaScript array bracket syntax with a {{jsxref("String")}}, as in `collection["value"]`, is equivalent to `collection.namedItem("value")`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCollection")}}, {{domxref("RadioNodeList")}}, {{domxref("HTMLOptionsCollection")}}
