var arr = [1, 2, 3, 4, 5];

var itr1 = arr[Symbol.iterator]();
itr1.next();
itr1.next();
itr1.next();
itr1.next();
itr1.next();
itr1.next();

var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: function() {
    console.log(this.a);
  }
}

// obj is not iterable, but we can make it.

var iterableObj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function() {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () => 
        (index < keys.length) ?
        {done: false, value: this[keys[index++]]} :
        {done: true, value: undefined}
    };
  }
};

[...iterableObj];  // [1, 2 ,3]

