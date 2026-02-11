const express = require("express");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
app.use(express.json());

app.use("/api", messageRoutes);

app.listen(3000, () => {
  console.log("🚀 Hello Ledger API running on port 3000");
});
