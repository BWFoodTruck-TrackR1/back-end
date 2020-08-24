const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operators').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('operators').insert([
        {username: 'sami', email: 'sami@aol.com', password: bcrypt.hashSync('password', 8)},
        {username: 'tom', email: 'tom@yahoo.com', password: bcrypt.hashSync('password', 8)},
        {username: 'jorge', email: 'jorge@gmail.com', password: bcrypt.hashSync('password', 8)}       
      ]);
    });
};
