# Flex container
* := area of DOM laid out using flexbox
  * == `display: flex` -- '../index.html' --
    * If you do NOT specify it -> no CSS flexbox model -- 'index.html' -- !!!
  * `display: inline flex` / `display:inline-flex` -- 'flexContainerFormatting.html'
    * → flex container displayed inline
      * == If you adjust the size at width -> NO responsive the flex's items
  * `display: block flex` / `display:flex` -- 'flexContainerFormatting.html' --
    * → flex container displayed in block
      * == If you adjust the size at width -> responsive the flex's items
  

# Flex items
* := Flex container's direct children
  * If you do NOT specify flex to the flex's items -> no fill all the space
  * default behavior -- 'flexItemsDefaultBehavior.html' Block flex --
    * start from the start line of the main axis
      * Check from where flex items start 
    * on the main axis
      * NOT stretch
        * If you get wider the viewport, the items do NOT get wider
      * can shrink
        * If you get looser the viewport, the items shrink
    * on the cross axis
      * stretch to fill the size
        * Problems:
          * Problem1: It does NOT fill the size
            * Solution: TODO:
    * size
      * horizontal
        * == width of the viewport
      * vertical 
        * TODO: Check == [heigh](https://drafts.csswg.org/css2/#the-height-property)
        * if some items are taller → all items stretch along the full length
          * Problems: I do NOT see that it happens
    * no wrapping
      * Although you shrink -> flex items are laid out in 1! line

# How to run locally?
* Open 'index.html' and 'index.xml' in your browser
