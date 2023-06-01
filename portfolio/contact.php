<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Set up the email headers
  $to = 'amanrajawat34@gmail.com';
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  
  // Compose the email message
  $emailContent = "Name: $name\n";
  $emailContent .= "Email: $email\n";
  $emailContent .= "Mobile: $mobile\n";
  $emailContent .= "Subject: $subject\n";
  $emailContent .= "Message: $message\n";

  // Send the email
  if (mail($to, $subject, $emailContent, $headers)) {
    echo 'Email sent successfully.';
  } else {
    echo 'Error sending email.';
  }
}
?>
