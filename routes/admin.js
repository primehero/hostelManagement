var routes 			= require("express").Router();
var middleware 	= require("../middleware");


routes.get("/", middleware.isLoggedIn, function(req, res) {
	res.render("index");
});

module.exports = routes;
