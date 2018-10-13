

import * as progressBarModule from './progresbar_module.js'
//import {showFiatPrice} from './fiatPrice_module.js'
import {timer} from './timer.js'

import * as cookie from './cookie.js'

$(document).ready(function(){

timer();
//showFiatPrice();
progressBarModule.progressBarCalcualtion();



$("#saleStatus").text("going to be finished in :");
$(".currency").text("EUR");
$(".tokenName").text("TES");
$("#saleopen").text("01-01-2019");
$("#saleclose").text("31-12-2019");

//$("#buy_metamask").click(function(){buyToken()});
/*showFiatPrice();
timerId();
showTransaction();
setInterval(function(){
if (find_occurences( $("#input_value").val() , ".") >=2 || $("#input_value").val() == "." ) {$("#input_value").val("");};
},10);*/

var token_name = "TAS";
var raised = 9923;

var hardCap = 44444;
var tokensold = 43433434
var standardPrice = 5;
var referral = 2313;
document.getElementById('raised').innerHTML = raised;

document.getElementById('hardCap').innerHTML = hardCap;
document.getElementById('tokensold').innerHTML = tokensold;
document.getElementById('referral').innerHTML = referral;


$("#standartPrice").text(standardPrice);
$("#bonusPresent").text("0");


});
