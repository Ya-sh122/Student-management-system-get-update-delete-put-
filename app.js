const express = require('express');
const db = require('./utils/db-connection');
const stuRoutes = require('./routes/studentsRoutes');

//models
const studentModel = require('./models/students');

require('./models')

const app= express();

app.use(express.json());



app.use("/students",stuRoutes);

db.sync({alter: true}).then(()=>{
    app.listen(3000, (err)=>{
        console.log("Server is running")
    })
}).catch((err)=>{
    console.log(err);
})

