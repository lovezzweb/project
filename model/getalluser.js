const mysql=require("../mysql");
let getalluser=(req,res,next)=>{
    mysql("select * from userdata",[]).then(userdata=>{
        res.send({code:1,userdata})
    })
}
module.exports=getalluser;