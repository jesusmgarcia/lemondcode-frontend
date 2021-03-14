
function biggestWord1(string) {
  let biggest = '';

  splitString = string.split(" ");

  //console.log(splitString);

  for (let i = 0; i < splitString.length; i++) {

    if (splitString[i].length > biggest.length) {
      biggest = splitString[i];
    }

  }

  return biggest;
}

function biggestWord2(string) {
  let biggest = '';

  splitString = string.split(/\s+/);

  //console.log(splitString);

  for (let i = 0; i < splitString.length; i++) {

    if (splitString[i].length > biggest.length) {
      biggest = splitString[i];
    }

  }

  return biggest;
}

// Ejemplo
console.log(biggestWord1("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord1("Esta     frase     puede    contener     muchas    palabras")); // "contener"
console.log(biggestWord1("Ejercicios básicos de JavaScript")); // "Ejercicios"

console.log(biggestWord2("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord2("Esta     frase     puede    contener     muchas    palabras")); // "contener"
console.log(biggestWord2("Ejercicios básicos de JavaScript")); // "Ejercicios"