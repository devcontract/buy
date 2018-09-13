

import * as progressBarModule from './progresbar_module.js'
//import {showFiatPrice} from './fiatPrice_module.js' // this has been substitued with PHP
import {timer} from './timer.js'
import {checkSoftCap} from './checker.js'
import * as cookie from './cookie.js'
import {getCurrancyRate} from './cryptoCurExchange.js'

$(document).ready(function(){
  var token_name = "TAS";
  var raised = 43333;
  var softcap = 9876;
  var hardcap = 44444;
  document.getElementById('raised').innerHTML = raised;
  document.getElementById('softCap').innerHTML = softcap;
  document.getElementById('hardCap').innerHTML = hardcap;
  document.getElementById('tokensold').innerHTML = "43433434";
  document.getElementById('sale-type-1').innerHTML = "Private Sale";
  document.getElementById('sale-type-2').innerHTML = "Pre-Sale";
  document.getElementById('sale-type-3').innerHTML = "Public Sale";
  $("#standartPrice").text("100000000");
  $("#bonusPresent").text("0");

checkSoftCap();
timer();
//showFiatPrice(); // this has been substitued with PHP
progressBarModule.progressBarCalcualtion();

getCurrancyRate(raised,softcap,hardcap);


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




});
