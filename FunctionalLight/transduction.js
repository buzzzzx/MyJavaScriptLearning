// add1, isOdd, sum

function listCombination(acc, curr) {
  acc.push(curr);
  return acc;
}

const mapReducer = curry(2, function mapReducer(mappingFn, combineFn) {
  return function reducer(acc, curr) {
    return combineFn(acc, mappingFn(curr));
  };
});

const filterReducer = curry(2, function filterReducer(predicate, combineFn) {
  return function reducer(acc, curr) {
    return predicate(curr) ? combineFn(acc, curr) : acc;
  };
});

const transducer = compose(
  mapReducer(add1),
  filterReducer(isOdd)
);

const list = [1, 3, 4, 6, 9, 12, 13, 16, 21];

list
.reduce(transducer(listCombination), [])
.reduce(sum);
// 42

// or
list
.reduce(transducer(sum), 0);
// 42