// Exemplo de operadores lógicos em JavaScript

let a = true;
let b = false;

// Operador AND (&&)
console.log(a && b); // false

// Operador OR (||)
console.log(a || b); // true

// Operador NOT (!)
console.log(!a); // false
console.log(!b); // true

// Combinação de operadores lógicos
let c = a && !b; // true
console.log(c); // true

let d = (a || b) && !b; // true
console.log(d); // true