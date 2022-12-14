require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.listen(process.env.PORT, () => {
  console.log("STARTED");
});

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

let arr = [
  { name: "Sokrat", age: 33 },
  { name: "Diogen", age: 43 },
  { name: "Mark Avreliy", age: 33 },
  { name: "Evklid", age: 43 },
];

app.get("/users", (req, res) => {
  res.json(arr).status(200);
});

app.post("/user", (req, res) => {
  const newUser = req.body;
  arr.push(newUser);
  res.json(arr).status(201);
});

app.delete("/user", (req, res) => {
  const userToDelete = req.body;
  arr = arr.filter((el) => el.name !== userToDelete.name);
  res.json(arr).status(200);
});
