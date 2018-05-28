<?php 
$msg = $_POST["messgae"];
$sender = $_POST["sender"];

$email = $sender;
$invalid = array();

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $invalid[] = "invalidEmail"; //invalid email
}

if(empty($msg)){
    $invalid[] = "invalidMsg"; //invalid email
}

// if(empty($msg)){
//     $sent = 4; //invalid email
//     echo json_encode($sent);
//     die();
// }
if(!empty($invalid)){
    echo json_encode($invalid);
    die();
}

$to = "y08053166202@gmail.com";
$subject = "コメント";
$txt = $msg;
$headers = "From: $sender" . "\r\n" .
    "CC: trd.yuka@gmail.com";

if(mail($to,$subject,$txt,$headers)){
    echo json_encode(array("sent"));
}

// $data = $data->msg;


die();

?>