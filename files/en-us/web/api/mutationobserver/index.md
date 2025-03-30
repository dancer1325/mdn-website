---
title: MutationObserver
slug: Web/API/MutationObserver
page-type: web-api-interface
browser-compat: api.MutationObserver
---

{{APIRef("DOM WHATWG")}}

* {{domxref("MutationObserver")}} interface
  * 👀enable to watch changes | [DOM](/en-US/docs/Web/API/Document_Object_Model) tree 👀
  * 's design
    * -- replacement for the -- older [Mutation Events](/en-US/docs/Web/API/MutationEvent) feature

## Constructor

* {{domxref("MutationObserver.MutationObserver", "MutationObserver()")}}
  * creates & returns a NEW `MutationObserver` /
    * if DOM changes -> -- will invoke a -- specified callback function  

## Instance methods

* {{domxref("MutationObserver.disconnect()", "disconnect()")}}
  * `MutationObserver` instance -- stops receiving -- further notifications until and unless {{domxref("MutationObserver.observe", "observe()")}} is called again.
* {{domxref("MutationObserver.observe()", "observe()")}}
  * `MutationObserver` can begin receive notifications -- through its -- callback function 
* {{domxref("MutationObserver.takeRecords()", "takeRecords()")}}
  * ALL pending notifications | `MutationObserver`'s notification queue
    * are removed
    * are returned | NEW {{jsxref("Array")}} of {{domxref("MutationRecord")}} objects

## Example

* [index.html](index.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
- [A brief overview](https://developer.chrome.com/blog/detect-dom-changes-with-mutation-observers/)
- [A more in-depth discussion](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](https://www.youtube.com/watch?v=eRZ4pO0gVWw)
