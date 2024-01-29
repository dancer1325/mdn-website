// Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Check if xhr is an instance of XMLHttpRequest
if (xhr instanceof XMLHttpRequest) {
  console.log('xhr is an instance of XMLHttpRequest.');
} else {
  console.log('xhr is not an instance of XMLHttpRequest.');
}

// Configure it: specify the type of request and the URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

// Set up a callback function to handle the response -- AJAX request --
xhr.onreadystatechange = function () {
  // Check if the request is complete (readyState 4) and if the status is OK (status 200)
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Parse the JSON response
    var responseData = JSON.parse(xhr.responseText);

    // Log the response data
    console.log('Response:', responseData);
  }
};

// Events to react to AJAX events
xhr.onload = function () {
  // This event is triggered when the request completes successfully
  console.log('Request onload event.');
};

xhr.onerror = function () {
  // This event is triggered if an error occurs during the request
  console.error('Request onerror event.');
};

xhr.onabort = function () {
  // This event is triggered if the request is aborted
  console.warn('Request aborted!');
};

// Send the request
xhr.send();
