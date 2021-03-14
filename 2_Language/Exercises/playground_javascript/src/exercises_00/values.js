// INFO: En los siguientes ejemplos sólo se devuelven las propiedades
// enumerables de un objeto


// for...in itera en la cadena prototípica
function values1(obj) {
  let arrayValues = [];

  for (const key in obj) {
    arrayValues.push(obj[key]);
  }

  return arrayValues;
}

// Ejemplo:
console.log(values1({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

//
// Challenge: Evita añadir las propiedades heredadas en caso de ser instancia de una clase
//

function values2(obj) {
  let arrayValues = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arrayValues.push(obj[key]);
    }
  }

  return arrayValues;
}

function values3(obj) {
  return Object.values(obj); // Introducido en ES2017, mismo comportamiento que la función "values2"
}


function Person(name) {
  this.name = name;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

var john = new Person("John");

console.log(values1(john)); // Devuelve propiedades enumerables heredadas
console.log(values2(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
console.log(values3(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]