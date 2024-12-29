// const { response } = require("express");

// Sign in data.................................................

document.getElementById('dataForm').addEventListener('submit',(e)=>{
    e.preventDefault();


    const dataToSend={
    email : document.getElementById('email').value,
    password : document.getElementById('password').value,
    };

    // console.log(`Collected data is : ${dataToSend}`);
    console.log('Collected data is : ',dataToSend);

    fetch('http://localhost:3000/send-data',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:
        JSON.stringify(dataToSend),
        // body:JSON.stringify({
        //     email:'example@123gmail.com',
        //     pswd:'123456',
        // }),
    }).then((response)=>response.json())
        .then((data)=>{
            console.log('Server Response : ',data);
            alert('Data sent Successfully...');
        })
        .catch((error)=>{
            console.error('Error is : ',error);
        });

});
