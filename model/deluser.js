const mysql=require("../mysql");
let deluser=(req,res,next)=>{
    let userId=req.query.userId;
    mysql("delete from userdata where userId=?",[userId])
    mysql("select * from userdata",[]).then(userdata=>{
        res.send({code:1,userdata})
    })
}
module.exports=deluser;