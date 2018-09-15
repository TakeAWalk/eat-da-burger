var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    /* host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db' */
    host: 'bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'g2abaxmkqjlma86e',
    password: 'aqwxz941p4nyyd4j',
    database: 'c84en7gk6i142y5k'
  });
}

connection.connect();
module.exports = connection;
