const express = require("express");
const router = express.Router();
const fabric = require("../fabric/fabricService");

router.post("/message", async (req, res) => {
  try {
    const { message } = req.body;

    const result = await fabric.submitTransaction(
      "SetMessage",
      message
    );

    res.json({
      status: result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/message", async (req, res) => {
  try {
    const message = await fabric.evaluateTransaction(
      "GetMessage"
    );

    res.json({
      message,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
