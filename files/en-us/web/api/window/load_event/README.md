* := event /
  * -- inherit from -- [generic event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
  * if a whole page has loaded (include ALL dependent resources -- _Example:_ stylesheets, scripts, iframes, images, ... --) -> event is fired
    * != [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) -- NOT include dependent resources --
  * characteristics
    * NOT
      * [cancelable](https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable)
      * [bubble](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles)
        * == -- NOT propagated to -- `Window`
        * -> being dispatched directly by `Window` is 1! way to see it on `Window`

## Examples
* Open in your browser 
  * 'index.html'
  * 's debugger tool
  * refresh the page
  * check how the logs appear
* TODO: Check all the characteristics about it
