<?php
    $servername="localhost";
    $username = "root";
    $password="";
    $database="first_Database";
    $con = mysqli_connect($servername,$username,$password,$database);
    if(!$con){
        die("Errpr detected..".mysqli_connect_error());
    }

    if(isset($_POST['save'])){
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $gender = $_POST['gender'];
        $phone = $_POST['phone'];

        $sql_query = "insert into login_entry (firstName,lastName,gender,mobile) values('$first_name','$last_name','$gender','$phone')";

        if(mysqli_query($con,$sql_query)){
            echo "New detail enter successfully!";
        }
        else
        {
            echo "Error : ",$sql."".mysqli_error($con);
        }
        mysqli_close($con);
    }


    ?>