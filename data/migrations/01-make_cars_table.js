exports.up = function (knex) {
  return knex.schema.createTable("cars", tbl =>{
    tbl.increments()
    tbl.text("vin").unique().notNullable()
    tbl.text("make")
    tbl.text("model")
    tbl.integer("milage")
    tbl.text("transmission")

  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars")
};
