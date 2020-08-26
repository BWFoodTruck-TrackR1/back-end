const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operators').delete()
    .then(function () {
      // Inserts seed entries
      return knex('operators').insert([
        {username: 'sami', password: bcrypt.hashSync('password', 8)},
        {username: 'prince', password: bcrypt.hashSync('password', 8)},
        {username: 'alexis', password: bcrypt.hashSync('password', 8)},
        {username: 'tom', password: bcrypt.hashSync('password', 8) }
      ]);
    });
};
