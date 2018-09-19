<?php
require "db.php";

 $data = $_POST;                // all variables that returned by POST
 if( isset($data['do_register']) )  //do_signup is a button  and we are checking if this buttona had been pressed
   // 3десь регистрация
{
$errors = array();      // array where we store all errors
if( trim($data['reg_login']) == '') //checking login if it is empty
{
  $errors[] = 'Please enter Login!';
}
if( trim($data['reg_email']) == '') //checking email if it is empty
{
  $errors[] = 'Please enter email!';
}
if( $data['reg_password'] == '') //checking if password is not empty
{
  $errors[] = 'Please enter password!';
}

if( $data['reg_password_2'] != $data['reg_password']) //checking if 1 and and 2nd passwords match
{
  $errors[] = 'Passwords dont match!';
}

if( R::count('users',"login = ?", array($data['reg_login'])) > 0  )
{
  $errors[] = 'User with this login already exists! <a href="/"> Back</a>';
}

if( R::count('users',"email = ?", array($data['reg_email'])) > 0  )
{
  $errors[] = 'User with this email already exists! <a href="/"> Back</a>';
}

if( empty($errors) ){
  //all good no errors so we can register

$user = R::dispense('users');   // the following will create table and add necessary rows to the table Red Bean Library does this
$user->login = $data['reg_login'];
$user->email = $data['reg_email'];
$user->password = password_hash($data['reg_password'],PASSWORD_DEFAULT); // password_hash() creates a new password hash using a strong one-way hashing algorithm. password_hash() is compatible with crypt(). Therefore, password hashes created by crypt() can be used with password_hash().
R::store($user);
echo '<div style="color:green;">Congratulations you have registered</div> <hr>' ; // displays only first element of errors array
header('Location: /');
} else {
  echo '<div style="color:red;">' . array_shift($errors) . ' </div> <hr>' ; // displays only first element of errors array
}
}
 ?>
