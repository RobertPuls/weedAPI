
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dispensary").del()
    .then(function () {
      // Inserts seed entries
      return knex("dispensary").insert([
        {
          "name": "GroundSwell Cannabis Boutique",
          "location": "3121 E Colfax Ave, Denver",
          "hours": "9AM-7PM"
        },
        {
          "name": "Universal Herbs Park Ave",
          "location": "800 Park Ave W, Denver",
          "hours": "8AM-8:45PM"
        },
        {
          "name": "Medicine Man - Aurora",
          "location": "1901 S Havana St, Aurora",
          "hours": "8AM-10PM"
        },
        {
          "name": "Botanico",
          "location": "3054 Larimer St, Denver",
          "hours": "9AM-9:50PM"
        },
        {
          "name": "L'Eagle Services LLC",
          "location": "380 Quivas St, Denver",
          "hours": "8AM-8PM"
        },
        {
          "name": "Native Roots, Edgewater",
          "location": "5610 W 20th Ave, Edgewater",
          "hours": "9AM-12AM"
        },
        {
          "name": "Mile High Green Cross",
          "location": "852 Broadway #606, Denver",
          "hours": "10AM-6:45PM"
        },
        {
          "name": "Lightshade - Sheridan",
          "location": "1126 S Sheridan Blvd, Denver",
          "hours": "9AM-9:45PM"
        },
        {
          "name": "The Joint - Denver",
          "location": "735 W 38th Ave, Denver",
          "hours": "9AM-9:45PM"
        }
      ]);
    });
};
