// TODO:

// 4. Scope and the function stack
// TODO:

// 4.2 Nested functions & closures
// 4.2.1 nested functions
function addSquares(a, b) {
  let c = 2;
  function square(x) {
    let innerVariable = 4;
    console.log("inner function - uses outer function's variables " + c);
    console.log("inner function - uses outer function's arguments " + a);
    return x * x;
  }
  // outer functions can NOT use inner function's variables & arguments
  /*console.log("outer function - uses inner function's variables " + innerVariable);
  console.log("outer function - uses inner function's arguments " + x);*/
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41

// inner function is private | containing outer function    == can NOT be accessed outside outer function
// square(3);


// 4.2.2 closure
function makeAdder(x) {        // Outer function
  // 'x'   ==    free variable -- for the -- inner function
  return function(y) {       // closure
    return x + y;         // 'x' == free variable | inside inner function or closure
  };
}
const add5 = makeAdder(5);
console.log(add5(3));

// outer function == environment / contains x
function outside(x) {
  // closure  binds   x    &    y
  function inside(y) {
    return x + y;
  }
  return inside;    //  == the closure    == function
}
const fnInside = outside(3);
console.log(fnInside(5));
console.log("final output " + outside(3)(5));



// 4.2.3  Preservation of variables
