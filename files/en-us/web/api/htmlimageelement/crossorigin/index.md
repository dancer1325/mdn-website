---
title: "HTMLImageElement: crossOrigin property"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.crossOrigin
---

{{APIRef("HTML DOM")}}

* {{domxref("HTMLImageElement")}} interface's **`crossOrigin`**
  * == attribute /
    * string
    * | retrieving the image,
      * 👀== Cross-Origin Resource Sharing ({{Glossary("CORS")}}) setting 👀
    * if it's NOT specified -> image is fetched WITHOUT CORS (== fetch `no-cors` mode)

## Value

* ALLOWED values
  * `anonymous`
    * == requests by the {{HTMLElement("img")}} element have
      * their {{domxref("Request.mode", "mode")}} == `cors`
      * their {{domxref("Request.credentials", "credentials")}} == `same-origin`
    * ==
      * CORS is enabled
      * if the origin | fetches the image == origin from which the document was loaded -> credentials are sent 
  * `use-credentials`
    * == requests by the {{domxref("HTMLImageElement")}} will use the 
      * their {{domxref("Request.mode", "mode")}} == `cors`
        * 👀ALL images / regardless of domain | image was fetch 👀
      * their {{domxref("Request.credentials", "credentials")}} == `include`

* if `crossOrigin=""` -> `anonymous` mode

## Examples

* [index.html](index.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
