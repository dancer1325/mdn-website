// Get a reference to the element you want to animate
const element = document.querySelector('.animated-element');
console.log("element " + element);    // HTMLDivElement    -- another interface --
console.log("element.__proto__ " + element.__proto__);    // HTMLDivElement    -- another interface --

// Define the keyframes
// 1. via JS
// 2. with an array of objects
// 3. without specifying the offsets
const keyframes = [
  {
    // from     -- Since it's not specified, it's assumed to be 'from' since it's the first one --
    opacity: 0,
    color: "#fff",
  },
  {
    // Without being specified -> evenly spaced between adjacent key frames === at 50% in this case
    opacity: 0.1,
    easing: "ease-in",
    color: '#f09'
  },
  {
    // to       -- Since it's not specified, it's assumed to be 'to' since it's the last one --
    opacity: 1,
    color: "#000",
  },
];

// Create an animation using element.animate()
const animation = element.animate(keyframes, {
  duration: 2000, // Animation duration (2 seconds)
  fill: 'forwards', // Keeps the final state of the animation
});
