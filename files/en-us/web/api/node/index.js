// Abstract class
// -> There is NO constructor for it -> Throws an error
// Comment it to continue script execution
// const node = new Node();



// Many other DOM's objects extend from it
const h1Element = document.getElementById("h1Element");
const documentFragment = document.createDocumentFragment();

// 1. Via `instanceOf`
function isInstanceOfNode(instance) {
  if (instance instanceof Node) {
    console.log(instance, " is instance of Node: true");
  } else {
    console.log(instance, " is instance of Node: false");
  }
}
isInstanceOfNode(document);
isInstanceOfNode(h1Element);
isInstanceOfNode(documentFragment);

// 2. Via `isPrototypeOf`
function isPrototypeOf(instance) {
  if (Node.prototype.isPrototypeOf(instance)) {
    console.log("Node is prototype of ", instance, " true");
  } else {
    console.log("Node is prototype of ", instance, " false");
  }
}
isPrototypeOf(document);
isPrototypeOf(h1Element);
isPrototypeOf(documentFragment);



// Extends from EventTarget
// 1. Via `instanceOf`
const nodeIsInstanceOfEventTarget = Node.prototype instanceof EventTarget;
console.log("Node is instance of EventTarget ", nodeIsInstanceOfEventTarget);
// 2. Via `isPrototypeOf`
const eventTargetIsPrototypeOfNode = EventTarget.prototype.isPrototypeOf(Node.prototype);
console.log("EventTarget is prototype of Node ", eventTargetIsPrototypeOfNode);

