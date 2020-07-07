<?php


$result="";

if(isset($_POST['submit'])){
        require 'PHPMailerAutoload.php';
        $mail = new PHPMailer;

        $mail->Host='smtp.gmail.com';
        $mail->Port=587;
        $mail->SMTPAuth=true;
        $mail->SMTPSecure='tls';
        $mail->Username='stevenmarks75@gmail.com';
        $mail->Password='Erding3r';

        $mail->setFrom($_POST['email']);
        $mail->addAddress('stevenmarks75@gmail.com');
        $mail->addReplyTo($_POST['email']);

        $mail->isHTML(true);
        $mail->Subject='Form Submission from BVSWebDesign';
        $mail->Body='<h1 align="center">Name: ' . $_POST['name'] . '</h1><br>
        <p>Email: '.$_POST['email'].'<br>
        Message: '.$_POST['message'].'</p>';

        if(!$mail->send()){
            $result='Something went wrong - please email your query to stevenmarks75@gmail.com';
        } 
        header("Location:index.html");
    }

?>