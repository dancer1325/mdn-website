---
title: Callback function
slug: Glossary/Callback_function
page-type: glossary-definition
---

{{GlossarySidebar}}

* **callback function**
  * == function / 
    * passed | ANOTHER function's argument
    * executed | outer function's execution

* outer function
  * == function / receives -- as argument, a -- function (== callback function)

* callback-based API
  * 's consumer
    * == who writes the callback function
  * 's provider or _caller_
    * == who writes the outer function 
      * -> ALSO responsible -- to pass -- callback function's parameters

* ways to call the callback
  * _synchronous_
    * | IMMEDIATELY AFTER outer function's invoke
      * they are called / NO intervening async tasks 
  * _asynchronous_ 
    * | LATER outer function's invoke & {{glossary("asynchronous")}} operation has completed 
      * they are called
    * _Example:_ callback function / passed |
      * [`setTimeout()`](/en-US/docs/Web/API/setTimeout) 
      * {{jsxref("Promise.prototype.then()")}}

## See also

* [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises#timing)
* [Callback](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>) on Wikipedia
