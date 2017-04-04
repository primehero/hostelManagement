var assert 		= require("chai").assert;
var mongoose 	= require("mongoose");
var Payment 	= require("../models/payment");
var Tenant 		= require("../models/tenant");
var Room 		= require("../models/room");
var Hostel 		= require("../models/hostel");
var User 		= require("../models/user");
var request 	= require("request");

mongoose.connect("mongodb://localhost/hostel_app_test");

/**
 * Creates a user with some random data.
 * @returns {Promise} 
 */
var createUser = function() {
	return new Promise(function(resolve, reject) {
		let struct = {
			username: "Some",
			password: "password",
			level: 0
		};
		User.create(struct, function(err, createdUser) {
			if (err) 
				reject(err);
			resolve(createdUser);
		});
	});
};


/**
 * Creates a Payment with some random data.
 * @returns {Promise} 
 */
var createPayment = function() {
	return new Promise(function(resolve, reject) {
		let struct = {
			name: "Some Payment",
			details: "Some really tiny details",
			nextPayment: (new Date()).setMonth(7)
		};
		Payment.create(struct, function(err, createdPayment) {
			if (err) 
				reject(err);
			resolve(createdUser);
		});
	});
};


/**
 * Creates a Room with some random data.
 * @returns {Promise} 
 */
var createRoom = function() {
	return new Promise(function(resolve, reject) {
		let struct = {
			username: name,
			password: password,
			level: (level ? level : 0)
		};
		Room.create(struct, function(err, createdUser) {
			if (err) 
				reject(err);
			resolve(createdUser);
		});
	});
};



/**
 * Creates a user with some random data.
 * @param {String} name - Username
 * @param {String} password - Password
 * @param {Number} level - 0 / 1
 * @returns {Promise} 
 */
var createUser = function(name, password, level) {
	return new Promise(function(resolve, reject) {
		let struct = {
			username: name,
			password: password,
			level: (level ? level : 0)
		};
		User.create(struct, function(err, createdUser) {
			if (err) 
				reject(err);
			resolve(createdUser);
		});
	});
};/**
 * Creates a user with some random data.
 * @param {String} name - Username
 * @param {String} password - Password
 * @param {Number} level - 0 / 1
 * @returns {Promise} 
 */
var createUser = function(name, password, level) {
	return new Promise(function(resolve, reject) {
		let struct = {
			username: name,
			password: password,
			level: (level ? level : 0)
		};
		User.create(struct, function(err, createdUser) {
			if (err) 
				reject(err);
			resolve(createdUser);
		});
	});
};/**
 * Creates a user with some random data.
 * @param {String} name - Username
 * @param {String} password - Password
 * @param {Number} level - 0 / 1
 * @returns {Promise} 
 */
var createUser = function(name, password, level) {
	return new Promise(function(resolve, reject) {
		let struct = {
			username: name,
			password: password,
			level: (level ? level : 0)
		};
		User.create(struct, function(err, createdUser) {
			if (err) 
				reject(err);
			resolve(createdUser);
		});
	});
};


// Test group for model tests
describe('model tests', function() {
	// Test for tenant
	it('tenant everything', function(done) {
		
	});
});