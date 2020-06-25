function fakeFetch() {
  return new Promise((resolve, reject) => {
    console.log("2");
    resolve("4");
  });
}

async function foo() {
  console.log("1");
  const data = await fakeFetch();
  console.log(data);
}

foo();
console.log("3");