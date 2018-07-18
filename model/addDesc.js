const myMysql=require("../mysql");
let addDesc=(req,res,next)=>{
    let {date,userId,price,log}=req.query;
    myMysql('insert into loglist (date,price,userId,log) values (?,?,?,?)',[date,price,userId,log])
    myMysql("select moneyBase from userdata where userId=?",[userId]).then(data=>{
        let money=JSON.stringify(data[0].moneyBase*1+price*1)
        myMysql("update userdata set moneyBase=? where userId=?",[money,userId]).then(info=>{
            myMysql("select * from userdata",[]).then(userdata=>{
                res.send({code:1,userdata})
            })
        });
        
    })
   
}
module.exports=addDesc;