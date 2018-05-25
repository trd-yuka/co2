<?php 
$msg = $_POST["messgae"];
$sender = $_POST["sender"];

$email = $sender;


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $sent = 2; //invalid email
    echo json_encode($sent);
    die();
}

// if(empty($sender)){
//     $sent = 3; //invalid email
//     echo json_encode($sent);
//     die();
// }

// if(empty($msg)){
//     $sent = 4; //invalid email
//     echo json_encode($sent);
//     die();
// }

$sent = 0;
$to = "y08053166202@gmail.com";
$subject = "コメント";
$txt = $msg;
$headers = "From: $sender" . "\r\n" .
    "CC: trd.yuka@gmail.com";

if(mail($to,$subject,$txt,$headers)){
    $sent = 1;
}

// $data = $data->msg;

echo json_encode($sent);
die();

?>