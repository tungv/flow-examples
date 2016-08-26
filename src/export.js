// @flow
export type UserType = {
  age: number,
  firstName: string,
  lastName: string,
  fullName(): string,
  sayHello(salute: string): void;
}

export const helloWorld = (user: UserType): string => {
  user.sayHello('xin chào');
  return user.fullName();
}
