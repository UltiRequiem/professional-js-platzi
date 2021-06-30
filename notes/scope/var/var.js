// Scope Global
let message = '¡Hello, Platzi!';

console.log(message);

{
  console.log(message);
}

{
  message = 'Re assign var';
  console.log(message);
}

// Oops..
console.log(message);
