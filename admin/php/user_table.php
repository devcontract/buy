<?php

$login = $_SESSION['logged_user'];
$get_log_query =  "SELECT * FROM users";

$log_string = mysqli_query($db, $get_log_query);
$user_table = '<table class="table table-hover text-center">';
$user_table .= '<tr><th class="text-center">' . "Login". '</th>';
$user_table .= '<th class="text-center">' . "Email" . '</th>';
$user_table .= '<th class="text-center">' . "User Type" . '</th>';
//$user_table .= '<th class="text-center">' . "Status" . '</th> </tr>';
while($user_string_output = mysqli_fetch_array($log_string,MYSQLI_ASSOC)){
  $user_table_login_data = $user_string_output['login'] ;
  $user_table_email_data = $user_string_output['email'] ;
  $user_table_type_data =  $user_string_output['user_type'] ;



  $user_table .= '<tr><td>' . $user_table_login_data .' </button>  </td>';
  $user_table .= '<td>  ' . $user_table_email_data . '</td>';
  $user_table .= '<td>  ' . $user_table_type_data . '</td>';
}
$user_table .='</tr></table>';

 ?>
