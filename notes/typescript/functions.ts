function add(a: number, b: number): number {
  return a + b;
}

function createAdder(a: number) {
  // eslint-disable-next-line func-names
  return function (b: number) {
    return b + a;
  };
}

const sum: number = add(23, 34);
const sum7 = createAdder(4)(4);

function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

const ELIAZ = fullName("Eliaz", "Bobadilla");

console.log(sum);
console.log(sum7);
console.log(ELIAZ);
