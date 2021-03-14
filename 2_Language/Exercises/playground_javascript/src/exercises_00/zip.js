
function zipObject(keys, values) {
  let obj = {};

  keys.forEach(key => obj[key] = values[keys.indexOf(key)]);

  return obj;
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}


function zipObject2(keys, values) {
  let obj = {};

  keys.forEach(key => {
    if(values[keys.indexOf(key)] !== undefined)
      obj[key] = values[keys.indexOf(key)];
  });

  return obj;
}

// Ejemplo:
console.log(zipObject2(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}