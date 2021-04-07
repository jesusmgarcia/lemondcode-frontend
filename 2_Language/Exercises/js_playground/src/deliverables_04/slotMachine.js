let randomBool = () => Math.random() >= 0.5;

class SlothMachine {

  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;

    if( randomBool() && randomBool() && randomBool()) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}


const machine1 = new SlothMachine();
const machine2 = new SlothMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
//---
machine2.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();
