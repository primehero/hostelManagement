var routes = require("express").Router();
var Payment = require("../models/payment");


// INDEX route
routes.get("/", (req, res) => {
	Payment.find({}, (err, foundPayments) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		// Helps making content false incase there is no content.
		if (foundPayments.length === 0) 
			foundPayments = null;
		res.sendResponse({
			successFlag: true,
			content: foundPayments
		});
	});
});

// CREATE route
routes.post("/", (req, res) => {
	Payment.create(req.body, (err, createdPayment) => {
		if (err) {
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		}
		res.sendResponse({
			successFlag: true,
			successMsg: "Created a new Payment " + createdPayment.name
		});
	});
});


// SHOW route
routes.get("/:id", (req, res) => {
	Payment.findById(req.params.id, (err, foundPayment) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		res.sendResponse({
			successFlag: true,
			content: foundPayment
		});
	});
});

// UPDATE route
routes.put("/:id", (req, res) => {
	Payment.findByIdAndUpdate(req.params.id, { $set : req.body }, (err, updatedPayment) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Updated Payment " + updatedPayment.name
		});
	});
});

// DELETE route
routes.delete("/:id", (req, res) => {
	Payment.findByIdAndRemove(req.params.id, (err) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Removed a new Payment Successfully!"
		});
	});
});



module.exports = routes;
