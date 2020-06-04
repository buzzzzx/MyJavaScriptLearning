var obj = { a: 1, b: 2, c: 3, d: 4}

var {
  a,
  b,
  ...r
} = obj;

a;  // 1
b;  // 2
r;  // { c: 3, d: 4 } 

var f, s;


// must put parenthes around.
// to distinguish with block scope.
({
  a: f,
  b: s
} = obj);

f;
s;

var nestedObj = {
  a: 1,
  b: {
    b1: 2,
    b2: 3
  },
  c: 4
};

var {
  a,
  b,
  b: {
    b1,
    b2
  },
  c
} = nestedObj;

a; // 1
b; // { b1: 2, b2: 3 }
b1; // 2
b2; // 3
c; // 4