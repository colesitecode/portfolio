<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'geraldhab08@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";


    $to = "colesitecode@gmail.com";

    $headers = "From: $email_from \r\n";
    
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    //header("Location: index.html");

    //echo "Your message sent Successfully";

    echo "<script type='text/javascript'>alert('Your message sent Successfully');
    window.history.log(-1);
    </script>";
    
    echo '<script>window.location.href="index.html";</script>';

    
?>