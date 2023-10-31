const express = require("express");

const cors = require("cors");

require("dotenv").config();

const PORT = 8080;

const app = express()

app.use(cors())

const data = require("./games.json")

function findGameByYear(year) {
  return data.filter((game) => game.year == year || !year);
}

app.get("/", (request, response) => {
  response.json("How wooode")
})

app.get("/games", (request, response) => {
  const games = findGameByYear(request.query.year)
  response.json(games)
})

app.listen(PORT, () => console.log(`App os running PORT ${PORT}`));