var express = require('express');
var router = express.Router();
var query = require('../../../cofig/mysqlconnect')
/* GET home page. */
router.get('/', function(req, res, next) {
  //let sql = `insert into apilist() values()`
  let sql = `select * from apilist`
  query(sql).then((data) => {
    res.send(data)
  }).catch((err) => {
    console.log(err)
    res.send('error:'+ err)
  })
});

module.exports = router;
