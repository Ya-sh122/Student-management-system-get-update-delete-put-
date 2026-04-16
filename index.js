const express = require('express');
const db = require('./utils/db-connection');
const stuRoutes = require('./routes/studentsRoutes');
const app= express();

app.use(express.json());



app.use("/students",stuRoutes);


app.listen(3000,(err)=>{
    console.log('Server is running');
})