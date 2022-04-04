const makeCounter = (count) => ({
  increase: () => count + 1,
  decrease: () => count - 1,
  getCount: () => count,
});

// Counter
const c = makeCounter(5);

console.log(`The original count is ${c.getCount()}`);
console.log(`The decreased count is ${c.decrease()}.`);
console.log(`The increased count is ${c.increase()}.`);

// Other Counter
const oC = makeCounter(10);
console.log(`The original other count is ${oC.getCount()}`);
console.log(`The decreased other count is ${oC.decrease()}.`);
console.log(`The increased other count is ${oC.increase()}.`);
