'use strict';
var users = require('../controllers/users');

module.exports = function(app) {
  
  // todoList Routes
  app.route('/users/list')
    .get(users.list_all_users)
};