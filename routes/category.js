var routes = require("express").Router();
var Category = require("../models/category");


// INDEX route
routes.get("/", (req, res) => {
	Category.find({}, (err, foundCategories) => {
		if (err)
			req.flash("error", err);
		res.render("category/index", { categories : foundCategories });
	});
});

// NEW route
routes.get("/new", (req, res) => {
	res.render("category/new");
});

// SHOW route
routes.get("/:id", (req, res) => {
	Category.findById(req.params.id, (err, foundCategory) => {
		if (err)
			req.flash("error", err);
		res.render("index");
	});
});

// CREATE route
routes.post("/", (req, res) => {
	Category.create(req.body, (err, createdCategory) => {
		if (err)
			req.flash('error', err);
		else
			req.flash('success', "Created a new category " + createdCategory.name);
		res.redirect('/category');
	});
});

// 


// UPDATE route
routes.put("/:id", (req, res) => {
	Category.findByIdAndUpdate(req.params.id, { $set : req.body }, (err, updatedCategory) => {
		if (err)
			req.flash('error', err);
		else
			req.flash('success', "Updated Category " + category.name);
		res.redirect("/category/" + req.params.id);
	});
});


// DELETE route
routes.delete("/:id", (req, res) => {
	Category.findByIdAndRemove(req.params.id, (err) => {
		if (err)
			req.flash('error', err);
		else
			req.flash('success', "Deleted Category Successfully");
		res.redirect("/category");
	});
});



module.exports = routes;
