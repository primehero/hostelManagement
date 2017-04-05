var routes = require("express").Router();

routes.get("/", (req, res) => {
		res.redirect("/login");
});

//show login form
routes.get("/login", function(req, res){
   res.render("login", {page: 'login'});
});

//handling login logic
routes.post("/login", passport.authenticate("local",
    {
        successRedirect: "/hostel",
        failureRedirect: "/login",
        failureFlash: true,
        successFlash: 'Welcome to Hostel Management App!'
    }), function(req, res){
});

// logout route
routes.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "See you later!");
   res.redirect("/");
});

module.exports = routes;
