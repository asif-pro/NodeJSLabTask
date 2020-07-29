const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

const login = require("./controller/login");
const admin = require("./controller/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", admin.routes);
app.use("/login", login.routes);

app.listen(3000);