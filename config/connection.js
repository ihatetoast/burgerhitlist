// Inside the `connection.js` file, setup the code to connect Node to MySQL.
// Export the connection. ... FOR THE ORM
var mysql = require("mysql");

var connection; 

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ufos_db"
  });
}

//required by ORM
module.exports = connection;