const color = 'blue'
console.log(color)
;(() => {
  // eslint-disable-next-line no-shadow
  const color = 'green'

  function printColor() {
    console.log(color)
  }

  printColor()
})()
