// Update with your config settings.
require("dotenv").config()

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/food_truck_trackr.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'food_truck_trackr',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  }

};
