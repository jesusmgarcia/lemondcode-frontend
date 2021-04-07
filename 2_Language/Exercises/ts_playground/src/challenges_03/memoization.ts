//
// Apartado A: Memoization
// Apartado B: Memoization in 1 line
//
{
console.group("First memoized (A and B)");

let count = 0; // Comprobacion de nº de ejecuciones

const expensiveFunction = (): number => {
  console.log(expensiveFunction.prototype.constructor.name + " called!");
  count++;
  return 3.1415;
}


const memoize1 = (func) => {

  let cache = {};


  return function() {

    let key = "flag";

    if (key in cache) {
      return cache[key];
    } else {
      return cache[key] = func.apply(null, arguments);
    }
  }

};

const memoize2 = (func) => { let cache = {}; return () => ("flag" in cache) ? cache["flag"] : cache["flag"] = func.apply(null, null); }


const memoized = memoize1(expensiveFunction);

console.log(memoized());// Una única llamada
console.log(memoized());// 3.1415
console.log(memoized());// 3.1415
console.log(memoized());// 3.1415

console.log(`Function called ${count} times`);// 2


const memoized2 = memoize2(expensiveFunction);
count = 0;

console.log(memoized2());// Una única llamada
console.log(memoized2());// 3.1415
console.log(memoized2());// 3.1415
console.log(memoized2());// 3.1415

console.log(`Function called ${count} times`);// 2

console.groupEnd();
}
//
// Apartado C: Memoize with arguments and typed(TS)
//

console.group("Second memoized (C)");

let count2: number = 0; // Comprobacion de nº de ejecuciones

const repeatText = (repetitions: number, text: string): string => {
  console.log(repeatText.prototype.constructor.name + " called!");
  count2++;
  return `${text}`.repeat(repetitions).trim();
}


// Generic constraint
const memoize3 = <F, T extends (...args: any[]) => F>(func: T): T => {

  let cache: Map<string, F> = new Map();

  const innerFunc = (...args: any[]): any => {

    let key: string = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let value: F = func.apply(null, args);
      cache.set(key, value);

      return value;
    }
  }

  return innerFunc as T;

};

const memoizedGreet = memoize3(repeatText);

console.log("Result: " + memoizedGreet(1,"pam"));  // pam
console.log("Result: " + memoizedGreet(3,"chun")); // chun chun chun

console.log("Result: " + memoizedGreet(1,"pam"));  // pam
console.log("Result: " + memoizedGreet(3,"chun")); // chun chun chun
console.log("Result: " + memoizedGreet(1,"pam"));  // pam
console.log("Result: " + memoizedGreet(3,"chun")); // chun chun chun

console.log(`Function called ${count2} times`);// 2

console.groupEnd();