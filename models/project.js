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
  },
  update: function(colValsObject, condition, cb){
    orm.update("ufos", colValsObject, condition, function(res){
      cb(res);
    })
  }
  
}



//required by projects_controller
module.exports = project;

