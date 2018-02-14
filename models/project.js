var orm = require("../config/orm.js");

const project ={
  //orm fcns go here: all, build (create), update (finish), and update, (edit?)
  all: function(cb){
    // tableInput, callback
    orm.all("ufos", function(res){
      cb(res);
    })
  },
  create: function(cols, vals, cb){
    orm.create("ufos", cols, vals, function(res){
      cb(res);
    })
  },
  delete: function(condition,cb){
    orm.delete("ufos", condition, function(res){
      cb(res);
    });
  }
  
}
// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.


//required by burgers_controller
module.exports = project;

