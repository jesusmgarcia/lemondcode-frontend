// We assume nested objects, not arrays

// Apartado A

const myObjectDeepGet = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};

// Using recursion (also, we can use a loop instead recursion)
const deepGet1 = (object, ...props) => {

  // return (A or B)
  // A: 'undefined' in the 1st iteration if the argument 'object' is undefined (or null, etc)
  // B: the value of the last prop in the object

  if (typeof object === 'undefined' || !props.length)
    return object;

  let lvlProp = props[0];

  props.shift();

  // call recursively with the possible nested object
  return deepGet1(object[lvlProp], ...props);

}

// Using reduce
const deepGet2 = (object, ...props) => {
  return props.reduce((acc, value) => (acc != undefined) ? acc[value] : undefined, object);
}


console.group("deepGet1");
console.log(deepGet1(myObjectDeepGet, "x")); // undefined
console.log(deepGet1(myObjectDeepGet, "a")); // 1
console.log(deepGet1(myObjectDeepGet, "b")); // { c: null, d: {....}}
console.log(deepGet1(myObjectDeepGet, "b", "c")); // null
console.log(deepGet1(myObjectDeepGet, "b", "d", "f", "g")); // bingo
console.log(deepGet1(myObjectDeepGet));  // {a: 1, b: {...}}
console.log(deepGet1(myObjectDeepGet, "b", "x")); // undefined
console.groupEnd();

console.group("deepGet2");
console.log(deepGet2(myObjectDeepGet, "x")); // undefined
console.log(deepGet2(myObjectDeepGet, "a")); // 1
console.log(deepGet2(myObjectDeepGet, "b")); // { c: null, d: {....}}
console.log(deepGet2(myObjectDeepGet, "b", "c")); // null
console.log(deepGet2(myObjectDeepGet, "b", "d", "f", "g")); // bingo
console.log(deepGet2(myObjectDeepGet));  // {a: 1, b: {...}}
console.log(deepGet2(myObjectDeepGet, "b", "x")); // undefined
console.groupEnd();



// Apartado B

// Using recursion (also, we can use a loop instead recursion)
const deepSet1 = (setValue, object, ...props) => {

  if (typeof object === 'undefined' || !props.length) {
    return;
  }

  let lvlProp = props[0];

  props.shift();

  if(!props.length) {
    // it's the last element of props, we set the value
    object[lvlProp] = setValue;
    return;
  }

  // if the object doesn't exist, we create it
  if (!(lvlProp in object)) object[lvlProp] = {};

  // and call recursively with the new nested object
  deepSet1(setValue, object[lvlProp], ...props);

}

// Using reduce
const deepSet2 = (setValue, object, ...props) => {

  if (typeof object === 'undefined') {
    return;
  }

  props.reduce((acc, value, index, arr) => {

    // if the object doesn't exist, we create it
    if(!(value in acc))
      acc[value] = {};

    // if it's the last element of props, we set the value
    if(index == (arr.length - 1))
      acc[value] = setValue;

    return acc[value];
  }, object);
}


console.group("deepSet1");

let myObjectDeepSet = {};

deepSet1(1, myObjectDeepSet, "a", "b");
console.log(JSON.stringify(myObjectDeepSet));  // {a: { b: 1}}
deepSet1(2, myObjectDeepSet, "a", "c");
console.log(JSON.stringify(myObjectDeepSet));  // {a: { b: 1, c: 2}}
deepSet1(3, myObjectDeepSet, "a");
console.log(JSON.stringify(myObjectDeepSet));  // {a: 3}
deepSet1(4, myObjectDeepSet);
console.log(JSON.stringify(myObjectDeepSet));  // Do nothing // {a: 3}
console.groupEnd();


console.group("deepSet2");

myObjectDeepSet = {};

deepSet2(1, myObjectDeepSet, "a", "b");
console.log(JSON.stringify(myObjectDeepSet));  // {a: { b: 1}}
deepSet2(2, myObjectDeepSet, "a", "c");
console.log(JSON.stringify(myObjectDeepSet));  // {a: { b: 1, c: 2}}
deepSet2(3, myObjectDeepSet, "a");
console.log(JSON.stringify(myObjectDeepSet));  // {a: 3}
deepSet2(4, myObjectDeepSet);
console.log(JSON.stringify(myObjectDeepSet));  // Do nothing // {a: 3}
console.groupEnd();
