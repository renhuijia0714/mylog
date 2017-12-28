var express = require('express');
var router = express.Router();
var query = require('../../../cofig/mysqlconnect')
/* GET home page. */
router.get('/', function(req, res, next) {

  //let sql = `updata info apilist where `
  let sql = `select * from apilist`
  query(sql).then((data) => {
    res.send(data)
  }).catch((err) => {
    console.log(err)
    res.send('error:'+ err)
  })
});

module.exports = router;
