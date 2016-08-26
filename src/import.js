// @flow
import type { UserType } from './export.js';
import { helloWorld } from './export.js';

const composition = u => {
  const val = helloWorld(u);
  return val + '123';
}

const user = {
  age: 11,
  firstName: 'first',
  lastName: 'last',
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  sayHello(str) {
    console.log(str + ' ' + this.fullName());
    // return str
  }
}

composition(user);

const anotherUser = {
  age: 11,
  name: 'hello'
}
