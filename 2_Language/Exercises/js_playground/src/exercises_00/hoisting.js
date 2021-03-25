// ------------------------------------------------------------
// ------------------------------------------------------------
// Apartado A
// ¿Cual crees que será el resultado de la consola y porqué?
// TIP: escribe el código equivalente.
// ------------------------------------------------------------

function f() {
  console.log(a);
  console.log(g());

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a);
}

// Código equivalente

/*
function f() {
  var a;
  function g() {
    return a;
  }

  console.log(a);
  console.log(g());

  a = "good job!";

  console.log(a);
}
*/

// Resultado: No hay resultado, no se ejecuta la función f()
// Resultado si se ejecutara:
// -> undefined
// -> undefined
// -> "good job!"



// ------------------------------------------------------------
// Apartado B
// ¿Y ahora?
// ------------------------------------------------------------


var a = 1;

(function() {
  console.log(a);
  var a = 2;
  b = 4;
  var c = 3;
})();

console.log(a);
console.log(b);
console.log(c);

// Código equivalente

/*
var a;
var b;

function f() {
  var a;
  var c;

  console.log(a);

  a = 2;
  b = 4;
  c = 3;
}

a = 1;

f();

console.log(a);
console.log(b);
console.log(c);
*/

// Resultado:
// -> undefined
// -> 1
// -> 4
// -> error


// ------------------------------------------------------------
// Apartado C
// ¿Y con esta ligera variación?
// ------------------------------------------------------------

f();
var a = 1;

function f() {
  console.log(a);
  b = 4;
  var c = 3;
}

console.log(a);
console.log(b);
console.log(c);

// Código equivalente

/*
var a;
var b;

function f() {
  var c;

  console.log(a);
  b = 4;
  c = 3;
}

f();
a = 1;

console.log(a);
console.log(b);
console.log(c);
*/

// Resultado:
// -> undefined
// -> 1
// -> 4
// -> error
