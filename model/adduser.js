const mysql=require("../mysql");
let adduser=(req,res,next)=>{
    let {userId,user,moneyBase}=req.query;
    mysql("insert into userdata (userId,user,moneyBase) values (?,?,?)",[userId,user,moneyBase])
    mysql("select * from userdata",[]).then(userdata=>{
        res.send({code:1,userdata})
    })
}
module.exports=adduser;