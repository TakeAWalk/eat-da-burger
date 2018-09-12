var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connectio = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
  });
}

connection.connect();
module.exports = connection;
