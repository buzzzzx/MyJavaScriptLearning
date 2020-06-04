// destructure array
var arr = [1, 2, 3, 4, 5];
var obj = {};
var tmp;

tmp = [
  obj.f,
  obj.s,
  ...obj.res
] = arr;

// equal way
// tmp = [
//   obj.f,
//   obj.s,
//   ...obj.res
// ] = tmp = arr;

obj; // { f: 1, s: 2, res: [ 3, 4, 5 ] }

// tmp is the whole thing
tmp; // [ 1, 2, 3, 4, 5 ]

var [
  first, // 1
  ,
  third, // 3
  ...rest  // [4, 5]
] = arr;

// swap items
var a = 1, b = 2;
[a, b] = [b, a];
a // 2
b // 1