// asynchronous function / returns a Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulating an API call that takes time
    setTimeout(() => {
      const user = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com'
      };
      // resolve is our resolution/fulfillment handler
      resolve(user);  // Task is complete, notify the caller
    }, 2000);
  });
}

// Using the async function
console.log('Starting to fetch user...');

fetchUserData(123)
  .then(user => {                  // This is the resolution handler
    console.log('User fetched:', user);
  })
  .catch(error => {               // This handles any errors
    console.error('Error:', error);
  });

console.log('Continuing with other tasks...');

// Output order:
// 1. "Starting to fetch user..."
// 2. "Continuing with other tasks..."
// 3. After 2 seconds: "User fetched: {id: 123, name: 'John Doe', ...}"
