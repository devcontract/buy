<?php

$data = $_POST;
$fp = fopen('config.txt' , 'w');
//$example = array('one' => 1,'two' => 2 );

fwrite($fp , json_encode($data, JSON_PRETTY_PRINT));
fclose($fp);
echo ($data);

 ?>
