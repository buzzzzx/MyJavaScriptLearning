function *createFlow() {
  const num = 10;
  const newNum = yield num;
  yield newNum + 2;
  yield 6;
}

const generatorObj = createFlow();
const e1 = generatorObj.next(); // this will begin the execution context of createFlow and return obj {value: 10, done: false}, then suspend the execution context.

// continue the execution context of createFlow
const e2 = generatorObj.next(2); // 2 will be passed into execution context of createFlow and as the evaluated result of the statement: yield num, so newNum will be 2;

// continue the execution context of createFlow
const e3 = generatorObj.next();

console.log(e1.value, e2.value, e3.value);  //value property: 10 7 6