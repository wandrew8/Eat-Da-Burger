// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");
var exphbs = require("express-handlebars");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==============================================================================
// HANDLEBARS CONFIGURATION
// ==============================================================================


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ================================================================================
// IMPORTED ROUTES
// ================================================================================

var routes = require("./controllers/burgers_controller.js")

app.use(routes);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
