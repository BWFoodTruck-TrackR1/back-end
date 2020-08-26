
exports.seed = function(knex) {
      return knex('trucks').insert([
        {operator_id: 1, name: "test", image_URL: "test", cuisine_type: "test",customer_ratings_avg: 5, current_location: "test", open_time: "test" }
      
      ]);
};
