function includes(array, value) {

  for(let count = 0; count < array.length; count++) {
    if(array[count] === value)
      return true;
  }

  return false;
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false


// Challenge:
//
// El ejercicio anterior puede quedar simplificado
// si utilizas una función de los arrays que devuelve
// el índice de un elemento dado.

function includes2(array, value) {

  let retValue = false;

  if( array.indexOf(value) != -1 ) {
    retValue = true;
  }

  return retValue;
}

// Ejemplo:
console.log(includes2([1, 2, 3], 3)); // true
console.log(includes2([1, 2, 3], 0)); // false
