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

  $(".currencyName").text("USD");
  $(".cryptoCurrencyName").text("ETH");
  $(".tokenName").text("TES");
  var tokenPrice = 5;
  $("#tokenPrice").text(tokenPrice);
  $("#stage-1pct").text("50%");
  $("#stage-2pct").text("30%");
  $("#stage-3pct").text("20%");
  $("#stage-4pct").text("0%");

var bonusBarVisible = true;
var stageBar = true;

  $("#bonus-1pct").text("10%");
  $("#bonus-2pct").text("35%");
  $("#bonus-3pct").text("75%");
  $("#bonus-4pct").text("100%");
  $("#ether-1E").text("USD5");
  $("#ether-2E").text("USD10");
  $("#ether-3E").text("USD20");
  $("#ether-4E").text("USD40");
  $("#standartPrice").text("100000000");
  $("#calcbonus").text("22220000");
  $("#tokenAmount").text("200000000000");
  $("#saleBonus1").text("1232");
  $("#saleBonus2").text("8888000");
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
