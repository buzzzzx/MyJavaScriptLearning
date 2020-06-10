function Just(val) {
  return {map, chain, ap};
  
  function map(fn) {
    return Just(fn(val)); // return a Monad
  }
  
  function chain(fn) {
    return fn(val);
    // fn often return a Monad
  }
  
  function ap(anotherMonad) {
    return anotherMonad.map(val); // which means val is function
  }
}

const user1 = Just("Remie");
const user2 = Just("Rowan");
// const tuple = curry(2, function tuple(x, y) {
//   return [x, y];
// });
const tuple = x => y => [x, y];

const users = user1.map(tuple).ap(user2);

const identity = v => v;

users.chain(identity);
// [ 'Remie', 'Rowan' ]
