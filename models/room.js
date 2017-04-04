mongoose = require("mongoose");

roomSchema = mongoose.Schema({
	hostel: {
		type: 	mongoose.Schema.Types.ObjectId,
    	ref: 	"Hostel"	
	},
	floor: String,
	roomNumber: String,
	numBeds: Number,
	numOccupied: {
		type: Number,
		default: 0
	},
	cost: Number,
	// All people living in will be stored
	_tenants: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Tenant"
	}]
});

module.exports = mongoose.model("Room", roomSchema);