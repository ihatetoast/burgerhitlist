var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var ufo = require("../models/project.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  ufo.all(function(data) {
    var hbsObject = {
      projects: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/api/ufos", function(req, res) {
  ufo.create([
    "project_name","craft", "inProg","finished"
  ], [
    req.body.name, req.body.craft, req.body.inProg, req.body.finished
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

router.delete("/api/ufos/:id", function(req, res){
  var condition = "id="+req.params.id;
  ufo.delete(condition, function(result){
    if(result.affectedRows === 0){
      //if no rows affected, ufo (id) didn't exist. send 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})




// Export routes for server.js to use.
module.exports = router;


// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

