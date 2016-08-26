// @flow

type UserType = {
  age: number,
  name: string,
};

function sayMyName(user: UserType): void {
  console.log(user.age);
}
