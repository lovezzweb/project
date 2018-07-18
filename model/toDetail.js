const mysql=require("../mysql");
let toDetail=(req,res,next)=>{
    let {userId,user}=req.query;
    mysql("select * from loglist where userid=?",[userId]).then(detail=>{
        res.send({code:1,detail,user})
    })
}
module.exports=toDetail;