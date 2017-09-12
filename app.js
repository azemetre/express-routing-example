require('dotenv').config();

const path = require('path');
const express = require('express');
const zipdb = require('zippity-do-dah');
const ForecastIo = require('forecastio');

const app = express();
const weath = new ForecastIo(process.env.DARKSKY_API_KEY);

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});