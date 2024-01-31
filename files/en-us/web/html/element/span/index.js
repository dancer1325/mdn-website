var span = document.getElementById("spanId");
isHTMLSpanInstance(span);
function isHTMLSpanInstance(instance) {
  if (instance instanceof HTMLSpanElement) {
    console.log(instance.nodeName," is instance of HTMLSpanElement: true ");
    return;
  }
  console.log(instance," is instance of HTMLSpanElement: false ");
}

