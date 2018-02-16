const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//in lieu of path
app.use(express.static(__dirname + '/public'));

//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROUTES -->controllers
var routes = require("./controllers/projects_controller.js");

app.use(routes);

app.listen(PORT,() => console.log("UFOs spotted on telescope  "+PORT));