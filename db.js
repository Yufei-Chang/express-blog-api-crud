const mysql = require("mysql2");

// mi connetto a db
const connection = mysql.createConnection({ host: "localhost", user: "root", password: "rootroot", database: "blog_db" });

connection.connect((err) => {
    if (err) throw err;
    console.log("sono connesso a dbz")
});

module.exports = connection;