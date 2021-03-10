var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

function clone(source) {
  return {...source};
}

function deepClone(source) {
  return JSON.parse(JSON.stringify(source));
}

function merge(source, target) {
  return {...clone(target), ...clone(source)};
}

function deepMerge(source, target) {
  return {...deepClone(target), ...deepClone(source)};
}

// El resultado de mezclar a sobre b sería:
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log(deepMerge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}