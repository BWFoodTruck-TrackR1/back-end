
exports.up = function (knex) {
    return knex.schema
        .createTable('operators', tbl => {
            tbl.increments('id')
            tbl.string('username', 255)
                .unique()
                .notNullable()
            tbl.string('email', 255)
                .unique()
                .notNullable()
            tbl.string('password', 255)
                .notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('operators')
};
