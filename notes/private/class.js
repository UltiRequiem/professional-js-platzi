class makeCounter {
  #count

  constructor(n) {
    this.#count = n
  }

  get count() {
    return this.#count
    // console.log("I can't tell you that!");
  }

  increase() {
    this.#count += 1
  }

  decrease() {
    this.#count -= 1
  }
}

const myCounter = new makeCounter(7)

console.log(`The Count is: ${myCounter.count}.`)
myCounter.increase()
console.log(`The Count is: ${myCounter.count}.`)
myCounter.decrease()
myCounter.decrease()
console.log(`The Count is: ${myCounter.count}.`)
