// Get a reference to the element you want to animate
const element = document.querySelector('.animated-element');
console.log("element " + element);    // HTMLDivElement    -- another interface --
console.log("element.__proto__ " + element.__proto__);    // HTMLDivElement    -- another interface --

// Define the keyframes
// 1. via JS
// 2. with an object of CSS Declarations
// 3. specifying some offsets
const keyframes = {
  opacity: [0, 0.9, 1],
  color: ["red", "yellow", "green"],
  offset: [0, 0.8], // Shorthand for [ 0, 0.8, 1 ]
  easing: ["ease-in", "ease-out"],
};

// Create an animation using element.animate()
const animation = element.animate(keyframes, {
  duration: 2000, // Animation duration (2 seconds)
  fill: 'forwards', // Keeps the final state of the animation
});
