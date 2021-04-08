
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

// Force execution in order
const run1 = triggers => {

  Promise
    .resolve()
    .then(triggers[0])
    .then(triggers[1])
    .then(async () => await showMessage([100, "first"]));

};

// Using Generators
const run2 = triggers => {

  async function* callTasks(promises) {
    for (const promise of promises) {
      yield await promise();
    }
    console.log("first");
  };

  const generator = callTasks(triggers);

  generator.next();
  generator.next();
  generator.next();


};

// Using Array.prototype.reduce
// IMPORTANT: not exactly what the problem asks for, because
// we modify the "triggers" array
const run3 = triggers => {

  let firstFunc = async () => await showMessage([100, "first"])

  triggers.push(firstFunc);

  triggers.reduce((prev, task) => {
    return prev
      .then(task)
      .catch(err => {
        console.warn('err', err.message);
      });
  }, Promise.resolve());

}

// 3 ways of synchronize promises, decomment 1 by 1
run1(triggers);
//run2(triggers);
//run3(triggers);
