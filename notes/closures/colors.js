const color = 'blue';
console.log(color);

(() => {
  const color = 'green';

  function printColor() {
    console.log(color);
  }

  printColor();
})();
