
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("weedtable", function (table){
    table.increments("id").primary();
    table.string("species");
    table.string("strain").notNull();
    table.string("imgURL");
    table.float("THC%").notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("weedtable");
};
