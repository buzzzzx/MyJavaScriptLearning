// use Rambda library
// use our own map and filter function
const _map = mappingFn => transformerFn => (acc, curr) => transformerFn(acc, mappingFn(curr));

const _filter = predicate => transformerFn => (acc, curr) => predicate(curr) ? transformerFn(acc, curr) : acc;

const transducer = R.compose(
  _filter(x => /r/i.test(x)),
  _map(R.toUpper),
  _map(R.reverse)
);

let autobots = ['Optimus Prime','Bumblebee','Ironhide','Sunstreaker','Ratchet'];

// use reduce
R.reduce(transducer(R.flip(R.append)), [], autobots);
// ["EMIRP SUMITPO", "EDIHNORI", "REKAERTSNUS", "TEHCTAR"]

// use transduce
R.transduce(transducer, R.flip(R.append), [], autobots);
// ["EMIRP SUMITPO", "EDIHNORI", "REKAERTSNUS", "TEHCTAR"]