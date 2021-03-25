
// Apartado A

var userA = { name: "María", age: 30 };
var clonedUserA = { name: "María", age: 30 };

console.log(userA === clonedUserA); // false

function isEqual(a, b) {

  return Object.keys(a).every(prop => {
    return b.hasOwnProperty(prop) ? a[prop] === b[prop] : false;
  });

}

console.log(isEqual(userA, clonedUserA)); // true


// Apartado B

var userB = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUserB = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {

  return Object.keys(a).every(prop => {
    return b.hasOwnProperty(prop)
      ? typeof a[prop] === 'object' && b[prop] === 'object'
        ? isDeepEqual(a[prop], b[prop])
        : a[prop] === b[prop]
      : false;
  });
}

console.log(isDeepEqual(userB, clonedUserB)); // true