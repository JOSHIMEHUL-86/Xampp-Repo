const express = require('express');
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

// Sign in data................................................

app.post('/send-data',(req,res)=>{
    
    // Check User Exist or Not............................... 

    // const mail = req.body.email;
    // const pswd = req.body.password;

    // conn.query('select * from sign_in where mail = ? and pswd = ?',[mail,pswd],function(error,
    //     result,fields){
    //         if(result.length>0){
    //             console.log('if condition Hello');
    //         }else{
    //             console.log('Else condition.....');
    //         }
    //     })

    // ***************************************************************

    // Way 01
    // const {email , password} = req.body;
    // console.log('Request body is : ',req.body);


    // Way 02
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.status(400).json({message:'All field are required'});
    }

    const query = 'INSERT INTO sign_in (email,password) VALUES (?,?)';
    console.log('Query is : ',query);



    conn.query(query,[email,password],(err,result)=>{
        if(err){
            console.log('Error 50000000000 ');
            console.log('Error to inserting the data..',err);
            return res.status(500).json({message:'Database error'});
        }
        res.status(200).json({message:'Data saved successfully...',id: result.insertId});
    });
});


const port = process.env.PORT || 3000

app.listen(port , ()=>{
    console.log(`server is  run at http://localhost:${port}`);
});