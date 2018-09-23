import {minInput} from './mininput.js'
import * as cookie from '/dashboard/js/cookie.js'

$(document).ready(function(){
minInput();
if (cookie.getCookie('currency') == '' ){
  cookie.setCookie("currency","USD",5);
}

$("#bonusCurrancy").html(cookie.getCookie('currency'));


if (cookie.getCookie('softacapreached') == 'false'){
$("#purchase-myetherwallet").addClass('disabled');
$("#purchase-metamask").addClass('disabled');
} else {
  $("#purchase-myetherwallet").removeClass('disabled');
  $("#purchase-metamask").removeClass('disabled');
}


//$("#ether-button").trigger('click');
$("#etherButtonsHide").hide();
document.getElementById('ether-button');
document.getElementById('bitcoin-button');
$("#saleStatus").text("going to finish in");
  $(".cryptoCurrencyName").text("ETH");
  $(".tokenName").text("TES");
  $("#tokenPerEth").text("1000");
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
  $("#ether-1E").text(cookie.getCookie('currency') + "5");
  $("#ether-2E").text(cookie.getCookie('currency') + "10");
  $("#ether-3E").text(cookie.getCookie('currency') + "20");
  $("#ether-4E").text(cookie.getCookie('currency') + "40");
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
