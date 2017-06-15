exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("jointable", function(table) {
      table.increments("id").primary();
      table.integer("weed_id").notNull().references("weedtable.id");
      table.integer("dispensary_id").notNull().references("dispensary.id");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("jointable");
};
