'use strict';
const users = require('../controllers/users');
const logs = require('../controllers/logs');

module.exports = function(app) {
  
  // todoList Routes
  app.route('/users/list')
    .get(users.list_all_users)

  app.route('/logs')
    .get(logs.list_users_logs)
};