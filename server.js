const express = require("express");
const app = express();

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
