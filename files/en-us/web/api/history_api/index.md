---
title: History API
slug: Web/API/History_API
page-type: web-api-overview
browser-compat: api.History
---

{{DefaultAPISidebar("History API")}}

* **History API** 
  * 👀-- provides access to the -- browser's session history 👀
    * != [WebExtensions history](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history) -- through the -- {{DOMxRef("Window.history","history")}} global object
    * == list of pages / visited by the user | given `window`  
  * == methods & properties /
    * let you 
      * navigate back and forth -- through the -- user's history
      * manipulate the contents of the history stack
  * AVAILABLE ONLY | MAIN thread ({{domxref("Window")}})
    * NOT be accessed | contexts
      * {{domxref("Worker")}} or
      * {{domxref("Worklet")}}

## Interfaces

* {{domxref("History")}}
  * 👀== MAIN interface | History API 👀
  * allows
    * manipulating the browser _session history_ (== pages visited | tab or frame / current page is loaded in)
  * sets of methods
    * methods / -- navigate to a -- page | session history
      * {{domxref("History.back()")}}
      * {{domxref("History.forward()")}}
      * {{domxref("History.go()")}}
    * methods / -- modify the -- session history
      * {{domxref("History.pushState()")}}
      * {{domxref("History.replaceState()")}}
  * goal
    * 👀websites (_Example:_ {{Glossary("SPA", "Single-page applications")}}) / use JavaScript APIs (_Example:_ {{domxref("fetch()")}}) -- can update, with new content, -- the page 👀
      * ⚠️update != loading a WHOLE NEW page ⚠️
* {{domxref("PopStateEvent")}}
  * == interface of the {{domxref("Window.popstate_event", "popstate")}} event
  * 👀| browser -- navigates to -- SOME history entry,
    * browser -- fires a -- {{domxref("Window.popstate_event", "popstate")}} event / contains the state object -- associated with -- that entry 👀

## Concepts and usage

### Moving forward and backward

* `history.back();`
  * move backward -- through -- history

* `history.forward();`
  * move forward -- through -- history

### Moving to a specific point in history

* 👀page's relative position 👀
  * CURRENT one == `0`

* {{DOMxRef("History.go","go()")}}
  * allows
    * load a specific page -- based on -- session history's relative position
    * refresh the current page == `history.go(0);`
  * `history.go(-1);` == `history.back();`
  * `history.go(1);` == `history.forward();`

### Number of pages | history stack

* `history.length;`

## Examples

* [index.html](index.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

* {{domxref("window.history", "history")}} global object
* {{domxref("Window/popstate_event", "popstate")}} event
