const express = require("express");

const app = express();

app.listen(5000, () => {
    console.log("API running on port 5000");
  });

  app.get("/", (req,res) => res.json("my api"));