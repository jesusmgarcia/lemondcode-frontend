const a = [1, 2, 3, 4, 5];
const b = ["string1", "string2", "string3"];
const c = [100, "string4", 102, "string 5", null, undefined, 0];
const d = [null, undefined, 0];
const e = [{name: "Pedro"}, {name: "Julia"}];

const concat = (a, b) => [...a, ...b];
const concat2 = (...args) => {
  let result = [];

  args.forEach( element => result = [...result, ...element]);

  return result;

  // with Array.prototype.concat
  //return [].concat(...args)
}

console.log(concat(a, b));
console.log(concat2(a, b, c, d, e));