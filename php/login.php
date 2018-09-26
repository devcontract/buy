<?php

require 'db.php';

require 'get_ip.php';


$data = $_POST;

if(isset($data['do_login']) ){ // if login button is pressed do
$errors = array();
$login = strtolower($data['login']);
$password = $data['password'];
$sql_login = "SELECT login FROM users WHERE login = '$login'";
$sql_password = "SELECT password FROM users WHERE login = '$login'";
$sql_admin = "SELECT user_type FROM users WHERE login = '$login'";

$result_login = mysqli_query($db,$sql_login);
$result_password = mysqli_query($db,$sql_password);
$password_array = mysqli_fetch_array($result_password,MYSQLI_ASSOC);
$count = mysqli_num_rows($result_login);

$admin_result = mysqli_query($db,$sql_admin);
$admin_output = mysqli_fetch_array($admin_result);
$admin_data = $admin_output['user_type'];


$user_ip = getUserIP();
date_default_timezone_set('Europe/London');
$time_stamp = date('l \t\h\e jS') ." ". date("h:i:sa");

$userAgent = getenv('HTTP_USER_AGENT');




if($count == 1 ){    // checking if login exists

if ( password_verify($data['password'],$password_array['password']) ) // checking if password match
{ //if all good we need to login the user

$login_status = "yes";
$log_query = "INSERT INTO logs VALUES (NULL, '$login', '$time_stamp', '$user_ip' , '$login_status','$userAgent')";
mysqli_query($db,$log_query);

$_SESSION['logged_user'] = $login;

if ($admin_data == "admin"){
  header('Location: /admin/admin.php');
} else {
  header('Location: /dashboard/index.php');
}


mysqli_close($db);
} else{
  $errors[] = "Invalid password";

}

}else{
  $errors[] = "Invalid Login";

}
if( ! empty($errors) ){
//echo '<div style="color:red;">'. array_shift($errors). '</div><hr>';
$login_status = "no";
$log_query = "INSERT INTO logs VALUES (NULL, '$login', '$time_stamp', '$user_ip' , '$login_status','$userAgent')";
mysqli_query($db, $log_query);
mysqli_close($db);

 }
}

 ?>
