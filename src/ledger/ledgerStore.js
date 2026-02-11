
const ledger = {};

function putState(key, value) {
  ledger[key] = value;
}

function getState(key) {
  return ledger[key];
}

module.exports = {
  putState,
  getState,
};


// The blockchain world state database.

// In real Fabric:

//This would be LevelDB or CouchDB

//Stored by peers

//Backed by blockchain blocks