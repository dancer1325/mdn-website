// Steps to make an HTTP request
// 1. Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();

// 2. Configure it: specify the type of request and the URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

// 3. Attach event handlers to get the result
// 3.1 if the request has been successfully completed
xhr.onload = function () {
  console.log('Request onload event.');
};
// 3.2 if the request has failed == not completed successfully
xhr.onerror = function () {
  console.error('Request onerror event.');
};

// Send the request
xhr.send();


// Using XHR API via events on HTML events
const xhrButton = document.querySelector(".xhr");
const log = document.querySelector(".event-log");
const url =
  "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json";

function handleEvent(e) {
  log.textContent = `${log.textContent}${e.type}: ${e.loaded} bytes transferred\n`;
}

// Adding listeners to XMLHttpRequest object, instead of 'onEvent'
function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

xhrButton.addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  addListeners(xhr);
  xhr.send();
});
