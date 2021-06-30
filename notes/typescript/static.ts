class Circle {
  static pi = 3.14;

  pi = 3;
}

console.log(Circle.pi); // returns 3.14

const circleObj = new Circle();
console.log(circleObj.pi); // returns 3
