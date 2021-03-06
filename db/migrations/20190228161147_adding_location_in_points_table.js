
exports.up = function (knex, Promise) {
  return knex.schema.table('points', function (table) {
    table.float('latitude').notNull().defaultTo(0);
    table.float('longitude').notNull().defaultTo(0);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table('points', function (table) {
    table.dropColumn('latitude');
    table.dropColumn('longitude');
  });
};
