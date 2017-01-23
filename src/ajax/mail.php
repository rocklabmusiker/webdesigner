
<?php 

$to = "rocklabmusiker@gmail.com";
$email = $_POST['email'];

$err = "";
if (trim ($_POST['name']) == "" && trim ($_POST['email']) == "" && trim ($_POST['message']) == "" ){
	$err = "Bitte, fühlen Sie alle Felder aus";
} 
	
else if (trim ($_POST['name']) == "")  {
	$err = "Der Name ist nicht eingegeben";
}	
	
else if (!((strpos($email, ".") > 0) && (strpos($email, "@") > 0)))	{
	$err = "E-mail ist nicht korrekt";
}

else if (trim ($_POST['message']) == "")  {
	$err = "Die Nachricht ist nicht eingegeben";
}	
	
if ($err != ""){
	echo $err;
	exit;
}

$msg = "Die Nachricht wurde von <b>".$_POST['name']."</b>.<br><b> Die Nachricht: </b> <br>".$_POST['message']."<br><br> Die Nachricht kommt aus jungewebdesigner.de";
$subject = "=?utf-8?B?".base64_encode("Die Nachricht kommt von jungewebdesigner.de"). "?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=unf-8\r\n";
$success = mail ($to, $subject, $msg, $headers);
echo $success;

 ?>