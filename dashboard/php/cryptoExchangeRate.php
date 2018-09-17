<?php
$raised = $_GET['raised'];
$softcap = $_GET['softcap'];
$hardcap = $_GET['hardcap'];

if ($_COOKIE['currency']  == 'USD'){
  $symbol = 'USD';
} elseif ($_COOKIE['currency'] == 'EUR') {
  $symbol = 'EUR';
}
$file = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR"; //adding a variable with URL
$data = file_get_contents($file); // sending UTL content to variable
$result = json_decode($data, true); // deocding data to json
$calc = array ('valueRaised' => number_format(($result[$symbol] * $raised),2), 'symbol' => $symbol,'valueSoft' => number_format(($result[$symbol] * $softcap),2), 'symbol' =>  $symbol,'valueHard' => number_format(($result[$symbol] * $softcap),2), 'symbol' =>  $symbol);
echo json_encode($calc);


?>
