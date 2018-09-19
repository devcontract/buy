<?php
require "db.php"
?>

<?php

$data = $_POST;

if (isset($_POST['do_register']) ){

$errors = array(); // array where we store all our errors

if ( trim($data['reg_login']) == '' ) // checking if login entry is empty or not
{
  $errors[] = 'Please eneter login';
}

if ( trim($data['reg_email']) == '' ) // checking if email entry is empty or not
{
  $errors[] = 'Please eneter email';
}

if ( $data['reg_password'] == '' ) // checking if password entry is empty or not
{
  $errors[] = 'Please eneter password';

}

$login = strtolower($data['reg_login']);
$email = strtolower($data['reg_email']);
$password = $data['reg_password'];
$r_password = $data['reg_password_2'];

if ($password != $r_password){
  $errors[] = 'Password dont match';
}
$password = password_hash($password,PASSWORD_DEFAULT);
$check_login = "SELECT * FROM users WHERE username = '$login'";
$check_email = "SELECT * FROM users WHERE email = '$email'";
$result_user = mysqli_query($db, $check_login);
$result_email = mysqli_query($db, $check_email);
if (mysqli_num_rows($result_user) > 0 ) {
  $errors[] = "Sorry this login is already taken";
}
if (mysqli_num_rows($result_email) > 0 ) {
  $errors[] = "Sorry this email is already taken";
}
if ( empty($errors) ){

  $query = "INSERT INTO users  VALUES (NULL,   '$email', '$login', '$password')";
  mysqli_query($db, $query);
  mysqli_close($db);
//echo ' <script> alert("You have registered"); </script> ' ; // displays only first element of errors array
  header('Location: /index.html');
} else {
echo '<div style="color:red;">' . array_shift($errors) . ' </div> <hr>' ; // displays only first element of errors array

}

}
 ?>
