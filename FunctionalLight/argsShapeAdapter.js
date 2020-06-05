function unary(fn) {
  return function one(arg) {
    return fn(arg);
  };
}

function binary(fn) {
  return function two(arg1, arg2) {
    return fn(arg1, arg2);
  };
}

function reverseArgs(fn) {
  return function reversed(...args) {
    return fn(...args.reverse());
  };
}

function foo(...args) {
  return args;
}

const f1 = unary(foo);
const f2 = binary(foo);

console.log(f1(1, 2, 3, 4));
console.log(f2(1, 2, 3, 4));