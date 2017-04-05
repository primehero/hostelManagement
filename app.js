var express 				= require("express");
		app 						= express(),
		mongoose 				= require("mongoose"),
		bodyParser 			= require("body-parser"),
		middleware 			= require("./middleware"),
		methodOverride 	= require("method-override"),
		cookieParser 		= require("cookie-parser"),
		flash 					= require("connect-flash"),
		session 				= require("express-session"),
		passport    		= require("passport"),
		LocalStrategy 	= require("passport-local");


var User = require("./models/user");



app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(cookieParser('bsjbddbcu'));
// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Jiffy jaffy jibber is just jibberish",
	resave: false,
	saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.success = req.flash('success');
	res.locals.error = req.flash('error');
	res.locals.currentUser = req.user;
	next();
});

mongoose.connect("mongodb://localhost/hostel_app_test");

/**
 * ROUTES
 * =====
 */
var indexRoutes 		= require("./routes/index");
var categoryRoutes 	= require("./routes/category");
var hostelRoutes 		= require("./routes/hostel");
var roomRoutes 			= require("./routes/room");
var tenantRoutes 		= require("./routes/tenant");
var paymentRoutes 	= require("./routes/payment");
var adminRoutes			= require("./routes/admin");
var userRoutes			= require("./routes/user");

app.use("/", 					indexRoutes);
app.use("/category", 	categoryRoutes);
app.use("/hostel", 		hostelRoutes);
app.use("/room", 			roomRoutes);
app.use("/tenant", 		tenantRoutes);
app.use("/payment", 	paymentRoutes);
app.use("/admin",			adminRoutes);
app.use("/user",			userRoutes);


// Keep listening
app.listen(1337, () => {
	console.log("Started Server!");
});
