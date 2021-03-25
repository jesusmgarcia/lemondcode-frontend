function subsets(word) {

  let subsetArray = [];

  for(let count = 1; count < word.length; count++) {
    subsetArray.push(word.slice(count));
  }

  return subsetArray;

}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

// Challenge:
//
// Repite el ejercicio anterior sin utilizar arrays auxiliares
// ni bucles for/do/while.
//
// TIP: Una forma válida de "iterar" es utilizando algún método
// de los Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

function subsets2(word) {
  return Object.keys(new String(word)).slice(1).map( element => word.slice(element));
}

// Ejemplo
console.log(subsets2("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
