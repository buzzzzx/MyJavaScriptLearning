function add1(x) {
  return x + 1;
}

function mult2(x) {
  return x * 2;
}

function div3(x) {
  return x / 3;
}

function composition(...fns) {
  return function composed(v) {
    return fns.reduceRight(function f(v, fn) {
      return fn(v);
    }, v);
  };
}

const f = composition(div3, mult2, add1);
f(8);

// arr.reduce(reducer)
// reducer(acc, curr)
