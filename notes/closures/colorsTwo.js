// Return a function
const makeColorPrinter = (color) => () => console.log(`The color is ${color}.`);

// Create Functions
const greenColorPrinter = makeColorPrinter("green");
const yellowColorPrinter = makeColorPrinter("yellow");
const blueColorPrinter = makeColorPrinter("blue");

greenColorPrinter();
yellowColorPrinter();
blueColorPrinter();
