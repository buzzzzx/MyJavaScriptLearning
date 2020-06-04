function createUserObj(name, age) {
  const user = Object.create(userFunctionStore);
  user.name = name;
  user.age = age;
  return user;
}

const userFunctionStore = {
  printHello:  function() {
    console.log(`Halo, I'm ${this.name}`);
  },
  tellAge: function() {
    console.log(`I'm ${this.name} years old`);
  },
  growthAge: function() {
    console.log(`Nown I am ${++this.age} years ago`)
  }
};

const user1 = createUserObj("Remie", 12);
const user2 = createUserObj("Rowan", 13);
user1.printHello();
user2.growthAge();
user2.age;

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction();
console.log(Object.getPrototypeOf(me) == person);
