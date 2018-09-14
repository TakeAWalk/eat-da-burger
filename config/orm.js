var connection = require("./connection.js");

var orm = {
  selectAll: () => {
    console.log("orm:selectAll");
    connection.query("SELECT * FROM burgers;", (err, data) => {
      if (err) throw err;

      console.log(data);
    });
  },

  insertOne: burger => {
    console.log("Insert One");
  },

  updateOne: burger => {
    console.log("Update One");
  }
};

module.exports = orm;
