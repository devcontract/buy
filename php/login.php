<?php

require 'db.php';

$data = $_POST;

if(isset($data['do_login']) ){ // if login button is pressed do
$errors = array();
$login = strtolower($data['login']);
$password = $data['password'];
$sql_login = "SELECT login FROM users WHERE login = '$login'";
$sql_password = "SELECT password FROM users WHERE login = '$login'";
$result_login = mysqli_query($db,$sql_login);
$result_password = mysqli_query($db,$sql_password);
$password_array = mysqli_fetch_array($result_password,MYSQLI_ASSOC);
$count = mysqli_num_rows($result_login);

if($count == 1 ){    // checking if login exists

if ( password_verify($data['password'],$password_array['password']) ) // checking if password match
{ //if all good we need to login the user

$_SESSION['logged_user'] = $login;
header('Location: /dashboard/index.php');

} else{
  $errors[] = "Invalid password";

}

}else{
  $errors[] = "Invalid Login";

}
if( ! empty($errors) ){
//echo '<div style="color:red;">'. array_shift($errors). '</div><hr>';
header('Location: /index.html');
 }
}

 ?>
