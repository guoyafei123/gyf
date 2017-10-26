var express = require('express');
var router = express.Router();
var mySql = require("mysql");
var connection = mySql.createConnection({
	host :'localhost',
	user : 'root',
	password : 'root'
});
/* GET home page. */
router.get('/', function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin","*");
	connection.connect();
	connection.query('SELECT * FROM xcf.user',function(err,rows,fields){
		res.send(rows);
		res.setHeader("Access-Control-Allow-Origin","*");
	})
  connection.end()
});

module.exports = router;
