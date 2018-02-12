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
require("./controllers/burgers_controller.js")(app);
// require("./controllers/burgers_controller")(app);
//and within the controller ...
// * `selectAll()` 
// * `insertOne()` build as in build-a-burger
// * `updateOne()` 
// app.use(routes);
// require("./app/routing/apiRoutes")(app);

app.listen(PORT,() => console.log("Burgers found on port "+PORT));