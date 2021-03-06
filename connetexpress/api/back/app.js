var express = require('express');
var router = express.Router();
var dbquery = require('../../cofig/mysqlconnect')
var generateUUID = require('../common/Unique')
var creatTime = require('../common/creatTime')
var moment = require('moment')
var querystring = require('querystring')
const {readHandel,sqlHandel,query} = dbquery
/* GET home page. */


//插入文件
router.post('/insert', function(req, res, next) {
   let sql = `insert into apilist(id,title,url,type,sendparams,getparams,backorfont,time) values('${generateUUID()}','${req.body.title}','${req.body.url}','${req.body.type}','${req.body.sendparams}','${req.body.getparams}','${req.body.backorfont}','${creatTime()}')`
  sqlHandel(sql).then((data) => {
    res.send({
        code: 1011,
        message: '数据插入成功'
    })
  }).catch((err) => {
    console.log(err)
    res.send({
        code: 1012,
        message: '数据插入失败'
    })
  })
});
//读取
router.post('/select', function(req, res, next) {
    let sql = `select * from apilist where backorfont = '${req.body.backorfont}'`
    readHandel(sql).then((data) => {
    res.send({
        code: 1021,
        message: '数据读取成功',
        data
    })
    }).catch((err) => {
    res.send({
        code: 1022,
        message: '数据读取失败',
        err:err
    })
    })
});
//修改
router.post('/update', function(req, res, next) {
    var sql = `update apilist set title='${req.body.title}',url='${req.body.url}',type='${req.body.type}',sendparams='${req.body.sendparams}',getparams='${req.body.getparams}', backorfont='${req.body.backorfont}',time='${creatTime()}' where id='${req.body.id}'`
        
    query(sql).then((data) => {
    res.send({
        code: 1031,
        message: '数据修改成功'
    })
    }).catch((err) => {
    res.send({
        code: 1032,
        message: '数据修改失败',
        err
    })
    })
});
//删除
router.post('/delete', function(req, res, next) {
    let sql = `delete from apilist where id = '${req.body.id}'`
    sqlHandel(sql).then((data) => {
    res.send({
        code: 1041,
        message: '数据删除成功'
    })
    }).catch((err) => {
    res.send({
        code: 1042,
        message: '数据删除失败'
    })
    })
});
module.exports = router;
