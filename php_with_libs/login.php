<?php

require 'db.php';
$data = $_POST;
if(isset($data['do_login']) )   //if button login is pressed
{
  $errors = array();
  $user = R::findOne('users', 'login = ?', array($data['login'])); //red bean lib usage  please see red bean for reference https://redbeanphp.com/index.php?p=/crud
  if( $user )
  {
//if login exists

if( password_verify($data['password'], $user->password) )
{

// all good now we have to login user

$_SESSION['logged_user'] = $user;
header('Location: /dashboard/index.php');
} else {
  $errors[] = 'Incorrect passowrd';
}

  }else{
    $errors[] = 'User  with this login doesnt exist';
  }
  if( ! empty($errors) )
  {
    echo '<div style="color:red;">'. array_shift($errors). ' Go back to the <a href="/"> Main </a> page!  </div><hr>';
  }
}
 ?>
