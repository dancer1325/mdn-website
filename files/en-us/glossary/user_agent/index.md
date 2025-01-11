---
title: User agent
slug: Glossary/User_agent
page-type: glossary-definition
---

{{GlossarySidebar}}

* user agent
  * := computer program / -- represent a -- person
    * _Example:_ | {{Glossary("World Wide Web", "Web")}} context,
      * {{Glossary("Browser","browser")}}
      * bot scraping webpages
      * download manager
      * ANOTHER app / accesses the Web 
  * if they make a request -- to the -- server,
    * browsers
      * include a self-identifying {{HTTPHeader("User-Agent")}} {{Glossary("HTTP")}} header / 
        * named == user agent (UA) string
        * == browser + its version number + its host OS
    * Spam bots, download managers, SOME browsers
      * ⚠️OFTEN, include fake UA string ⚠️ == _user agent spoofing_
  * if you want to access -- via -- JS -> use {{domxref("Navigator/userAgent", `Navigator.userAgent`)}} property
  * _Example:_ `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`.

## See also

- [User agent](https://en.wikipedia.org/wiki/User_agent) on Wikipedia
- {{domxref("Navigator/userAgent", "NavigatorID.userAgent")}}
- [Browser detection using the user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}: The `User-Agent` header
- [Glossary:](/en-US/docs/Glossary)

  - {{Glossary("Browser")}}

- HTTP Headers

  - {{HTTPHeader("User-agent")}}
