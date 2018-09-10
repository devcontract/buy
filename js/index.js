

import * as progressBarModule from './progresbar_module.js'
import {showFiatPrice} from './fiatPrice_module.js'
import {timer} from './timer.js'
import {checkSoftCap} from './checker.js'
import * as cookie from './cookie.js'

$(document).ready(function(){
checkSoftCap();
timer();
showFiatPrice();
progressBarModule.progressBarCalcualtion();



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

document.getElementById('raised').innerHTML = "43333";
document.getElementById('softCap').innerHTML = "9876";
document.getElementById('hardCap').innerHTML = "44444";
document.getElementById('tokensold').innerHTML = "43433434";
document.getElementById('sale-type-1').innerHTML = "Private Sale";
document.getElementById('sale-type-2').innerHTML = "Pre-Sale";
document.getElementById('sale-type-3').innerHTML = "Public Sale";
$("#standartPrice").text("100000000");
$("#bonusPresent").text("0");


});
