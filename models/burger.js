var orm = require('../config/orm');

function burger(name, devoured = false) {
  this.name = name;
  this.devoured = devoured;
}
/* orm.insertOne();
orm.selectAll();
orm.updateOne(); */

module.export = burger;
