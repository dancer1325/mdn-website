// Get a reference to the element you want to animate
const element = document.querySelector('.animated-element');
console.log("element " + element);    // HTMLDivElement    -- another interface --
console.log("element.__proto__ " + element.__proto__);    // HTMLDivElement    -- another interface --

// Define the keyframes
// 1. via JS
// 2. with an object of CSS Declarations
// 3. without specifying the offsets
const keyframes = {
  opacity: [0, 1], // offset: 0, 1
  // Not all CSS Properties should have the same number of property values
  color: ["red", "yellow", "green"], // offset: 0, 0.5, 1
};

// Create an animation using element.animate()
const animation = element.animate(keyframes, {
  duration: 2000, // Animation duration (2 seconds)
  fill: 'forwards', // Keeps the final state of the animation
});
