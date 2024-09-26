const data = require("./data");

function login(username, wachtwoord, cb) {
  for (let i = 0; i < data.users.length; i++) {
    if (wachtwoordControle(username, wachtwoord) == true) {
      id = userIdOphalen(username);
      rightId = userRightIdOphalen(id);
      right = userRightOphalen(rightId);
      string = `resultaat: ${username}: ${right}`;
      return console.log(string);
    } else {
      return console.log(`resultaat : fout bij het aanmelden`);
    }
  }
}

function wachtwoordControle(username, wachtwoord) {
  for (let i = 0; i < data.users.length; i++) {
    if (
      data.users[i].username == username &&
      data.users[i].wachtwoord == wachtwoord
    ) {
      return true;
    }
  }
}

function userRightOphalen(rightid) {
  for (let i = 0; i < data.rights.length; i++) {
    if (data.rights[i].id == rightid) {
      return data.rights[i].omschrijving;
    }
  }
}

function userRightIdOphalen(id) {
  for (let i = 0; i < data.userRights.length; i++) {
    if (data.userRights[i].userid == id) {
      return data.userRights[i].rightid;
    }
  }
}

function userIdOphalen(username) {
  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].username == username) {
      return data.users[i].id;
    }
  }
}

module.exports = {
  login,
};
