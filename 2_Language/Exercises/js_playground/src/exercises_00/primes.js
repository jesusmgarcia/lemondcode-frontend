// Número primo = número natural (1,2 ... k-1, k) divisible por 1 y por si mismo
// Las funciones isPrime asumen un número natural

function isPrime(num) {

  for (let divNum = 2; divNum < num; divNum++) {
    if (num % divNum === 0) {
      return false;
    }
  }

  return num !== 1;
}


function showPrimes(from, to) {
  for(let count = from; count <= to; count++) {
    console.log(count + (isPrime(count) ? " is PRIME!": " is not a prime"));
  }
}

showPrimes(1, 10);
showPrimes(1, 100);

// Challenge:
//
// Se puede mejorar mucho el rendimiento del ejercicio anterior.
// Al buscar si un numero es primo, podemos dejar de comprobar
// si es divisible por cada entero mayor que 1 una vez alcancemos
// la raiz cuadrada de dicho número.

function isPrime2(num) {

  for (let divNum = 2; divNum < Math.floor(Math.sqrt(num)); divNum++) {
    if (num % divNum === 0) {
      return false;
    }
  }

  return num !== 1;
}



function showPrimes2(from, to) {
  for(let count = from; count <= to; count++) {
    console.log(count + (isPrime(count) ? " is PRIME!": " is not a prime"));
  }
}

showPrimes2(1, 10);
showPrimes2(1, 100);
