// Function are both function and object

// All functions have a default property "prototype" which defaultly to be a empty object {}

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5;
multiplyBy2(3);  // 6

multiplyBy2.stored; // 5
multiplyBy2.prototype;  // {}
multiplyBy2  // [Function: multiplyBy2] { stored: 5 }