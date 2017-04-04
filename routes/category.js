var routes = require("express").Router();
var Category = require("../models/category");


// INDEX route
routes.get("/", (req, res) => {
	Category.find({}, (err, foundCategories) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		// Helps making content false incase there is no content.
		if (foundCategories.length === 0) 
			foundCategories = null;
		res.sendResponse({
			successFlag: true,
			content: foundCategories
		});
	});
});

// SHOW route
routes.get("/:id", (req, res) => {
	Category.findById(req.params.id, (err, foundCategory) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		res.sendResponse({
			successFlag: true,
			content: foundCategory
		});
	});
});

// CREATE route
routes.post("/", (req, res) => {
	Category.create(req.body, (err, createdCategory) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Created a new Category " + createdCategory.name
		});
	});
});


// UPDATE route
routes.put("/:id", (req, res) => {
	Category.findByIdAndUpdate(req.params.id, { $set : req.body }, (err, updatedCategory) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Updated category " + updatedCategory.name
		});
	});
});


// DELETE route
routes.delete("/:id", (req, res) => {
	Category.findByIdAndRemove(req.params.id, (err) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Removed a new Category Successfully!"
		});
	});
});



module.exports = routes;
