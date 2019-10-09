// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // Display all burgers in database
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // Add new burger to the database
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // Change the devoured state to true
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // Delete a burger from the database
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
