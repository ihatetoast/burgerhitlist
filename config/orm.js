var connection = require("./connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//   * `selectAll()` 
//   * `insertOne()` 
//   * `updateOne()` 
var orm = {
  selectAll: function(whatToSelect, tableInput){
    let queryString = "SELECT ?? FROM ??";
    connection.query(queryString,[whatToSelect, tableInput], function(err, result){
      if (err) throw err;
      console.log(result);
    })
  },
  insertOne: function(arg1, arg2){
    let queryString = "";
    connection.query(queryString,[arg1, arg2], function(err, result){
      if (err) throw err;
      console.log(result);
    })
  },
  updateOne: function(arg1, arg2){
    let queryString = "";
    connection.query(queryString,[arg1, arg2], function(err, result){
      if (err) throw err;
      console.log(result);
    })
  },
  
};
module.exports = orm;