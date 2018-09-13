var connection = require('./connection.js');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

var orm = {
  selectAll: () => {
    connection.query('SELECT * FROM burgers;', (err, data) => {
      if (err) throw err;
      res.render('index', { tasks: data });
    });
  },

  insertOne: orm => {
    console.log('Insert One');
  },

  updateOne: () => {
    console.log('Update One');
  }
};

module.exports = orm;
