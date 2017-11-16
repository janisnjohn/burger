// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");
var connection;
// Set up our connection information
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });
if (process.env.JAWSDB_URL) {
  connection=mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'burgers_db'
  });


}


// Connect to the database
connection.connect();
// Export connection
module.exports = connection;
