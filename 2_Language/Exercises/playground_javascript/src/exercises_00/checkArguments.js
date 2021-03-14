/*
function f(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}*/


function f(input) {

  // input is 0 when is null, undefined or ""

  return input || (input === undefined
                    ? "Unknown"
                    : (input === null
                        ? ""
                        : input)); // <-- return the empty string
}

console.log(f(undefined));
console.log(f(null));
console.log(f(""));
console.log(f("Cadena"));

// nullish coalescing operator
function f_nco(input) {
  return input ?? (input === undefined ? "Unknown" : "");
}

console.log(f_nco(undefined));
console.log(f_nco(null));
console.log(f_nco(""));
console.log(f_nco("Cadena"));