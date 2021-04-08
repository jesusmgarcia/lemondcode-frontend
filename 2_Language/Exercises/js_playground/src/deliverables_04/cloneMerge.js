// We assume objects without functions, undefined props, etc.
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

function clone(source) {
  return { ...source };
}

function deepClone(source) {
  return JSON.parse(JSON.stringify(source));
}

function merge(source, target) {
  return { ...clone(target), ...clone(source) };
}

function deepMerge(source, target) {
  return { ...deepClone(target), ...deepClone(source) };
}

// El resultado de mezclar a sobre b sería:
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log(deepMerge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

// a and b are not modified
console.log(a);
console.log(b);

// NOTE: this methods won't work for objects with functions, undefined, etc

var c = {
  name: "hola",
  f: () => console.log("a"),
  cc: undefined,
  obj: {
    a: 1,
    b: "string"
  }
};

console.log(c);
console.log(deepClone(c));

var shallowCopiedA = a;
var clonedA = clone(a);
var deepClonedA = deepClone(a);

console.log(a === shallowCopiedA);
console.log(a === clonedA);
console.log(a === deepClonedA);
