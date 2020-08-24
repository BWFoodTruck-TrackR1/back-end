const bcrypt = require('bcryptjs');
   
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diners').del()
    .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        {name: 'john doe', username: 'johndoe', email: 'johndoe@gmail.com', password: bcrypt.hashSync('password',8), location: '84 Brickell Street Terre Haute, IN'},
        {name: 'jane doe', username: 'janedoe', email: 'jane@gmail.com', password: bcrypt.hashSync('password',8), location: '9089 North Pearl Street Lenoir, NC'}
      ]);
    });
};
