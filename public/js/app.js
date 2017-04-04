var app = angular.module("hostelsApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "/templates/admin/newCategory.html"
	})
	.when("/hostel", {
		templateUrl: "/templates/admin/hostels.html"
	});
	.when("/hostel/new", {
		templateUrl: "/templates/admin/newHostel.html"
	})

});
