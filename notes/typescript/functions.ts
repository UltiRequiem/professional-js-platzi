function add(a: number,b: number): number {
  return a+b;
}

function createAdder(a: number = 5) {
  return function (b: number = 4) {
    return b + a
  }
}

const sum: number = add(23, 34)
const sum7 = createAdder(4)

function fullName(firstName: string, lastName?: string): string{
  return `${firstName} ${lastName}`
}

const ELIAZ = fullName('Eliaz')
