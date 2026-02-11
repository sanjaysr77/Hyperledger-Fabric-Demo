const chaincode = require("./chaincodeSimulator");

async function submitTransaction(functionName, ...args) {
  console.log("Submitting transaction:", functionName);

  if (chaincode[functionName]) {
    return chaincode[functionName](...args);
  }

  throw new Error("Unknown chaincode function");
}

async function evaluateTransaction(functionName, ...args) {
  console.log("Evaluating transaction:", functionName);

  if (chaincode[functionName]) {
    return chaincode[functionName](...args);
  }

  throw new Error("Unknown chaincode function");
}

module.exports = {
  submitTransaction,
  evaluateTransaction,
};


// This is the integration boundary between the application and blockchain.

// In production:

// This would use fabric-network SDK

// Connect to peers

// Handle identity, wallet, certificates

// This layer isolates blockchain complexity from the rest of your app.