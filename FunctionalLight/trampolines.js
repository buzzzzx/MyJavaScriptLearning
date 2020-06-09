function trampolines(fn) {
  return function trampolined(...args) {
    let result = fn(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }
}

const countOdd = trampolines(function countOdd(acc, nums) {
  acc += nums[0] % 2 == 1 ? 1 : 0;
  if (nums.length == 1) {
    return acc;
  }
  
  return function f() {
    return countOdd(acc, nums.slice(1));
  }
});

countOdd(0, [1, 2, 3, 4, 5, 6, 7]);

