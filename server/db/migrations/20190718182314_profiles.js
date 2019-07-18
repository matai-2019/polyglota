exports.up = function (knex) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary().unSigned()
    table.string('name')
    table.integer('userId')
    table.foreign('userId')
      .references('user.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .unique()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('profiles')
}
