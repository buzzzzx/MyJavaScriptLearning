class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  bar = 1;  // property, assign to every instance
  
  // property, assign to every instance
  speak = () => {
    console.log(this.name, this.age);
    console.log(this);
  }
  
  // method, only defined once, instead of once per instance
  foo() {
    console.log(this);
  }
}

let a = new A("haha", 22);
let b = new A("rowan", 23);
a.name = "remie";
a.speak();
a.foo();
console.log(a.bar);
console.log(a);
console.log(b);
a.foo === b.foo;  // true
a.speak === b.speak; // false