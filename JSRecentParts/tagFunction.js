function tagFunc(strArr, ...expr) {
  console.log(strArr);
  console.log(expr);
}
const name = "Remie";
const age = 17;
let str = tagFunc`Hello I am ${name}, my age is ${age}`;