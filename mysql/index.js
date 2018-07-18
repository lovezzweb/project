const mysql=require("mysql");

function getConnection(){
    const connection=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"verify"
    })
    return connection;
}

let mysqldata=(sql,query)=>{
    let connection=getConnection();
    return new Promise((resolve,reject)=>{
        connection.query(sql,query,(err,results)=>{
            if(!err){
                resolve(results);
            }
           connection.end();
        })
    })
}
module.exports=mysqldata;