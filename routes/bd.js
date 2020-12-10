var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'remotemysql.com', 
    user:'j4KtNTSfgZ', 
    password:'0acPwgR5BJ', 
    database:'j4KtNTSfgZ' 
});

conexion.connect(function (error){
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('se inicio conexion');
});


module.exports=conexion;