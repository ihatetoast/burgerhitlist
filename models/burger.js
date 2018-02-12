var orm = require("../config/orm.js");

const burger ={
  //orm fcns go here: all, build (create), update (devour)
  all: function(cb){
    // tableInput, callback
    orm.all("burgers", function(res){
      cb(res);
    })
  }
  
}
// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.


//required by burgers_controller
module.exports = burger;