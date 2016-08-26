// @flow

function map<T, U>(array: T[], callback: (item: T) => U): U[] {
  const output = [];
  for (let i = 0; i < array.length; ++i) {
    output[i] = callback(array[i]);
  }
  return output;
}

const array = map([1, 2, 3], x => x * x);
const item: number = array[0];
















function isEqual<T>(a: T, b: T): boolean {
  return a === b;
}

// const a = {x: 1};
// const b = {x: 2};
// const c = {y: 'string'};
// isEqual(a, b);
// isEqual(a, '1');
