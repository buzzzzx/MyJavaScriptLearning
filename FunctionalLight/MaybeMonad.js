const someObj = {something: {else: {entirely: 42}}};
// someObj.something.else.entirely; // 42
// if property something or else missing, that will throw an exception.
// use Maybe monad to do it in a safe way.

function Just(val) {
  return {map, chain, ap};
  
  function map(fn) {
    return Just(fn(val));
  }
  
  function chain(fn) {
    return fn(val);
  }
  
  function ap(anotherMonad) {
    return anotherMonad.map(val);
  }
}

function Nothing() {
  return {map: Nothing, chain: Nothing, ap: Nothing};
} 

const Maybe = {Just, Nothing, of: Just};

function fromNullable(val) {
  if (val == null) {
    return Maybe.Nothing();
  } else {
    return Maybe.of(val);
  }
}

const prop = prop => obj => fromNullable(obj[prop]);

const identity = v => v;

Maybe.of(someObj)
.chain(prop("something")) // return Just({else: {entirely: 42}}) monad
.chain(prop("else")) // return Just({entirely: 42}) monad
.chain(prop("entirely")) // return Just(42) monad
.chain(identity); // return 42;

// test missing property
Maybe.of(someObj)
.chain(prop("something")) // return Just({else: {entirely: 42}}) monad
.chain(prop("missing")) // return Nothing monad
.chain(prop("entirely")) // return Nothing monad
.chain(identity); // return Nothing monad