

import {timerId} from './progresbar_module.js'
import {showFiatPrice} from './fiatPrice_module.js'
import {showTransaction} from './transaction_module.js'
import {find_occurences} from './calcInputRestriction_module.js'

$(document).ready(function(){

$("#saleStatus").text("going to be finished in :");

$(".cryptoCurrencyName").text("ETH");
$(".tokenName").text("TES");
//$("#buy_metamask").click(function(){buyToken()});
/*showFiatPrice();
timerId();
showTransaction();
setInterval(function(){
if (find_occurences( $("#input_value").val() , ".") >=2 || $("#input_value").val() == "." ) {$("#input_value").val("");};
},10);*/




var token_name = "TAS";

document.getElementById('raised').innerHTML = "1";
document.getElementById('soft').innerHTML = "9876";
document.getElementById('hard').innerHTML = "44444";
document.getElementById('tokensold').innerHTML = "43433434";
document.getElementById('value_token').innerHTML = "0";

document.getElementById('gLimitBay').innerHTML = "2200";
document.getElementById('gprice').innerHTML = "4000";
document.getElementById('glimval_token_withdr').innerHTML = "2200";
document.getElementById('gprice_token_withdr').innerHTML = "4000";
document.getElementById('glimval_eth_Refund').innerHTML = "2200";
document.getElementById('gprice_eth_Refund').innerHTML = "4000";
document.getElementById('pop_up_window_input').value = document.getElementById('paymentaddr').value;


});
