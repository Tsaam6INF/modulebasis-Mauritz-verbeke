const index = require("./admin");

index.login("kleintjes.karel", "test");
// resultaat: fout bij het aanmelden

index.login("kleintjes.karel", "karel");
// resultaat: kleintjes.karel: lezen - schrijven;

index.login("dotjes.els", "els");
// resultaat: dotjes.els: lezen;
