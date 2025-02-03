// Callback function
function myCallback() {
  console.log("Callback executed!");
}

// 2. callback  / called asynchronously
function asyncFunction(callback) {
  console.log("Starting");                 // 1st: Runs first
  setTimeout(() => {
    callback();                          // 3rd: Runs after 1000ms
  }, 1000);
  console.log("Ending");                  // 2nd: Runs immediately after "Starting"
}

asyncFunction(myCallback);
