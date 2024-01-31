// Pass the XML document via string
const xmlString = '<?xml version="1.0" encoding="UTF-8"?><data><person><name>John Doe</name><age>30</age></person></data>';
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
isDocumentInstance(xmlDoc);
isNodeInstance(xmlDoc);
isEventTargetInstance(xmlDoc);

function isDocumentInstance(instance) {
  if (instance instanceof Document) {
    console.log(instance.nodeName," is instance of Document: true ");
    return;
  }
  console.log(instance.nodeName," is instance of Document: false ");
}

function isNodeInstance(instance) {
  if (instance instanceof Node) {
    console.log(instance.nodeName," is instance of Node: true ");
    return;
  }
  console.log(instance.nodeName," is instance of Node: false ");
}

function isEventTargetInstance(instance) {
  if (instance instanceof EventTarget) {
    console.log(instance.nodeName," is instance of EventTarget: true ");
    return;
  }
  console.log(instance.nodeName," is instance of EventTarget: false ");
}
