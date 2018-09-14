var orm = require("../config/orm");

function burger(name, devoured = false) {
  this.name = name;
  this.devoured = devoured;
  this.selectAll = orm.selectAll();
}
/* orm.insertOne();
orm.selectAll();
orm.updateOne(); */

module.export = burger;
