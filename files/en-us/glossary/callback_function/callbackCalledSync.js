// Callback function
function myCallback() {
  console.log("Callback executed!");
}

// 1. callback  / called synchronously
// Outer function / takes -- as argument, a -- callback
function outerFunctionInvokingCallbackSync(callback) {
  console.log("Starting outer function");
  // callback is invoked | outer function   ==  outer function's execution
  callback();
  console.log("Ending outer function");
}

// invoke the outer function
outerFunctionInvokingCallbackSync(myCallback);
