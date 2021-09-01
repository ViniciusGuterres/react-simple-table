'use strict';
module.exports = function(app) {
  var users = require('../controllers/users');

  // todoList Routes
  app.route('/users/list')
    .get(users.list_all_users)
};