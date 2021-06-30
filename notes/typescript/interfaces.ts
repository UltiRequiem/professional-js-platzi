interface Rectangulo{
  ancho: number
  alto: number
}

const rect: Rectangulo = {
  ancho: 4,
  alto: 6
}

function area(r: Rectangulo) {
  return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)
