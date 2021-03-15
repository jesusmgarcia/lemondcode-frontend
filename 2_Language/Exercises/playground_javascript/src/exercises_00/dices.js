function crearDados(minVal, maxVal) {
  var dado1 = null;
  var dado2 = null;

  var min = Math.ceil(minVal);
  var max = Math.floor(maxVal);

  return {
    reset: function() {
      dado1 = null;
      dado2 = null;
    },
    tirar: function() {
      dado1 = Math.floor(Math.random() * (max - min + 1)) + min;
      dado2 = Math.floor(Math.random() * (max - min + 1)) + min;

      // dado1 = 6;
      // dado2 = 6;
    },
    show: function() {
      if(dado1 !== null && dado2 !== null) {

        console.log(`Resultado de la tirada: dado1=${dado1} dado2=${dado2}`);

        if(dado1 === 6 && dado2 === 6) {
          console.log("Premio! Has sacado doble 6!");
        }

      } else {
        console.log("Debes tirar primero los dados");
      }
    }
  }
}

//var Dados = crearDados(3, 10);
var Dados = crearDados(1, 6);

Dados.show();
Dados.tirar();
Dados.show();

Dados.reset();
Dados.show();