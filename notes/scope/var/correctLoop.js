function printNumbers() {
  for (let i = 0; i < 10; i++) {
    function eventuallyPrintNumbers(n) {
      setTimeout(() => {
        console.log(n);
      }, 100);
    }
    eventuallyPrintNumbers(i);
  }
}

printNumbers();
