// @flow

class Animal {
  name: string;
}

class Cat extends Animal {
  color: 'red' | 'blue';
}

class Dog extends Animal {
  tailColor: 'green' | 'yellow';
}

class Person {
  age: number;
}









const myAnimals: Animal[] = [];











myAnimals.push(new Cat());
myAnimals.push(new Dog());









// myAnimals.push(new Person());
