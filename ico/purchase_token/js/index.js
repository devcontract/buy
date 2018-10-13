import {minInput} from './mininput.js'
import * as cookie from '/dashboard/js/cookie.js'
import {checkInput} from './check_input.js'

$(document).ready(function(){
minInput();
checkInput();
if (cookie.getCookie('softacapreached') == 'false'){
$("#purchase-myetherwallet").addClass('disabled');
$("#purchase-metamask").addClass('disabled');
$(".deactivate").attr('onclick','return false');

} else {
  $("#purchase-myetherwallet").removeClass('disabled');
  $("#purchase-metamask").removeClass('disabled');
  $(".deactivate").attr('onclick','');
}


$("#ether-button").trigger('click');
document.getElementById('ether-button');
document.getElementById('bitcoin-button');
$("#saleStatus").text("going to finish in");

  $(".currencyName").text("EUR");
  $(".cryptoCurrencyName").text("ETH");
  $(".tokenName").text("TES");
  var tokenPrice = 100;
  $("#tokenPrice").text(tokenPrice);
  $("#stage-1pct").text("50%");
  $("#stage-2pct").text("30%");
  $("#stage-3pct").text("20%");
  $("#stage-4pct").text("0%");

var bonusBarVisible = true;
var stageBar = true;
var standartPrice = 0.20;
var calcbonus  = 10;
var saleBonus2 = 20;




  $("#bonus-1pct").text("10%");
  $("#bonus-2pct").text("35%");
  $("#bonus-3pct").text("75%");
  $("#bonus-4pct").text("100%");
  $("#ether-1E").text("5");
  $("#ether-2E").text("10");
  $("#ether-3E").text("20");
  $("#ether-4E").text("40");
  $("#standartPrice").text(standartPrice);
  $("#calcbonus").text(calcbonus);
  $("#tokenAmount").text("200000000000");
  $("#saleBonus1").text("1232");
  $("#saleBonus2").text(saleBonus2);
  $("#minimumInvestment").text("500");
  $("#paymentAddressInput");
  $("#gasLimitValue").text("21000");
  $("#gasPriceValue").text("9");
  $("#paymentCurrency").text("Ethereum");

  $("#bitcoin-button").click(function() {
  $("#etherButtonsHide").hide();
  $("#paymentCurrency").text("Bitcoin");
  });

  $("#ether-button").click(function() {
  $("#etherButtonsHide").show();
  $("#paymentCurrency").text("Ethereum");
  });
});
