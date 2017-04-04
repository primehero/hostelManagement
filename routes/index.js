var routes = require("express").Router();

routes.get("/", (req, res) => {	
	res.sendResponse({
		successFlag: true		
	})
});

module.exports = routes;
