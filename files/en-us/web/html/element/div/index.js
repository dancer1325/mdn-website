// If you pass directly & it's passed as head of the HTML -> it fails

// Attempt1
/*var button = document.getElementById("button");
button.addEventListener("click", () => {
  console.log('Button clicked');
})*/

// Attempt2
/*document.addEventListener('DOMContentLoaded', function() {
  // Wait for the DOM to be fully loaded before accessing elements

  // Find the button by its ID
  var myButton = document.getElementById('myButton');

  // Add a click event listener to the button
  myButton.addEventListener('click', function() {
    alert('Button clicked!');
  });
});*/

const button = document.getElementById("button");
button.addEventListener("click", () => {
  alert('Button clicked');
})
