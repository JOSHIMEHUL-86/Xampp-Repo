const { response } = require("express");

// Sign Up data........................................................

document.getElementById('signUp').addEventListener('submit',(e)=>{
    e.preventDefault();

    const signUpData = {
        firstName : document.getElementById('firstName').value,
        lastName : document.getElementById('lastName').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        confimPassword : document.getElementById('confimPassword').value,
    };
    console.log('sign up data is : ',signUpData);

    fetch('http://localhost:3000/send-data-signup',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:
        JSON.stringify(signUpData),
        // JSON.stringify({
        //     firstName:'John',
        //     lastName:'Doe',
        //     email:'example@123gmail.com',
        //     password:'123456',
        //     confimPassword:'123456',
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