
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("weedtable").del()
    .then(function () {
      // Inserts seed entries
      return knex("weedtable").insert([
        {
          "species": "Sativa",
          "strain": "Durban Poison",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/655885/b/durban-poison__primary_9c39.jpg",
          "THC%": 25
        },
        {
          "species": "Sativa",
          "strain": "Sour Diesel",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/673419/b/sour-diesel__primary_32f2.jpg",
          "THC%": 25
        },
        {
          "species": "Sativa",
          "strain": "Green Crack",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/675088/b/green-crack__primary_0913.jpg",
          "THC%": 21
        },
        {
          "species": "Indica",
          "strain": "Northern Lights",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/674571/b/northern-lights__primary_cb88.jpg",
          "THC%": 26
        },
        {
          "species": "Indica",
          "strain": "GrandDaddy Purple",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/667370/b/granddaddy-purple__primary_0e40.jpg" ,
          "THC%": 23
        },
        {
          "species": "Indica",
          "strain": "Skywalker",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/654538/b/skywalker__primary_1833.jpg" ,
          "THC%": 20
        },
        {
          "species": "Hybrid",
          "strain": "Blue Dream",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/665293/b/blue-dream__primary_8ca9.jpg" ,
          "THC%": 24
        },
        {
          "species": "Hybrid",
          "strain": "Girl Scout Cookies",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/662442/b/girl-scout-cookies__primary_1e1c.jpg" ,
          "THC%": 28
        },
        {
          "species": "Hybrid",
          "strain": "Pineapple Express",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/670317/b/pineapple-express__primary_4891.jpg" ,
          "THC%": 26
        },
        {
          "species": "Sativa",
          "strain": "Super Lemon Haze",
          "imgURL": "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/646122/b/lemon-haze__primary_b0db.jpg" ,
          "THC%": 25
        },
      ]);
    });
};
