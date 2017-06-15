const knex = require("./knex");


module.exports = {
  "weeds": {
    getAll: function (){
    return knex("weedtable");
    },
    getOne: function (id){
      return knex("weedtable").where("id", id).first();
    },
    create: function (newItem){
      return knex("weedtable").insert(newItem).returning("*");
    },
    delete: function (id){
      return knex("weedtable").where("id", id).del();
    },
    put: function (id, updateItem){
      return knex("weedtable").where("id", id).update(updateItem);
    }
  },
  "des":{
    getAll: function(){
      return knex("dispensary");
    },
    getOne: function (id){
      return knex("dispensary").where("id", id).first();
    },
    create: function (newItem){
      return knex("dispensary").insert(newItem).returning("*");
    },
    delete: function (id){
      return knex("dispensary").where("id", id).del();
    },
    put: function (id, updateItem){
      return knex("dispensary").where("id", id).update(updateItem);
    }
  },
  // "weedDes":{
  //   getAllWeedDes: function(){
  //     return knex("jointable").innerJoin("weedtable", "jointable.weed_id", "weedtable.id")
  //     .innerJoin("dispensary", "jointable.dispensary_id", "dispensary.id").
  //     then(table => {
  //       res.json(table);
  //     });
  //   },
  // },
};
