type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

const flatten = function<T>(array: T[], resultArray: T[] = []): T[] {

  const length: number = array.length;

  for (let i: number = 0; i < length; i++) {

    const value: T = array[i];

    if (Array.isArray(value)) {
      flatten(value, resultArray);
    } else {
      resultArray.push(value);
    }
  }
  return resultArray;
};

const sample: ValueOrArray<number> =[1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const sampleString: ValueOrArray<string> =["string1", ["string2", "string3"], [["string4"], ["string5", "string6", ["string7", "string8", ["string9"]]]]];
const sampleNoFlat: ValueOrArray<number> = [1, 2, 3, 4, 5];

console.log(flatten<ValueOrArray<number>>(sample));
console.log(flatten<ValueOrArray<string>>(sampleString));
console.log(flatten<ValueOrArray<number>>(sampleNoFlat));