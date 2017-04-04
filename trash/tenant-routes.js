var routes = require("express").Router();
var Tenant = require("../models/tenant");


// INDEX route
routes.get("/", (req, res) => {
	Tenants.find({}, (err, foundTenantss) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		// Helps making content false incase there is no content.
		if (foundTenantss.length === 0) 
			foundTenantss = null;
		res.sendResponse({
			successFlag: true,
			content: foundTenantss
		});
	});
});

// CREATE route
routes.post("/", (req, res) => {
	Tenants.create(req.body, (err, createdTenants) => {
		if (err) {
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		}
		res.sendResponse({
			successFlag: true,
			successMsg: "Created a new Tenant " + createdTenants.name
		});
	});
});


// SHOW route
routes.get("/:id", (req, res) => {
	Tenants.findById(req.params.id, (err, foundTenants) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		res.sendResponse({
			successFlag: true,
			content: foundTenants
		});
	});
});

// UPDATE route
routes.put("/:id", (req, res) => {
	Tenants.findByIdAndUpdate(req.params.id, { $set : req.body }, (err, updatedTenants) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Updated Tenant " + updatedTenants.name
		});
	});
});

// DELETE route
routes.delete("/:id", (req, res) => {
	Tenants.findByIdAndRemove(req.params.id, (err) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Removed a new Tenants Successfully!"
		});
	});
});



module.exports = routes;
