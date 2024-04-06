const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel =require('./models/Employee')

const app =  express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/register',(req, res)=>{
    EmployeeModel.create(req.body)
    .then(result => res.json(result))
    .catch(err =>res.json(err))

})

app.listen(()=>{
    console.log("server running");
    console.log("backend is runnig");

})




