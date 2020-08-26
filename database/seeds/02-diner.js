const bcrypt = require('bcryptjs');

exports.seed = function(knex) {

      return knex('diners').insert([
        {username: 'sami', password: bcrypt.hashSync('password', 8)},
        {username: 'prince', password: bcrypt.hashSync('password', 8)},
        {username: 'alexis', password: bcrypt.hashSync('password', 8)},
        {username: 'tom', password: bcrypt.hashSync('password', 8) }
      ]);
   
};
