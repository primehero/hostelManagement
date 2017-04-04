var routes = require("express").Router();
var Hostel = require("../models/hostel");


// INDEX route
routes.get("/", (req, res) => {
	Hostel.find({}, (err, foundHostel) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		// Helps making content false incase there is no content.
		if (foundHostel.length === 0) 
			foundHostel = null;
		res.sendResponse({
			successFlag: true,
			content: foundHostel
		});
	});
});


// CREATE route
routes.post("/", (req, res) => {
	Hostel.create(req.body, (err, createdHostel) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Created a new Hostel " + createdHostel.name
		});
	});
});



// SHOW route
routes.get("/:id", (req, res) => {
	Hostel.findById(req.params.id, (err, foundHostel) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		res.sendResponse({
			successFlag: true,
			content: foundHostel
		});
	});
});

// UPDATE route
routes.put("/:id", (req, res) => {
	Hostel.findByIdAndUpdate(req.params.id, { $set : req.body }, (err, updatedHostel) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Updated Hostel " + updatedHostel.name
		});
	});
});

// DELETE route
routes.delete("/:id", (req, res) => {
	Hostel.findByIdAndRemove(req.params.id, (err) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Removed a new Hostel Successfully!"
		});
	});
});



module.exports = routes;
