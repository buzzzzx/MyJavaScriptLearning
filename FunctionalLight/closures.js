// lazy
function repeaterLazy(count) {
  return function allA() {
    return "".padStart(count, "A");
  };
}

// eager
function repeaterEager(count) {
  var str = "".padStart(count, "A");
  return function allA() {
    return str;
  };
}

// memoization
// not obivious pure, str get reassigned.
function repeaterMemoization(count) {
  var str;
  return function allA() {
    if (str === undefined) {
      str = "".padStart(count, "A");
    }
    return str;
  };
}

// memoization
// pure
function repeaterPure(count) {
  return memoize(function allA() {
    return "".padStart(count, "A")
  });
}

function myMemoize(fn) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    fn.cache = fn.cache || {};
    return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this, args)); 
  }
}
const A = repeaterMemoization(10);
A();
A();