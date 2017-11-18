const { knex } = require('./connection');

function createTable (name) {
    console.log("table creation started");

    let tbl = name;

    knex.schema.createTableIfNotExists(tbl, (table) => {
        table.increments(),
        table.string('name'),
        table.string('web'),
        table.string('user'),
        table.string('password'),
        table.string('email'),
        table.timestamps()
    }).then( () => {
        console.log("table created")
    })
}

module.exports = {
    createTable
}