const sell = (product) => (currency, price, stock) =>
  console.log(
    `${product} for sell at ${currency}${price}, currently ${stock} in stock.`
  );

const sellAvocado = sell('Avocado');
sellAvocado('$', 1, 100);
// -> avocado for sell at $1, currently 100 in stock.

const sellTomatoes = sell('Tomatoes');
sellTomatoes('£', 1, 1000);
// -> Tomatoes for sell at £1, currently 1000 in stock.
