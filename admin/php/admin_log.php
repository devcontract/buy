<?php
require "../../php/db.php";


$data = $_POST;

if (isset($data['do_log_check'])){

$log_login = $data['log_login'];

$get_log_query =  "SELECT * FROM logs WHERE login = '$log_login'";

$log_string = mysqli_query($db, $get_log_query);
$dyn_table = '<table class="table table-hover text-center">';
$dyn_table .= '<tr><th class="text-center">' . "Login". '</th>';
$dyn_table .= '<th class="text-center">' . "Date" . '</th>';
$dyn_table .= '<th class="text-center">' . "IP Address" . '</th>';
$dyn_table .= '<th class="text-center">' . "Status" . '</th> </tr>';
while($string_output = mysqli_fetch_array($log_string,MYSQLI_ASSOC)){
  $login_data = $string_output['login'] ;
  $date_data = $string_output['date'] ;
  $ip_data =  $string_output['ip'] ;
  $connection_status_data =  "Successful connection - " . $string_output['success'] ;


  $dyn_table .= '<tr><td>' . $login_data . '</td>';
  $dyn_table .= '<td>' . $date_data . '</td>';
  $dyn_table .= '<td>' . $ip_data . '</td>';
  $dyn_table .= '<td>' . $connection_status_data . '</td>';
}
$dyn_table .='</tr></table>';


echo $dyn_table;
echo $data['log_login'];
}

 ?>
