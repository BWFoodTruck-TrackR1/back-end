
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').delete()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        
        {
          operator_id: 1, 
          name: 'Tacos El Chupacabra', 
          image_URL: 'https://s3-media0.fl.yelpcdn.com/bphoto/9vtpwRel1gua6nfwRghteg/l.jpg', 
          cuisine_type: 'Mexican',
          customer_ratings_avg: null,
          current_location: '4201 International Blvd, Oakland, CA 94601',
          open_time: "10:00AM"
        },
        {
          operator_id: 2, 
          name: 'Taqueria El Cazador', 
          image_URL: 'https://s3-media0.fl.yelpcdn.com/bphoto/zqXapZU8YR7SOj_epJboJw/o.jpg',
          cuisine_type: 'Mexican', 
          customer_ratings_avg: null,
          current_location: '70 Chapel St. Lake Villa, IL 60046',
          open_time: "10:00AM"

        },
        
      ]);
    });
};
