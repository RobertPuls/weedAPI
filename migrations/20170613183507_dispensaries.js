
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("dispensary", function(table){
    table.increments("id").primary();
    table.string("name").notNull();
    table.string("location");
    table.string("hours");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dispensary");
};
