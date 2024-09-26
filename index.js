const index = require("./admin");

// Callback functie om het resultaat te printen err is als er een fout is zoo niet log't die result.
function printResult(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
}

index.login("kleintjes.karel", "test", printResult);
// resultaat: fout bij het aanmelden

index.login("kleintjes.karel", "karel", printResult);
// resultaat: kleintjes.karel: lezen - schrijven;

index.login("dotjes.els", "els", printResult);
// resultaat: dotjes.els: lezen;

index.login("jan.deman", "deman", printResult);

index.login("jan.deman", "jan", printResult);
