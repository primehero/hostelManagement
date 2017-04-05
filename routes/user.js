var routes = require("express").Router();
var User = require("../models/user");

// INDEX route
routes.get('/', function(req, res) {
  User.find({}, (err, foundUsers) => {
    if (err)
      req.flash('error', err);
    res.render('user/index', { users : foundUsers });
  });
});

// NEW route
routes.get('/new', function(req, res) {
  res.render('user/new');
});

// CREATE route
routes.post('/', function(req, res) {
  var newUser = new User({ username : req.body.username });
  User.register(newUser, req.body.password, function(err, user) {
    if (err)
      req.flash('error', JSON.stringify(err));
    else
      req.flash('success', "Created new User: " + user.username);
    res.redirect('/user');
  });
});

// SHOW route
routes.get("/:id", function(req, res) {
  User.findById(req.params.id, (err, foundUser) => {
    if (err) {
      req.flash('error', err);
      res.redirect('/user');
    }
    res.render("user/show", { user : foundUser });
  });
});

// DELETE route
routes.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, err => {
    if (err)
      req.flash('error', err);
    else
      req.flash('success', "Removed User!");
    res.redirect('/user');
  });
});

module.exports = routes;
