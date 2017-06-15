exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("jointable").del()
    .then(function() {
      // Inserts seed entries
      return knex("jointable").insert([{
          "weed_id": 1,
          "dispensary_id": 4
        },
        {
          "weed_id": 1,
          "dispensary_id": 5
        },
        {
          "weed_id": 1,
          "dispensary_id": 8
        },
        {
          "weed_id": 1,
          "dispensary_id": 9
        },
        {
          "weed_id": 2,
          "dispensary_id": 2
        },
        {
          "weed_id": 2,
          "dispensary_id": 5
        },
        {
          "weed_id": 2,
          "dispensary_id": 7
        },
        {
          "weed_id": 2,
          "dispensary_id": 8
        },
        {
          "weed_id": 3,
          "dispensary_id": 4
        },
        {
          "weed_id": 3,
          "dispensary_id": 5
        },
        {
          "weed_id": 3,
          "dispensary_id": 9
        },
        {
          "weed_id": 4,
          "dispensary_id": 6
        },
        {
          "weed_id": 5,
          "dispensary_id": 2
        },
        {
          "weed_id": 5,
          "dispensary_id": 5
        },
        {
          "weed_id": 6,
          "dispensary_id": 8
        },
        {
          "weed_id": 7,
          "dispensary_id": 1
        },
        {
          "weed_id": 7,
          "dispensary_id": 2
        },
        {
          "weed_id": 7,
          "dispensary_id": 3
        },
        {
          "weed_id": 7,
          "dispensary_id": 4
        },
        {
          "weed_id": 7,
          "dispensary_id": 5
        },
        {
          "weed_id": 7,
          "dispensary_id": 9
        },
        {
          "weed_id": 8,
          "dispensary_id": 1
        },
        {
          "weed_id": 8,
          "dispensary_id": 2
        },
        {
          "weed_id": 8,
          "dispensary_id": 3
        },
        {
          "weed_id": 8,
          "dispensary_id": 5
        },
        {
          "weed_id": 9,
          "dispensary_id": 8
        },
        {
          "weed_id": 10,
          "dispensary_id": 9
        },
      ]);
    });
};
