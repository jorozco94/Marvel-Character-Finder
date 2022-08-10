const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MarvelModel = require("./models/Marvel");

app.use(express.json());

mongoose.connect('mongodb+srv://jorozco94:Beardmaster24@cluster0.z7afq.mongodb.net/Marvel?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
});

app.get("/", (req, res) => {
  res.send("Welcome to the homepage")
});

app.get("/",)

app.listen(3000, () => {
  console.log("Server listening on port 3000...")
})