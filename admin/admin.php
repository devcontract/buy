
<?php
require "../php/db.php";
require "./php/user_table.php";
require "./php/admin_log.php";


?>
<?php if(isset($_SESSION['logged_user']) ) : /* checking if user already authorised  and if yes then*/ ?>

<?php else : ?>
<?php // header('Location: /') ?>
<?php endif; ?>




<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>LogInPage</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="module" src="/admin/js/index.js"></script>
  <link rel="stylesheet" href="./css/admin.css">


</head>

<body onload="$('#reg-form').hide();$('#users-form').hide();$('#logs-form').hide()">
  <div class="container" style=" margin-bottom:20px;">

    <div class="login-box">

      <div class="login-box-top">
        <p id="main_label" class="text-left">Hello <span> <?php echo $_SESSION['logged_user'] ?> </span> mister admin </p>

      </div>


      <div class="div_form">
        <div class="" id="users-form">


  <?php echo $user_table; ?>
        </div>
<br>
<br>
<br>

<div class="" id="logs-form">

<?php echo $dyn_table ?>
</div>

        <div class="" id="reg-form">
          <form class="" action="/php/register.php" method="post">
            <p>Login</p>
            <input type="text" name="reg_login" value="" placeholder="Enter your Login" required>
            <p>Email</p>
            <input type="email" name="reg_email" value="" required placeholder="Enter Your Email" >
            <p>Password</p>
            <input type="password" name="reg_password" value="" required placeholder="Enter Your Password" >
            <p>Re-Enter Password</p>
            <input type="password" name="reg_password_2" value="" required placeholder="Re-Enter Your Password" >
            <p>
              Make this user an Admin :
              <br>
              <input type="checkbox" name="admin" value="admin">
            </p>
            <p>
              <button type="submit" name="do_register" style="border-radius:5px;background-color:#00BEA3;color:white;" class="btn">Create User</button>
            </p>
          </form>
        </div>
      </div>
    <div class="login-box-bottom" style="display:flex;justify-content: space-between;">
       <div class="panel-buttons "> <button class="login-box-bottom btn" > <a href="/php/logout.php">Log out</a></button></div>
       <div class="panel-buttons "> <button class="login-box-bottom btn" onclick="$('#logs-form').hide();$('#users-form').hide();$('#reg-form').show();"> <a href="#">Create new user</a> </button></div>
       <div class="panel-buttons "> <button class="login-box-bottom btn" > <a href="/dashboard/index.php">To the Web Site</a></button></div>
       <div class="panel-buttons "> <button class="login-box-bottom btn" onclick="$('#logs-form').hide();$('#reg-form').hide();$('#users-form').show();"> <a href="#">Show Users</a> </button></div>
       <div class="panel-buttons "> <button class="login-box-bottom btn" onclick="$('#users-form').hide();$('#reg-form').hide();$('#logs-form').show()"> <a href="#">Show Logs</a> </button></div>
    </div>

    </div>


  </div>
</body>

</html>
