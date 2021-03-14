const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

// Check other ranges
const class1 = {
  David: 0,
  Maria: 3.25,
};

const class2 = {
  David: 4.5,
  Maria: 4.3,
};

const class3 = {
  David: 5.2,
  Maria: 5.7,
};

const class4 = {
  David: 6.1,
  Maria: 6.7,
};

const class5 = {
  David: 9,
  Maria: 9.8,
};

const class6 = {
  David: 10,
  Maria: 10,
};

// Check negative values
const class7 = {
  David: -5.6,
  Maria: -1000,
};

// Function constructor
function Calification(min, max, text) {
  this.min = min;
  this.max = max;
  this.text = text;
}

// Build our calification table
function buildCalificationTable() {
  let array = [];

  array.push(new Calification(10, Infinity, "Matrícula de Honor"));
  array.push(new Calification(9, 10,  "Sobresaliente"));
  array.push(new Calification(7, 9,   "Notable"));
  array.push(new Calification(6, 7,   "Bien"));
  array.push(new Calification(5, 6,   "Suficiente"));
  array.push(new Calification(4, 5,   "Insuficiente"));
  array.push(new Calification(0, 4,   "Muy Deficiente"));

  return array;
}

// Get the average of our class
function objectAverage(classResults) {
  return Object.values(classResults).reduce( (acc, value) => (value > 0) ? acc + value : acc, 0)
          / Object.keys(classResults).length;
}

// Check if "num" is in the range of [start, end]
function inRange(num, start, end) {
  if(end < start)
    [start, end] = [end, start];

	return (start <= num) && (num < end);
};


function printAverage(classResults) {

  // Build the calification table we'll compare the average with
  const resultTable = buildCalificationTable();

  // Get the calification average of our class
  let average = objectAverage(classResults);

  //console.log("Media: " + average);

  averageFloor = Math.floor(average);

  // Get the calification object of our class
  let finalText = resultTable.filter(calification => {
    return inRange(averageFloor, calification.min, calification.max);
  });

  return finalText[0].text;
}

// Result
console.group("Result");
console.log("Media de clase: " + printAverage(eso2o));
console.groupEnd();


console.group("Tests");
// Check other ranges
console.log("Media de clase: " + printAverage(class1));
console.log("Media de clase: " + printAverage(class2));
console.log("Media de clase: " + printAverage(class3));
console.log("Media de clase: " + printAverage(class4));
console.log("Media de clase: " + printAverage(class5));
console.log("Media de clase: " + printAverage(class6));

// Check negative values
console.log("Media de clase: " + printAverage(class7));

console.groupEnd();