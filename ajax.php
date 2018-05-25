<?php 
$data = $_POST["messgae"];
$sent = 0;
$to = "trd.yuka@gmail.com";
$subject = "Co2 Comments";
$txt = $data;
$headers = "From: co2.com" . "\r\n" .
    "CC: trd.ricz@gmail.com";

if(mail($to,$subject,$txt,$headers)){
    $sent = 1;
}

// $data = $data->msg;

echo json_encode($sent);

?>