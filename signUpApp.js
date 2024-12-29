// const express = require('express');
import express from 'express';
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
// const port =3000;

app.use(cors());
app.use(bodyParser.json());

const conn = mysql.createConnection({
    // port:3306,
    host:'localhost',
    user:'root',
    password:'',
    database:'first_database',
});

conn.connect((err)=>{
    if(err) {
    console.error('Error connecting to MySql : ',err);
    }else{
    console.log('Connected to MySql.....');
    }
});


app.post('/send-data-signup',(req,res)=>{
    const {firstName,lastName,email , password,confimPassword} = req.body;
    console.log('Request body is : ',req.body);

    if(!firstName || !lastName || !email || !password || !confimPassword){
        return res.status(400).json({message:'All field are required'});
    }
    const query = 'INSERT INTO sign_up (firstName, lastName, email, password, confimPassword) VALUES (?,?,?,?,?)';
    console.log('Query is : ',query);
    conn.query(query,[firstName,lastName,email,password,confimPassword],(err,result)=>{
        if(err){
            console.log('Error 50000000000 ');
            console.log('Error to inserting the data..',err);
            return res.status(500).json({message:'Database error'});
        }
        res.status(200).json({message:'Data saved successfully...',id: result.insertId});
    });
});


const port = process.env.PORT || 4000

app.listen(port , ()=>{
    console.log(`server is  run at http://localhost:${port}`);
});