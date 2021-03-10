var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

function clone(source) {
  return {...source};
}

function merge(source, target) {
  return {...clone(target), ...clone(source)};
}

// El resultado de mezclar a sobre b sería:
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}