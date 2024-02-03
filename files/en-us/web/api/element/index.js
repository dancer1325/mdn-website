// Extends from Node
// 1. Via `instanceOf`
const elementIsInstanceOfNode = Element.prototype instanceof Node;
console.log("Element is instance of Node ", elementIsInstanceOfNode);
// 2. Via `isPrototypeOf`
const nodeIsPrototypeOfElement = Node.prototype.isPrototypeOf(Element.prototype);
console.log("Node is prototype of Element ", nodeIsPrototypeOfElement);

// Extends from EventTarget
// 1. Via `instanceOf`
const elementIsInstanceOfEventTarget = Element.prototype instanceof EventTarget;
console.log("Element is instance of EventTarget ", elementIsInstanceOfEventTarget);
// 2. Via `isPrototypeOf`
const eventTargetIsPrototypeOfElement = EventTarget.prototype.isPrototypeOf(Element.prototype);
console.log("EventTarget is prototype of Element ", eventTargetIsPrototypeOfElement);
