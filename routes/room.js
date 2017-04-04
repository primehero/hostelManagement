var routes = require("express").Router();
var Room = require("../models/room");


// INDEX route
routes.get("/", (req, res) => {
	Room.find({}, (err, foundRooms) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		// Helps making content false incase there is no content.
		if (foundRooms.length === 0) 
			foundRooms = null;
		res.sendResponse({
			successFlag: true,
			content: foundRooms
		});
	});
});

// CREATE route
routes.post("/", (req, res) => {
	Room.create(req.body, (err, createdRoom) => {
		if (err) {
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		}
		res.sendResponse({
			successFlag: true,
			successMsg: "Created a new Room on the " + createdRoom.floor
		});
	});
});


// SHOW route
routes.get("/:id", (req, res) => {
	Room.findById(req.params.id, (err, foundRoom) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err
			});
		res.sendResponse({
			successFlag: true,
			content: foundRoom
		});
	});
});

// UPDATE route
routes.put("/:id", (req, res) => {
	Room.findByIdAndUpdate(req.params.id, { $set : req.body }, (err, updatedRoom) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Updated Room " + updatedRoom.roomNumber
		});
	});
});

// DELETE route
routes.delete("/:id", (req, res) => {
	Room.findByIdAndRemove(req.params.id, (err) => {
		if (err)
			res.sendResponse({
				errorFlag: true,
				errorMsg: err 
			});
		res.sendResponse({
			successFlag: true,
			successMsg: "Removed a new Room Successfully!"
		});
	});
});


module.exports = routes;
