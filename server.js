var express = require("express");
var bodyParser = require("body-parser");

//tells node that we are creating an "express" server
var app = express();

//sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;


//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//effectively "starts" our server
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});