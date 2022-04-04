// eslint-disable-next-line no-shadow
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color: Color;
}

const rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Verde,
};

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

// eslint-disable-next-line func-names
rect.toString = function () {
  return `Un rectangulo de color ${this.color}.`;
};

console.log(rect.toString());
