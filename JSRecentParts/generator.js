function *main() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

var it = main();

it.next();
it.next();
it.next();
it.next();
it.next();

[...main()];

var obj = {
  a: 1,
  b: 2, 
  c: 3,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  }
};

[...obj];
Object.entries(obj);
Object.values(obj);

// test
var name = "haha";
var obj1 = {
  a: 1,
  b: 2,
  [name]: 10,
  [Symbol.d]: 20,
}

obj1.haha;  // 10
obj1.undefined; // 20