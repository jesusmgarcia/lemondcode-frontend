let numberArray = [1, 2, 3, 4, 5]

// ORIGINAL
console.log("ORIGINAL: " + numberArray);

// HEAD
const head = ([head]) => head;
console.log("HEAD: " + head(numberArray));

// TAIL
const tail = ([first, ...rest]) => rest;
console.log("TAIL: " + tail(numberArray));

// INIT
const init = (array) => array.slice(0, array.length - 1);
console.log("INIT: " + init(numberArray));

// LAST
const last = (array) => array.slice(-1);
console.log("LAST: " + last(numberArray));

// ORIGINAL
console.log("ORIGINAL: " + numberArray);