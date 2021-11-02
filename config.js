const mysql = require("mysql");
const con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"test"
});

con.connect((err)=>{
    if(err)
    {
        console.warn("error in connection")
    }
});

module.exports =con;