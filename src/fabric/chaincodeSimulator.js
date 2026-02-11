const ledger = require("../ledger/ledgerStore");

function SetMessage(message) {
  ledger.putState("message", message);
  return "Message stored on ledger";
}

function GetMessage() {
  return ledger.getState("message") || "No message found";
}

module.exports = {
  SetMessage,
  GetMessage,
};


// Defines how ledger state changes.

// In real Fabric:

// This runs on peers

// Is deployed as chaincode

// Enforces business rules immutably