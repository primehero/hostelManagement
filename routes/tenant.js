var routes = require("express").Router();
var Tenant = require("../models/tenant");


// INDEX route
routes.get("/", (req, res) => {
	Tenant.find({}, (err, foundTenants) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		// Helps making content false incase there is no content.
		if (foundTenants.length === 0) 
			foundTenants = null;
		res.sendResponse({
			successFlag: true,
			content: foundTenants
		});
	});
});

// CREATE route
routes.post("/", (req, res) => {
	Tenant.create(req.body, (err, createdTenant) => {
		if (err) {
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		}
		res.sendResponse({
			successFlag: true,
			successMsg: "Created a new Tenant " + createdTenant.name
		});
	});
});


// SHOW route
routes.get("/:id", (req, res) => {
	Tenant.findById(req.params.id, (err, foundTenant) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		res.sendResponse({
			successFlag: true,
			content: foundTenant
		});
	});
});

// UPDATE route
routes.put("/:id", (req, res) => {
	Tenant.findByIdAndUpdate(req.params.id, { $set : req.body }, (err, updatedTenant) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Updated Tenant " + updatedTenant.name
		});
	});
});

// DELETE route
routes.delete("/:id", (req, res) => {
	Tenant.findByIdAndRemove(req.params.id, (err) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Removed a new Tenant Successfully!"
		});
	});
});



module.exports = routes;
