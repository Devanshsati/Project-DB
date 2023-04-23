const express = require("express");
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
  res.json({ message: "Hello from server! nice to see yoi" });
});

router.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

module.exports = router;