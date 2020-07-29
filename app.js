const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

const login = require("./controller/login");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/login", login.routes);

app.listen(3000);
