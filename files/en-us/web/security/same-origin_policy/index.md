---
title: Same-origin policy
slug: Web/Security/Same-origin_policy
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

* **[same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)**
  * == critical security mechanism /
    * 💡restricts how a document OR script loaded | one {{Glossary("origin")}} -- can interact with a -- resource | ANOTHER origin 💡
  * 's goal
    * isolate potentially malicious documents
    * reduce possible attack vectors
  * _Examples:_ prevents a malicious website runs JS | browser -- to read data from --
    * a third-party webmail service (signed into by the user)
    * a company intranet & relaying that data | attacker

## Definition of an origin

* "scheme/host/port tuple" OR "tuple"
  * ANOTHER origin's reference name
* URL 1's origin == URL 2's origin, requires 
  * SAME {{Glossary("protocol")}},
  * SAME {{Glossary("port")}}
  * (if it's specified), SAME {{Glossary("host")}}  

* _Examples:_ URL 1 `http://store.company.com/dir/page.html`

| URL 2                                             | Outcome     | Reason                                           |
|---------------------------------------------------| ----------- |--------------------------------------------------|
| `http://store.company.com/dir2/other.html`        | Same origin | ONLY, path differs                               |
| `http://store.company.com/dir/inner/another.html` | Same origin | ONLY, the path differs                           |
| `https://store.company.com/page.html`             | Failure     | DIFFERENT protocol                               |
| `http://store.company.com:81/dir/page.html`       | Failure     | DIFFERENT port (`http://` is port 80 by default) |
| `http://news.company.com/dir/page.html`           | Failure     | DIFFERENT host                                   |

### Inherited origins

* Scripts / executed | pages / has `about:blank` or `javascript:` URL
  * 👀's origin -- is inherited from -- document / contains that URL 👀
    * Reason: 🧠these types of URLs -- do NOT contain -- information about an origin server 🧠
    * _Example:_ `about:blank` -- is often used as a -- URL of new, empty popup windows | parent script -- writes (_Example:_ via {{domxref("Window.open()")}}) -- content
      * if popup ALSO contains JavaScript -> that script's origin -- is inherited from -- script / created it
  * `data:`
    * == URLs -- get a -- security context new, empty 

### File origins

* Modern browsers's files / loaded -- via -- `file:///`, 's origin == opaque origins
  * == if a file includes OTHER folder's files -> NOT assumed to come -- from the -- SAME origin -> may trigger {{Glossary("CORS")}} errors == [security implications](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730)
* 💡implementation-dependent 💡
  * Reason: 🧠due to [URL specification](https://url.spec.whatwg.org/#origin) 🧠

## Changing origin

* -- via -- {{domxref("document.domain")}} setter
  * ⚠️ deprecated ⚠️
    * Reason: 🧠
    * undermines the security protections / -- provided by the -- SAME origin policy
    * complicates the origin model in browsers 🧠
  * ALLOWED values
    * its current domain or
    * its current domain's superdomain   
      * -> shorter superdomain -- is used for -- same-origin checks
  * _Example:_ script | `http://store.company.com/dir/other.html`, executes
    ```js
    document.domain = "company.com";
    ```
    * -> page can pass the same-origin check -- via -- `http://company.com/dir/page.html` 
    * if `http://company.com/dir/page.html` sets its `document.domain=company.com` -> wishes to allow that
    * `company.com` could NOT set `document.domain=othercompany.com`
      * Reason: 🧠NOT superdomain of `company.com` 🧠
* TODO:
The port number is checked separately by the browser. 
Any call to `document.domain`, including `document.domain = document.domain`, causes the port number to be overwritten with `null`. 
Therefore, one **cannot** make `company.com:8080` talk to `company.com` by only setting `document.domain = "company.com"` in the first. 
It has to be set in both so their port numbers are both `null`.

The mechanism has some limitations. For example, it will throw a "`SecurityError`" [`DOMException`](/en-US/docs/Web/API/DOMException) if the [`document-domain`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy) is enabled or the document is in a sandboxed [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), and changing the origin in this way does not affect the origin checks used by many Web APIs (e.g. [`localStorage`](/en-US/docs/Web/API/Window/localStorage), [`indexedDB`](/en-US/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/en-US/docs/Web/API/BroadcastChannel), [`SharedWorker`](/en-US/docs/Web/API/SharedWorker)). 
A more exhaustive list of failure cases can be found in [Document.domain > Failures](/en-US/docs/Web/API/Document/domain#failures).

> **Note:** When using `document.domain` to allow a subdomain to access its parent, you need to set `document.domain` to the _same value_ in both the parent domain and the subdomain. This is necessary even if doing so is setting the parent domain back to its original value. Failure to do this may result in permission errors.

## Cross-origin network access

The same-origin policy controls interactions between two different origins, such as when you use {{domxref("fetch()")}} or an {{htmlelement("img")}} element. These interactions are typically placed into three categories:

- Cross-origin _writes_ are typically allowed. Examples are links, redirects, and form submissions. Some HTTP requests require [preflight](/en-US/docs/Web/HTTP/CORS#preflighted_requests).
- Cross-origin _embedding_ is typically allowed. (Examples are listed below.)
- Cross-origin _reads_ are typically disallowed, but read access is often leaked by embedding. For example, you can read the dimensions of an embedded image, the actions of an embedded script, or the [availability of an embedded resource](https://bugzil.la/629094).

Here are some examples of resources which may be embedded cross-origin:

- JavaScript with `<script src="…"></script>`. Error details for syntax errors are only available for same-origin scripts.
- CSS applied with `<link rel="stylesheet" href="…">`. Due to the relaxed syntax rules of CSS, cross-origin CSS requires a correct `Content-Type` header. Browsers block stylesheet loads if it is a cross-origin load where the MIME type is incorrect and the resource does not start with a valid CSS construct.
- Images displayed by {{htmlelement("img")}}.
- Media played by {{htmlelement("video")}} and {{htmlelement("audio")}}.
- External resources embedded with {{htmlelement("object")}} and {{htmlelement("embed")}}.
- Fonts applied with {{cssxref("@font-face")}}. Some browsers allow cross-origin fonts, others require same-origin.
- Anything embedded by {{htmlelement("iframe")}}. Sites can use the {{HTTPHeader("X-Frame-Options")}} header to prevent cross-origin framing.

### How to allow cross-origin access?

* use [CORS](/en-US/docs/Web/HTTP/CORS) 
  * CORS
    * 👀== part of {{Glossary("HTTP")}} 👀
    * enable servers -- specify -- ANY OTHER hosts / browser -- should permit -- loading of content

### How to block cross-origin access?

* if you want to prevent cross-origin writes -> check the request's unguessable token 
  * see [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf) token
  * prevent cross-origin reads of pages / require this token
* if you want to prevent cross-origin reads of a resource -> ensure that it is NOT embeddable
  * Reason: 🧠embedding a resource -> ALWAYS leaks some information about it 🧠
* if you want to prevent cross-origin embeds -> ensure that your resource -- can NOT be interpreted as -- one of the embeddable formats 
  * Browsers -- may NOT respect the -- `Content-Type` header
    * _Example:_ if you point a `<script>` tag | HTML document -> the browser -- will try to parse -- the HTML as JavaScript
  * if your resource != entry point | your site & you want to prevent embedding -> use a CSRF token 

## Cross-origin script API access

* TODO:
JavaScript APIs like {{domxref("HTMLIFrameElement.contentWindow", "iframe.contentWindow")}}, {{domxref("window.parent")}}, {{domxref("window.open")}}, and {{domxref("window.opener")}} allow documents to directly reference each other. When two documents do not have the same origin, these references provide very limited access to {{domxref("Window")}} and {{domxref("Location")}} objects, as described in the next two sections.

To communicate between documents from different origins, use {{domxref("window.postMessage")}}.

Specification: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

The following cross-origin access to these `Window` properties is allowed:

| Methods                           |
| --------------------------------- |
| {{domxref("window.blur")}}        |
| {{domxref("window.close")}}       |
| {{domxref("window.focus")}}       |
| {{domxref("window.postMessage")}} |

| Attributes                     |             |
| ------------------------------ | ----------- |
| {{domxref("window.closed")}}   | Read only.  |
| {{domxref("window.frames")}}   | Read only.  |
| {{domxref("window.length")}}   | Read only.  |
| {{domxref("window.location")}} | Read/Write. |
| {{domxref("window.opener")}}   | Read only.  |
| {{domxref("window.parent")}}   | Read only.  |
| {{domxref("window.self")}}     | Read only.  |
| {{domxref("window.top")}}      | Read only.  |
| {{domxref("window.window")}}   | Read only.  |

Some browsers allow access to more properties than the above.

### Location

The following cross-origin access to `Location` properties is allowed:

| Methods                         |
| ------------------------------- |
| {{domxref("location.replace")}} |

| Attributes                   |             |
| ---------------------------- | ----------- |
| {{domxref("location.href")}} | Write-only. |

Some browsers allow access to more properties than the above.

## Cross-origin data storage access

Access to data stored in the browser such as [Web Storage](/en-US/docs/Web/API/Web_Storage_API) and [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) are separated by origin. Each origin gets its own separate storage, and JavaScript in one origin cannot read from or write to the storage belonging to another origin.

{{glossary("Cookie", "Cookies")}} use a separate definition of origins. A page can set a cookie for its own domain or any parent domain, as long as the parent domain is not a public suffix. Firefox and Chrome use the [Public Suffix List](https://publicsuffix.org/) to determine if a domain is a public suffix. When you set a cookie, you can limit its availability using the `Domain`, `Path`, `Secure`, and `HttpOnly` flags. When you read a cookie, you cannot see from where it was set. Even if you use only secure https connections, any cookie you see may have been set using an insecure connection.

## See also

- [Same Origin Policy at W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy at web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
