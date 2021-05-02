 <?php

//Import PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

require_once 'PHP_Mailer/PHPMailer.php';
require_once 'PHP_Mailer/SMTP.php';
require_once 'PHP_Mailer/Exception.php';


//Instantiation and passing `true` enables exceptions
/*
$mail = new PHPMailer(true);
if(isset( $_POST['submit'])){

  $name =$_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'sathiyabever16@gmail.com';                     //SMTP username
    $mail->Password   = 'password';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('sathiyabever16@gmail.com');
    $mail->addAddress('sathiyabever16@gmail.com');     //Add a recipient
   
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Portfolio : $subject';
    $mail->Body    = '<b>From : $name</b> <br> <b>Mail id : $email</b> <br> $message';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
*/

  $receiving_email_address = 'sathiyastar2000@gmail.com';

  if( file_exists($php_email_form = '../assets/vendor/PHP_Mailer/PHPMailer.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];


  $contact->smtp = array(
    'host' => 'smtp.gmail.com',
    'username' => 'sathiyabever16@gmail.com',
    'password' => 'cse@2017kings',
    'port' => '587'
  );
  

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?> 

<!DOCTYPE html>
<html lang="en">

<body>
  <h1>Mail Send</h1>
</body>
</html>
