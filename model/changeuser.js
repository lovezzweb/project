const mysql=require("../mysql");
let changeuser=(req,res,next)=>{
    let {userId,user}=req.query;
    mysql("update userdata set user=? where userId=?",[user,userId]);
    mysql("select * from userdata",[]).then(userdata=>{
        res.send({code:1,userdata})
    })
}
module.exports=changeuser;