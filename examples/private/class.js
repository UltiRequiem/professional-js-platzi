class makeCounter {
  #count;

  constructor(n) {
    this.#count = n;
  }

  get count() {
    return this.#count;
  }

  increase() {
    this.#count += 1;
  }

  decrease() {
    this.#count -= 1;
  }
}

let counter = new makeCounter(7);

console.log('The Count is:', counter.count);
counter.increase();
console.log('The Count is:', counter.count);
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log('The Count is:', counter.count);

// Error above
// counter.#count = 0;
