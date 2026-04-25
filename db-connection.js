const mysql = require('mysql2'); //import package


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Root123',                                      
    database:'students_DB'
})


connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log('Connection has been created');

    const creationQuery = `create table IF NOT EXISTS students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50) UNIQUE,
        age int
    )`

    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('Table is created');
    })
})

module.exports = connection;