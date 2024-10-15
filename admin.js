// hier link je zogezegd je dataBank (nu en javascript met data in).
const data = require("./data");

// Dit is de functie login dat je zal zien in je index voor in te logen hier komen alle andere functies samen
function login(username, wachtwoord, cb) {
  // Hier checkt die als je de functie wachtWoordControle een true terugstuurt
  // Als dit niet gebeurt matcht het wachtwoord niet met de user.
  if (wachtWoordControle(username, wachtwoord) == true) {
    const id = userIdOphalen(username);
    const rightId = userRightIdOphalen(id);
    const right = userRightOphalen(rightId);
    const string = `resultaat: ${username}: ${right}`;
    cb(null, string);
  } else {
    cb(`resultaat: fout bij het aanmelden`);
  }
}

// In deze functie controleert als het wachtwoord klopt bij de gegeven username
function wachtWoordControle(username, wachtwoord) {
  for (let i = 0; i < data.users.length; i++) {
    if (
      data.users[i].username == username &&
      data.users[i].wachtwoord == wachtwoord
    ) {
      return true;
    }
  }
  return false;
}

// hier haalt hij het recht op van de persoon in een string
function userRightOphalen(rightid) {
  for (let i = 0; i < data.rights.length; i++) {
    if (data.rights[i].id == rightid) {
      return data.rights[i].omschrijving;
    }
  }
}

// hier haalt hij het id van het echt op van de persoon
function userRightIdOphalen(id) {
  for (let i = 0; i < data.userRights.length; i++) {
    if (data.userRights[i].userid == id) {
      return data.userRights[i].rightid;
    }
  }
}

// hier haalt hij het id op van de persoon
function userIdOphalen(username) {
  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].username == username) {
      return data.users[i].id;
    }
  }
}

// dit exporteert je modules dat je wilt dat de persoon zou zien
module.exports = {
  login,
};
