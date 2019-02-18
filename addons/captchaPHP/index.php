<?php
$public_key = "6LfFBZIUAAAAAK6tBMFZL51aWitAL1pYFInu0lip";
$private_key = "6LfFBZIUAAAAABqVWDsWEDFz5QcMf5KP7_6Yz7Um";
$url = "https://www.google.com/recaptcha/api/siteverify";

if (array_key_exists('submit_form',$_POST)) {
  //echo " <pre> ";print_r($_POST);echo "</pre>";
  $response_key = $_POST['g-recaptcha-response'];
  $response = file_get_contents($url.'?secret='.$private_key.'&response='.$response_key.'&remoteip='.$_SERVER['REMOTE_ADDR']);
  $response = json_decode($response);

  //echo "<pre>";print_r($response);echo "</pre>";

  if ($response->success == 1) {
    echo "Your Information is valid";
  }
  else {
    echo "YOur are a robot";
  }
}
 ?>
<script src="https://www.google.com/recaptcha/api.js"></script>
<form class="" action="index.php" method="post">
<input type="text" name="your_name" placeholder="Your Name" /> <br> <br>
<input type="text" name="email" placeholder="Your Email" /> <br> <br>
<div class="g-recaptcha" data-sitekey="<?php print $public_key ?>"></div>
<input type="submit" name="submit_form" value="submit your form">
</form>









</form>
