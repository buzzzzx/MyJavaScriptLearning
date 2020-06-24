function foo() {
  console.log("foo last");
}

function display(value) {
  generatorObj.next(value);
}

function fakeFetch() {
  return new Promise((resolve, reject) => {
    console.log("me first");
    for (let i = 0; i < 1000; i += 1) {}
    console.log("me second");
    setTimeout(foo, 1000);
    resolve("hi");
    console.log("me third")
  })
}

function *createFlow() {
  const data = yield fakeFetch();
  console.log(data);
}

const generatorObj = createFlow();
const futureData = generatorObj.next();
// futureData // { value: Promise { 'hi' }, done: false }
futureData.value.then(display);

console.log("me fourth");

// console.log order
// 'me second'
// 'me third'
// 'me fourth'
// 'hi'
// 'foo last'

