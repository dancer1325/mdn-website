// Get a reference to the element you want to animate
const element = document.querySelector('.animated-element');
console.log("element " + element);    // HTMLDivElement    -- another interface --
console.log("element.__proto__ " + element.__proto__);    // HTMLDivElement    -- another interface --

// Define the keyframes
// 1. via JS
// 2. with an array of objects
// 3. without specifying the offsets
// 4. specifying just 1! -> end is inferred by the browser
const keyframes = [
  {
    // from     -- Since it's not specified, it's assumed to be 'from' since it's the only one --
    transform: "rotate(360deg)"
  }
];

// Create an animation using element.animate()
const animation = element.animate(keyframes, {
  duration: 2000, // Animation duration (2 seconds)
  iterations: Infinity
});
