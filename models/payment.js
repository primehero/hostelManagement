var mongoose = require("mongoose");

var paymentSchema =
mongoose.Schema({
	name: String,
	details: String,
	nextPayment: {
		type: Date,
		default: Date.now()
	},
	_createdOn: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model("Payment", paymentSchema);