var orm = require("../config/orm.js");

const project ={
  //orm fcns go here: all, build (create), update (finish), and update, (edit?)
  all: function(cb){
    // tableInput, callback
    orm.all("ufos", function(res){
      cb(res);
    })
  },
  create: function(columns, values, cb){
    orm.create("ufos", columns, values, function(res){
      cb(res);
    })
  }
  
}
// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.


//required by burgers_controller
module.exports = project;