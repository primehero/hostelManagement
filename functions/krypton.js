var Tenant = require("../models/tenant");
var Room = require("../models/room");
var Hostel = require("../models/hostel");

/**
 * Adds a tenant to the room procedurally.
 */
module.exports.addTenant = function(tenantObj, roomId) {
	return new Promise(function(resolve, reject) {
		// Create a new tenant.
    Tenant
			.create(tenantObj, function(err, createdTenant) {
			if (err)
				reject(err);

			// First find that room by id
	    Room.findById(roomId)
				.exec((err, foundRoom) => {
				// Incerment occupied.
				foundRoom.numOccupied =
				Number.parseInt(foundRoom.numOccupied, 10)
				 + 1;
				foundRoom._tenants.push(createdTenant._id);
				foundRoom.save(err => {
					 if (err)
					 	reject(err);
					resolve(foundRoom);
				});
			});
		});
	});

};

module.exports.findMyHostels = function (user) {
	return new Promise((resolve, reject) => {
		Hostel.find({}, (err, foundHostels) => {
			if (err)
				reject(err);
			var userHostels = Array.prototype.filter.call(foundHostels, (hostel) => {
			// console.log(
			// 	hostel._creator._id,
			// 	mongoose.Types.ObjectId(user._id),
			// 	Object.is(hostel._creator._id.toString(), user._id.toString()) );
				if (Object.is(hostel._creator._id.toString(), user._id.toString()))
					return true;
				return false;
			});
			resolve(userHostels);
		});
	});
};
