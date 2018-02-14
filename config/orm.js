var connection = require("./connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//   * `selectAll()` 
//   * `insertOne()` 
//   * `updateOne()` 

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb){
    var queryString = "INSERT INTO " + table;
    queryString += " ("+cols.toString() + ") ";
    queryString += "VALUES (" + printQuestionMarks(vals.length) + ") ";
    connection.query(queryString, vals, function(err, result){
      if(err) throw err;
      cb(result);
    })
  },
  delete: function(table, condition, cb){
    var queryString = "DELETE FROM "+table;
    queryString += " WHERE "+ condition;
    connection.query(queryString, function(err, result){
      if(err) throw err;
      cb(result);
    })
  }
};
//required by projects.js model
module.exports = orm;