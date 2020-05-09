var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12338791",
  password: "SHKXwrYJiK",
  database: "sql12338791"
});

conn.connect(function (err){
    if(err) throw err;
});

module.exports = conn;