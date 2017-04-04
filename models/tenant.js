var mongoose = require("mongoose");

var tenantSchema = mongoose.Schema({
	name: String,
	adhaar: String,
	address: String,
	phone: String,
	room: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Room"
	},
	payments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Payment"
	}]
});


/**
 * Creates a new Tenant.
 * @param {Object} tenant - Contains name, adhaar,.. properties of the new tenant.
 * @param {mongoose.Schema.Types.ObjectId} roomId - Room id of the user. 
 * @returns {Promise} 
 */
tenantSchema.methods.createTenant = function(tenant, roomId) {
	if (!roomId)
		throw new Error("No roomId supplied to createTenant!");

	return new Promise(function(resolve, reject) {
		let tenantObj = {			
			name: tenant.name,
			adhaar: tenant.adhaar,
			address: tenant.address,
			phone: tenant.phone,
			room: mongoose.Types.ObjectId(roomId),
			payments: []
		};

		this.model('Tenant').create(tenantObj, function(err, createdTenant) {
			if (err)
				reject(err);
			resolve(createdTenant);
		});
	});
};


/**
 * Adds a paymentId on the Tenant.
 * @param {mongoose.Schema.Types.ObjectId} mongooseId - MongooseId of tenant.
 * @param {mongoose.Schema.Types.ObjectId} paymentId - MongooseId of payment of this user.
 * @returns {Promise}  
 */
tenantSchema.methods.addPayment = function(mongooseId, paymentId) {
	if (!roomId || !paymentId)
		throw new Error("roomId / paymentId is empty.");

	return new Promise(function(resolve, reject) {
		// Find by id
		this.model('Tenant').findById(mongooseId, (err, foundTenant) => {
			foundTenant.payments.push(paymentId);
			foundTenant.save(err => {
				if (err)
					reject(err);
				resolve(foundTenant);
			});
		});
	});	
};





module.exports = mongoose.model("Tenant", tenantSchema);