
<?php
require "db.php";

?>
<?php if(isset($_SESSION['logged_user']) ) : /* checking if user already authorised  and if yes then*/ ?>

Authorised!!! <br>
Hello , <?php echo $_SESSION['logged_user'] ?>!
<hr>
<a href="/logout.php">log Out</a>
<?php else : ?>
  You are not authorized! <br>
<a href="/login.php">Log In</a> <br>
<a href="/signup.php">Sign Up</a>
<?php endif; ?>
