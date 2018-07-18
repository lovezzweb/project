var express = require('express');
var router = express.Router();
let mysql=require('../mysql/index'); 
const adduser=require("../model/adduser");
const getalluser=require("../model/getalluser");
const deluser=require("../model/deluser");
const changeuser=require("../model/changeuser");
const toDetail=require("../model/toDetail");
const addDesc=require("../model/addDesc");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pwd',(req,res,next)=>{
  mysql("select pwd from pwdlist",[]).then(info=>{
    if(info[0].pwd===req.query.pwd){
      res.send({msg:'ok'})
    }
  })
})
router.get('/adduser',adduser);
router.get('/getAllUsers',getalluser);
router.get('/deluser',deluser);
router.get('/changeuser',changeuser);
router.get('/box/detail',toDetail);
router.get('/addDesc',addDesc);
module.exports = router;
